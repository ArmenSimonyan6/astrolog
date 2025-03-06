import React from 'react'

const TextArea = ({value, className, onChange}) => {

    const handleChange = (e) => {
        const newValue = e.target.value;
        onChange(newValue);
    };

  return (
    <textarea
    type="text"
    value={value}
    onChange={handleChange}
    className={className}
    />
  )
}

export default TextArea