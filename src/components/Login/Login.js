import React, { useEffect, useState } from 'react'
import Input from '../Input/input'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { actions } from '../../pages/methods/slice'

const Login = () => {
  const [formData,SetFormData]=useState({email:'',password:''})
  // const [errors,setErrors]=useState({});


  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {loginType}=useSelector((state)=>state.getDetailsData);

  useEffect(()=>{
    if(loginType==='admin'){
      navigate('/admin/home')
    }
    else if(loginType==='user'){
      navigate('/user/home')
    }
  },[loginType,navigate])

  // const validation=(name,value)=>{

  // }

  const handleChange=(e)=>{
    const {name,value}=e.target;
    SetFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
    dispatch(actions.login({...formData}))
  }
  return (
    <div>Login
      <form onSubmit={handleSubmit}>
      <Input
      label='Email'
      type='email'
      name='email'
      placeholder='email'
      value={formData.email}
      onChange={handleChange}
      />
      <Input 
      label='password'
      type='password'
      name='password'
      value={formData.password}
      placeholder='password'
      onChange={handleChange}
      />
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login