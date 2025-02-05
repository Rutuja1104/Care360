export const PAGE_STATE = {
    PRE_LOADING: 'preloading',
    LOADING: 'loading',
    PAGE_READY: 'ready',
}
export const BUTTON_TYPE = {
    PRIMARY: "primary",
    PRIMARY_LIGHT_WITH_BORDER: "primary-light-with-border",
    LIGHT_WITH_NO_BORDER: "light-with-no-border",
    DANGER: "danger",
    BUTTON_WITH_LIGHT_COLOR: "button-with-light-color",
    BUTTON_WITH_LIGHT_COLOR_NO_ICON: "button-with-light-color-no-icon",
    BUTTON_WITH_GRAY_COLOR: "button-with-gray-color",
    BUTTON_WITH_LIGHT_COLOR_BG: "button-with-light-color-bg",
    BUTTON_WITH_RED_COLOR_BG: "button-with-red-color-bg",
    BUTTON_WITH_LIGHT_COLOR_TOOGLE: "primary-light-with-border-btn-toogle",
    BUTTON_WITHOUT_BORDER: "light-without-border-btn",
    BUTTON_WITH_BOX_SHADOW: "button-with-box-shadow",
    BUTTON_WITHOUT_BG_COLOR_TOGGLE: "button-without-bg-color-toggle",
    BUTTON_WITHOUT_ANY_COLOR_TOGGLE: "button-without-any-color-toggle"
}

export const PATIENT_PERMISSION = [
    {
        permission: "Create Edit View Patient",
        description: "Allow User to create, update & delete patient",
        isSelected: false
    },
    {
        permission: "View Patients",
        description: "Allow the user to view patient information & able to export print patients",
        isSelected: false
    },
    {
        permission: "Share Patients",
        description: "Allow access to all patients in a practice group",
        isSelected: false
    }
]

export const APPOINTMENT_PERMISSION = [
    {
        permission: "Create Appointments",
        description: "Allow the user to create, update, reschedule, cancel & delete appointments",
        isSelected: false
    },
    {
        permission: "View Appointments",
        description: "Allow the user to view patient appointments and other scheduling features.",
        isSelected: false
    },
    {
        permission: "Accept/Deny Appointment Request",
        description: "Allow the user to accept or denied appointment request",
        isSelected: false
    },
    {
        permission: "Appointment Provider Selection",
        description: "Allow the user to schedule appointments for all providers in the practice group",
        isSelected: false
    },
]

export const AVAILABILITY_PERMISSION = [
    {
        permission: "Create Availability",
        description: "Allow the user create, update, delete availability",
        isSelected: false
    },
    {
        permission: "View Availability",
        description: "Allow the user view availability",
        isSelected: false
    },
    {
        permission: "Have Availability",
        description: "Have Availability",
        isSelected: false
    },
]

export const DOCUMENT_INTAKE_PERMISSION = [
    {
        permission: "Edit Intake Documents",
        description: "Allow the user to view and edit intake documents",
        isSelected: false
    },
    {
        permission: "View/Download/Upload Patients Documents",
        description: "Allow the user to view/download/upload patients documents",
        isSelected: false
    },
]

export const CALENDAR_ENCOUNTER_PERMISSION = [
    {
        permission: "Checked In",
        description: "Allow user checked in patient, edit information and collect payments",
        isSelected: false
    },
    {
        permission: "Exam",
        description: "Allow user to done physical examinations",
        isSelected: false
    },
    {
        permission: "Access Clinical Notes",
        description: "Allow the user to view and interact with the clinical notes components",
        isSelected: false
    },
    {
        permission: "Sign/Lock Clinical Notes",
        description: "Allow the user to sign and lock clinical notes",
        isSelected: false
    },
]

export const REPORT_PERMISSION = [
    {
        permission: "Access Report",
        description: "Allow the user to access and interact with reports",
        isSelected: false
    },
]

export const BILLING_PERMISSION = [
    {
        permission: "Create Superbill/Claim",
        description: "Allow the user to create, update & delete the superbill / claim",
        isSelected: false
    },
    {
        permission: "View Superbill/Claim",
        description: "Allow the user to view, interact with the billing system",
        isSelected: false
    },
    {
        permission: "Submit Claim",
        description: "Allow the user to submit claim",
        isSelected: false
    },
    {
        permission: "Create Fee Schedule",
        description: "Allow the user to create, update & delete fee schedule",
        isSelected: false
    },
    {
        permission: "View Fee Schedule",
        description: "Allow the user to view fee schedule",
        isSelected: false
    },
]

