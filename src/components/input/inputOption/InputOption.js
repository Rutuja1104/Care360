import React, { useState } from 'react';
import Select, { components } from 'react-select';
import { Label } from 'reactstrap';

export function InputOption({
    getStyles,
    Icon,
    isDisabled,
    isFocused,
    isSelected,
    children,
    innerProps,
    label,
    labelStyles = {},
    options,
    ...rest


}) {
    const [isActive, setIsActive] = useState(false);
    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);
    const onMouseLeave = () => setIsActive(false);

    // styles
    let bg = "transparent";
    if (isFocused && !isSelected) bg = "#FFFFFF";
    if (isActive) bg = "#FFFFFF";


    const style = {
        alignItems: "center",
        backgroundColor: bg,
        color: "inherit",
        display: "flex",
    };

    // prop assignment
    const props = {
        ...innerProps,
        onMouseDown,
        onMouseUp,
        onMouseLeave,
        style,
        label
    };

    return (
        <components.Option
            {...rest}
            isDisabled={isDisabled}
            isFocused={isFocused}
            isSelected={isSelected}
            getStyles={getStyles}
            innerProps={props}
            label={label}
        >
            <span style={{ marginRight: '8px' }}>
                <input type="checkbox" checked={isSelected} />
            </span>
            {children}
        </components.Option>
    );
}

export default function App({label, innerProps,options}) {
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Styles for the select box
    const customStyles = {
        dropdown: (provided) => ({
            ...provided,
            height: '48px',
        }),
        control: (provided) => ({
            ...provided,
            border: '0px',
            background: '#FFFFFF',
            boxShadow: '0px 0px 6px #00000029',
            borderRadius: '5px',
        }),
        indicatorSeparator: () => ({}),
    };

    const props = {
        ...innerProps,
        label,
        options
    };


    return (
        <div className="App">
            <Select
                defaultValue={[]}
                formatGroupLabel={label}
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                onChange={(options) => {
                    if (Array.isArray(options)) {
                        setSelectedOptions(options.map((opt) => opt.value));
                    }
                }}
                options={options}
                label={label}
                innerProps={props}
                components={{
                    Option: InputOption,
                }}
                styles={customStyles}
            // label={label}
            />
        </div>
    );
}
