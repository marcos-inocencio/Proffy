import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

/**
 * Usamos interfaces para definir o formato das tipagem de um Objeto.
 * Por quê objetos? As propriedades que iremos receber são objetos.
 */
interface PageHeaderProps {
  title: string;
  description?: string;
}

/**
 * Criarmos um arrow function e atribuimos o tipo React Function Component a ela
 * passando um parametro/generic PageHeaderProps.
 * Em seguida definimos o 'props' como parametro recebido na função,
 * esse parametro é um objeto contendo as propriedades do Interface.
 * Uma propriedade que quero destacar aqui é a CHILDREN, a props.children
 * é uma propriedade automatica do React que existe em todos componentes,
 * children trás o conteudo passado dentro do componente, isso é uma propriedade
 * automatica, e por isso não declaramos ela no Interface. 
 */
const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar"/>
        </Link>
        <img src={logoImg} alt="Proffy"/>
      </div>
      
      <div className="header-content">
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}

        {props.children}
      </div>
    </header>
  );
}
 export default PageHeader;