export const MESSAGES_PERMISSION = [
    {
        permission: "Access To Messages",
        description: "Allow the user to access the messages",
        isSelected: false
    },
]

export const AUDIO_CALL_PERMISSION = [
    {
        permission: "Audio Call",
        description: "Allow the user to access the audio call",
        isSelected: false
    },
]

export const FAX_PERMISSION = [
    {
        permission: "Fax",
        description: "Allow the user to access fax",
        isSelected: false
    },
]

export const COMMUNICATION_PERMISSION = [
    {
        permission: "Tasks",
        description: "Allow the user to access tasks",
        isSelected: false
    },
    {
        permission:"ContactDirectory",
        description:"Allow the user to access contact directory",
        isSelected: false

    }
]

export const REFERRAL_PERMISSION = [
    {
        permission: "Referral",
        description: "Allow the user to access referral",
        isSelected: false
    },
]

export const PRACTICE_PERMISSION = [
    {
        permission: "Edit Practice Group Info",
        description: "Allow the user to view & edit practice group info",
        isSelected: false
    },
]

export const TEMPLATE_FORM_PERMISSION = [
    {
        permission: "Create Templates/Form Builder",
        description: "Allow the user to create, update & delete templates/form builder",
        isSelected: false
    },
    {
        permission: "View Templates/Form Builder",
        description: "Allow the user to view existing clinical templates",
        isSelected: false
    },
]

export const USER_MANAGEMENT_PERMISSION = [
    {
        permission: "Create Users",
        description: "Allow the user to create another user",
        isSelected: false
    },
    {
        permission: "View Users",
        description: "Allow the user to view existing user",
        isSelected: false
    },
    {
        permission: "Manage Permissions",
        description: "Allow the user to manage permissions of their providers and staff",
        isSelected: false
    },
]

export const ERX_PERMISSION = [
    {
        permission: "Access to eRX",
        description: "Allow access to eRX screens",
        isSelected: false
    },
    {
        permission: "Drug Interaction Check",
        description: "Allow the user to perform drug integration checks",
        isSelected: false
    },
]

export const PAGE_PERMISSIONS = {
    CREATE_EDIT_VIEW_PATIENT: ['Create Edit View Patient'],
    VIEW_PATIENTS: ['View Patients'],
    SHARE_PATIENTS: ['Share Patients'],
    CREATE_APPOINTMENTS: ['Create Appointments'],
    VIEW_APPOINTMENTS: ['View Appointments'],
    ACCEPT_DENY_APPOINTMENT_REQUEST: ['Accept/Deny Appointment Request'],
    APPOINTMENT_PROVIDER_SELECTION: ['Appointment Provider Selection'],
    CREATE_AVAILABILITY: ['Create Availability'],
    VIEW_AVAILABILITY: ['View Availability'],
    HAVE_AVAILABILITY: ['Have Availability'],
    EDIT_INTAKE_DOCUMENTS: ['Edit Intake Documents'],
    VIEW_DOWNLOAD_UPLOAD_PATIENTS_DOCUMENTS: ['View/Download/Upload Patients Documents'],
    CHECKED_IN: ['Checked In'],
    EXAM: ['Exam'],
    ACCESS_CLINICAL_NOTES: ['Access Clinical Notes'],
    SIGN_LOCK_CLINICAL_NOTES: ['Sign/Lock Clinical Notes'],
    ACCESS_REPORT: ['Access Report'],
    CREATE_SUPERBILL_CLAIM: ['Create Superbill/Claim'],
    VIEW_SUPERBILL_CLAIM: ['View Superbill/Claim'],
    SUBMIT_CLAIM: ['Submit Claim'],
    CREATE_FEE_SCHEDULE: ['Create Fee Schedule'],
    VIEW_FEE_SCHEDULE: ['View Fee Schedule'],
    ACCESS_TO_MESSAGES: ['Access To Messages'],
    AUDIO_CALL: ['Audio Call'],
    FAX: ['Fax'],
    COMMUNICATIONS:['Communications'],
    REFERRAL: ['Referral'],
    EDIT_PRACTICE_GROUP_INFO: ['Edit Practice Group Info'],
    CREATE_TEMPLATES_FORM_BUILDER: ['Create Templates/Form Builder'],
    VIEW_TEMPLATES_FORM_BUILDER: ['View Templates/Form Builder'],
    CREATE_USERS: ['Create Users'],
    VIEW_USERS: ['View Users'],
    MANAGE_PERMISSIONS: ['Manage Permissions'],
    ACCESS_TO_ERX: ['Access to eRX'],
    DRUG_INTERACTION_CHECK: ['Drug Interaction Check']
};

