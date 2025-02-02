export default class GeneralValidator {
    constructor() {
        this.errors = {};
    }

    required(value) {
        if (!value || value === "") {
            this.errors.required = "This field is required";
            return false;
        }
        return true;
    }

    regex(value, { pattern, message }) {
        if (!pattern.test(value)) {
            this.errors.regex = message;
            return false;
        }
        return true;
    }

    minLength(value, length) {
        if (value.length < length) {
            this.errors.minLength = `This field must be at least ${length} characters long`;
            return false;
        }
        return true;
    }

    maxLength(value, length) {
        if (value.length > length) {
            this.errors.maxLength = `This field must be at most ${length} characters long`;
            return false;
        }
        return true;
    }

    static validateNestedRequiredFields(fields) {
        let hasErrors = false;

        for (let field in fields) {
            // Check if the field is an array
            if (Array.isArray(fields[field])) {
                fields[field].forEach(item => {
                    if (typeof item === 'object') {
                        hasErrors = this.validateRequiredFields(item) || hasErrors;
                    }
                });
            } else if (typeof fields[field] === 'object' && fields[field] !== null) {
                // If it's an object, call validateRequiredFields recursively
                hasErrors = this.validateRequiredFields(fields[field]) || hasErrors;
            }
        }

        return hasErrors;
    }


    // This function named validateRequiredFields validates required fields in an object. It checks if the field value is an object, and if it is required and not filled, or if it has any errors. If there are no errors and all required fields are filled, it returns false.
    static validateRequiredFields(fields) {
        let hasErrors = false;
    
        function validate(fields) {
            for (let field in fields) {
                if (typeof fields[field] === "object" && fields[field] !== null) {
                    if (Array.isArray(fields[field])) {
                        for (let item of fields[field]) {
                            validate(item);
                        }
                    } else {
                        if (fields[field]?.rules?.required && fields[field]?.value?.length == 0) {
                            hasErrors = true;
                        }
                        if (fields[field]?.errors && Object.keys(fields[field].errors).length > 0) {
                            hasErrors = true;
                        }
                        validate(fields[field]);
                    }
                }
            }
        }
    
        validate(fields);
    
        return hasErrors;
    }

    static validateRequiredFieldsArray(arrayOfFields) {
        let hasErrors = false;

        for (let i = 0; i < arrayOfFields.length; i++) {
            const fields = arrayOfFields[i];

            // Check each field in the current object
            for (let field in fields) {
                // Check if the value is an object
                if (typeof fields[field] !== "object") continue;

                // Check if the field is required and not filled
                if (fields[field]?.rules && fields[field]?.rules.required === true && !fields[field]?.value) {
                    hasErrors = true;
                }

                // Check if the field has any errors
                if (fields[field]?.errors && Object.keys(fields[field].errors).length > 0) {
                    hasErrors = true;
                }
            }
        }
        // Return false if there are no errors and all required fields are filled
        return hasErrors;
    }

    validate(value, validationRules) {
        this.errors = {};

        for (let rule in validationRules) {
            const ruleValue = validationRules[rule];
            if (rule === "required" && ruleValue) {
                this.required(value);
            } else if (rule === "regex" && ruleValue) {
                this.regex(value, ruleValue);
            } else if (rule === "minLength" && value.length && ruleValue) {
                this.minLength(value, ruleValue);
            } else if (rule === "maxLength" && value.length && ruleValue) {
                this.maxLength(value, ruleValue);
            }
        }
        return this.errors;
    }

    static convertToUppercaseAMPM = (timeString) => {
        try {
            let [time, period] = timeString?.split(' ') || [];
            period = period?.toUpperCase();
            return `${time} ${period}`;
        } catch (err) {
            console.error(err)
        }
    };

    static convertTo12Hour(time) {
        // Split the time into hours and minutes
        const [hour, minute] = time && time.split(':');
      
        // Convert hour to a number
        let hourNum = parseInt(hour, 10);
      
        // Determine AM or PM suffix
        const suffix = hourNum >= 12 ? 'PM' : 'AM';
      
        // Convert hour to 12-hour format
        hourNum = hourNum % 12 || 12;
      
        // Return the formatted time string
        return `${hourNum}:${minute} ${suffix}`;
    }
}

export const generalValidator = new GeneralValidator();
