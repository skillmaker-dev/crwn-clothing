import React from "react";
import './form-input.style.scss';

const FormInput = ({handleChange,label,...otherPropeties}) =>(
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherPropeties}/>
        {
            label ? (<label className={`${otherPropeties.value.length ? 'shrink':''} form-input-label`}>{label}</label>) : null
        }
    </div>
)


export default FormInput;