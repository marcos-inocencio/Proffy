import React from 'react';

/**
 * O motivo de importarmos as imagens ao invés de darmos o caminho dela ao src da tag img
 * é pq o jsx n aceita, o src n vai reconhecer o caminho, por isso importamos e declarmos 
 * a varivel dentro de {chaves}, exemplo src={}.
 * Toda vez que formos utilizar variaveis dentro do html utilizaremos {}.
 */
 
import BackgroundImage from '../../components/BackgroundImage';
import InputFloatLabel from '../../components/InputFloatLabel';

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
  
import './styles.css'

function Login () {
  return(
      <div id="page-login" className="container">
        <BackgroundImage/>
        
        <form>
          <fieldset>
            <legend>Fazer login</legend>
            <InputFloatLabel 
              type="text" 
              name="email" 
              label="E-mail" 
              classInput={"border-top"} 
              required
            />
            <InputFloatLabel 
              type="password" 
              name="password" 
              label="Senha" 
              classInput={"border-bottom"} 
              required
            />

            <div className="login-options">
              <input type="checkbox" id="remember-checkbox"/>
              <label htmlFor="remember-checkbox">Lembrar-me</label>
              
              <a href="http//:www.google.com">Esqueci minha senha</a>
            </div>

            <button>Entrar</button>
          </fieldset>

          <footer>
            <div className="singup">
              <p>Não tem conta?</p>
              <a href="http//:www.google.com">Cadastre-se</a>
            </div>

            <span>É de graça <img src={purpleHeartIcon} alt="Heart"/></span>
          </footer>
        </form> 
      </div>
  );
}

export default Login;