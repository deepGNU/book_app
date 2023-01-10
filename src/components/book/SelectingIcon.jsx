import React from 'react';
import { ImCheckboxChecked as Checked, ImCheckboxUnchecked as Unchecked } from 'react-icons/im';

const SelectingIcon = ({isChecked}) => {
    return (
        <div className="selected-icon">
            {isChecked ? <Checked /> : <Unchecked />}
        </div>
    )
};

export default SelectingIcon;