export const PERMISSION_KEY = {
    PATIENT_PERMISSION: "patientPermissions",
    APPOINTMENT_PERMISSION: "appointmentPermissions",
    AVAILABILITY_PERMISSION: "availabilityPermissions",
    DOCUMENT_INTAKE_PERMISSION: "documentPermissions",
    CALENDAR_ENCOUNTER_PERMISSION: "calendarPermissions",
    REPORT_PERMISSION: "reportPermissions",
    BILLING_PERMISSION: "billingPermissions",
    MESSAGES_PERMISSION: "messagesPermissions",
    AUDIO_CALL_PERMISSION: "audioPermissions",
    FAX_PERMISSION: "faxPermissions",
    COMMUNICATIONS_PERMISSION:"communicationPermissions",
    REFERRAL_PERMISSION: "referralPermissions",
    PRACTICE_PERMISSION: "practicePermissions",
    TEMPLATE_FORM_PERMISSION: "templatePermissions",
    USER_MANAGEMENT_PERMISSION: "userPermissions",
    ERX_PERMISSION: "eRXPermissions",
}

export const STATE = [
    { value: "NY-New York", label: "NY-New York" },
    { value: "NJ-New Jersey", label: "NJ-New Jersey" },
    { value: "UT-Utah", label: "UT-Utah" },
    { value: "NV-Nevada", label: "NV-Nevada" },
    { value: "AK", label: "AK" },
    { value: "AL", label: "AL" },
    { value: "AR", label: "AR" },
    { value: "AS", label: "AS" },
    { value: "AZ", label: "AZ" },
    { value: "CA", label: "CA" },
    { value: "CO", label: "CO" },
    { value: "CT", label: "CT" },
    { value: "DC", label: "DC" },
    { value: "DE", label: "DE" },
    { value: "FL", label: "FL" },
    { value: "FM", label: "FM" },
    { value: "GA", label: "GA" },
    { value: "GU", label: "GU" },
    { value: "HI", label: "HI" },
    { value: "IA", label: "IA" },
    { value: "ID", label: "ID" },
    { value: "IL", label: "IL" },
    { value: "IN", label: "IN" },
    { value: "KS", label: "KS" },
    { value: "KY", label: "KY" },
    { value: "LA", label: "LA" },
    { value: "MA", label: "MA" },
    { value: "MD", label: "MD" },
    { value: "ME", label: "ME" },
    { value: "MH", label: "MH" },
    { value: "MI", label: "MI" },
    { value: "MN", label: "MN" },
    { value: "MO", label: "MO" },
    { value: "MP", label: "MP" },
    { value: "MS", label: "MS" },
    { value: "MT", label: "MT" },
    { value: "NC", label: "NC" },
    { value: "ND", label: "ND" },
    { value: "NE", label: "NE" },
    { value: "NH", label: "NH" },
    { value: "NJ", label: "NJ" },
    { value: "NM", label: "NM" },
    { value: "NV", label: "NV" },
    { value: "NY", label: "NY" },
    { value: "OH", label: "OH" },
    { value: "OK", label: "OK" },
    { value: "OR", label: "OR" },
    { value: "PA", label: "PA" },
    { value: "PR", label: "PR" },
    { value: "PW", label: "PW" },
    { value: "RI", label: "RI" },
    { value: "SC", label: "SC" },
    { value: "SD", label: "SD" },
    { value: "TN", label: "TN" },
    { value: "TX", label: "TX" },
    { value: "UT", label: "UT" },
    { value: "VA", label: "VA" },
    { value: "VI", label: "VI" },
    { value: "VT", label: "VT" },
    { value: "WA", label: "WA" },
    { value: "WI", label: "WI" },
    { value: "WV", label: "WV" },
    { value: "WY", label: "WY" },
];


