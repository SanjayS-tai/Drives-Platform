import React from 'react'

const Input = ({label='name',type='name',name='name',value=null,placeholder='',onChange=null,error=null}) => {
  return (
    <div>
        <label>{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
        {error && <div>{error}</div>}
    </div>
  )
}

export default Input