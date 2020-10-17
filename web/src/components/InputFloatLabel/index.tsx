import React, {InputHTMLAttributes} from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string,
  name: string,
  label: string,
  required?: boolean;
  classInput?: string;
}

const InputFloatLabel: React.FC<InputProps> = ({type, name, label, classInput, ...rest}) => {
  return (
    <div className="float-label">
      <input 
        type={type}
        className={classInput}
        id={name}
        {...rest}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default InputFloatLabel;