export const COUNTRY = [
    { value: "United States", label: "United States" },
    { value: "Canada", label: "Canada" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Australia", label: "Australia" },
    { value: "Germany", label: "Germany" },
    { value: "France", label: "France" },
    { value: "Japan", label: "Japan" },
    { value: "India", label: "India" },
    { value: "China", label: "China" },
    { value: "Brazil", label: "Brazil" },
    { value: "South Africa", label: "South Africa" },
    { value: "Mexico", label: "Mexico" },
    { value: "Spain", label: "Spain" },
    { value: "Italy", label: "Italy" },
    { value: "Russia", label: "Russia" },
    { value: "South Korea", label: "South Korea" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Singapore", label: "Singapore" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "Argentina", label: "Argentina" },
];


export const GENDER = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },

];

export const MARITAL_STATUS = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
    { value: "Divorced", label: "Divorced" },
    { value: "Widowed", label: "Widowed" },
    { value: "Separated", label: "Separated" },
    { value: "Other", label: "Other" },
];

export const ZONE = [
    { value: "EST", label: "EST" },
    { value: "PST", label: "PST" },
    { value: "CST", label: "CST" },
    { value: "MST", label: "MST" },
    { value: "AST", label: "AST" },
    { value: "HST", label: "HST" },
];

export const LANGUAGE = [
    { value: "English", label: "English" },
    { value: "Japanies", label: "Japanies" },
    { value: "French", label: "French" },
    { value: "Russian", label: "Russian" },
    { value: "Italian", label: "Italian" },
    { value: "Chinese", label: "Chinese" },
    { value: "Portuguese", label: "Portuguese" },
    { value: "Other", label: "Other" },
    { value: "Unknown", label: "Unknown" },
];

export const RACE = [
    { value: "American_Indian_or_Alaska_Native", label: "American Indian or Alaska Native" },
    { value: "Asian", label: "Asian" },
    { value: "Black_or_African_American", label: "Black or African American" },
    { value: "White", label: "White" },
    { value: "Hispanic_or_Latino", label: "Hispanic or Latino" },
    { value: "Native_Hawaiian_or_Other_Pacific_Islander", label: "Native Hawaiian or Other Pacific Islander" },
    { value: "Unknown", label: "Unknown" },

];

export const ETHNICITY = [
    { value: "Hispanic_or_Latino", label: "Hispanic or Latino" },
    { value: "Not_hispanic_or_Latino", label: "Not hispanic or Latino" },
    { value: "Declined_to_specify", label: "Declined to specify" },
];

export const GENDER_OPTION = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
];

export const INSURANCE_TYPE = [
    { value: "Primary", label: "Primary" },
    { value: "Secondary", label: "Secondary" },
    { value: "Tertiary", label: "Tertiary" },
    { value: "Other", label: "Other" },
];
export const INSURANCE_NAME = [
    { value: "American_National_Insurance", label: "American National Insurance" },
    { value: "Blue_Cross_and_Blue_Shield", label: "Blue Cross and Blue Shield" },
    { value: "Cambia_Health_Solutions", label: "Cambia Health Solutions" },
    { value: "Golden_Rule_Insurance_Company", label: "Golden Rule Insurance Company" },
    { value: "MEGA_Life_and_Health_Insurance", label: "MEGA Life and Health Insurance" },
];

export const PROVIDER_TYPE = [
    { value: "MD", label: "MD" },
    { value: "RN", label: "RN" },
    { value: "DO", label: "DO" },
    { value: "LPN", label: "LPN" },
    { value: "APRN", label: "APRN" },
    { value: "NP", label: "NP" },
    { value: "PA", label: "PA" },
    { value: "PT", label: "PT" },
    { value: "OT", label: "OT" },
    { value: "PSYD", label: "PSYD" },
    { value: "LCSW", label: "LCSW" },
    { value: "FNP", label: "FNP" },
    { value: "RD", label: "RD" },
    { value: "LMFT", label: "LMFT" },
    { value: "LPC", label: "LPC" },
    { value: "Ph.D.", label: "Ph.D." },
    { value: "Psy.D.", label: "Psy.D." },
    { value: "LMHC", label: "LMHC" },
    { value: "LCPC", label: "LCPC" },
    { value: "LICSW", label: "LICSW" },
    { value: "LPCC", label: "LPCC" },
    { value: "None", label: "None" },
];

export const LICENSED_STATE = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
    { value: "DC", label: "District of Columbia" },
    { value: "AS", label: "American Samoa" },
    { value: "GU", label: "Guam" },
    { value: "MP", label: "Northern Mariana Islands" },
    { value: "PR", label: "Puerto Rico" },
    { value: "UM", label: "United States Minor Outlying Islands" },
    { value: "VI", label: "Virgin Islands, U.S." },
]