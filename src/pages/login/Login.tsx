import { useState,useEffect, useMemo, useCallback, useRef } from 'react'
import { ButtonLogin } from './components/ButtonLogin';
import {InputLogin} from './components/InputLogin';
function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const handleEntrar = useCallback(()=>{
    console.log('o email é: ',email);
    console.log('a senha é: ',senha);
  },[email,senha])

  const emailLength = useMemo(() =>{
    return email.length;
  },[email.length]);

  useEffect(()=>{
    console.log(email)
  },[email]);
  useEffect(()=>{
    console.log(senha)
  },[senha]);


  return (
    <div>
      <form>
        <p>Quantidade de caracteres do email: {emailLength}</p>
        <InputLogin 
        label="Email" 
        value={email} 
        onChange={newValue => setEmail(newValue)}/>

        <InputLogin 
        label="Senha" 
        type='password'
        value={senha} 
        onChange={newValue => setSenha(newValue)}
       />
        
      <ButtonLogin type='button' msg='Entrar' onClick={handleEntrar}/>
      </form>
    </div>
    
  )
}

export default Login