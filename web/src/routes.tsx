import React from 'react';
/**
 * Utilizamos o REACT-ROUTER-DOM para criar as rotas de navegação,
 * para compreenção de como utilizar essa lib
 * estudar a documentação em https://reactrouter.com/web/guides/quick-start
 */
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
  return (
    /*  Utilizamos a propriedade EXACT na primeira rota, porquê o react router dom
    não faz uma comparação de igualdade com as demais rotas, e sim uma
    verificação de conteudo, sem o EXACT ele vai trazer o conteudo da primeira rota "/"
    nas demais rotas porque começam com barra "/landing".
    E o EXACT faz exatamente ao contrario ele obriga a fazer uma verificação de igualdade,
    ou seja ele só mostrará o conteudo da rota que for exatamente igual a ela.
    */
    <BrowserRouter>
      {/* <Route path="/" exact component={Login} /> */}
      <Route path="/" exact component={Landing}/>
      <Route path="/study" component={TeacherList}/>
      <Route path="/give-classes" component={TeacherForm}/>
    </BrowserRouter>
  );
}

export default Routes;