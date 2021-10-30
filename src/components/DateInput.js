import React from 'react';

const DateInput = (props) => {
    const {onChange, label} = props;
  return (
   <div className="date-input">
    <label>{label}</label><br />
    <input type="date" onChange={onChange} />
    </div>
  )
}

export default DateInput;