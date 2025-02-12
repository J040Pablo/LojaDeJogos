import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
const Login = () => {
  const navigate = useNavigate()
  const [dataEmail, setDataEmail] = useState({value: '', dirty: false})
  const [dataPassword, setDataPassword] = useState({value: '', dirty: false})

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleErrorEmail = (data) => {
    if(!data.value && data.dirty) {
      return (
        <h6 className='error'>Campo Obrigatório</h6>
      )
    } else if (!emailRegex.test(data.value) && data.dirty) {
      return (
        <h6 className='error'>Email Inválido</h6>
      )
    } else {
        return (
          <h6 className='error'></h6>
        )
      }
    }
  

  const handleErrorPassword = (data) => {
    if(!data.value && data.dirty) {
      return (
        <h5 className='error'>Campo Obrigatório</h5>
      )
    } else {
      return (
        <h6 className='error'></h6>
      )
    }
  }

  return (
    <div id ="loginContainer" className="main-content">
      
      <form id='loginForm'>
        <h1> Seja Bem vindo! </h1>
        <label htmlFor="emailInput">Email</label>
        <input onChange= {(e) => {setDataEmail({value:e.target.value, dirty:true})}} type ="email" name="email" id="emailInput"/>
        {handleErrorEmail(dataEmail)}

        <label htmlFor="passwordInput">Senha</label>
        <input onChange= {(e) => {setDataPassword({value:e.target.value, dirty:true})}} type ="email" name="email" id="emailInput"/>
        {handleErrorPassword(dataPassword)}
        <button onClick={() => navigate('/home')}> Enviar </button>
    </form>
  </div>
  );
}

export default Login;