import React from 'react'

const Select = ({label,name,value,onChange,options,error}) => {
  return (
    <div>
        <label>{label}</label>
        <select
            name={name}
            value={value}
            onChange={onChange}
        >
           {options.map(item=>(
                    <option value={item.value}>
                        {item.label}
                    </option>
                ))}  
        </select>
        {error && <div>{error}</div>}
    </div>
  )
}

export default Select