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
    <BrowserRouter>
      <Route path="/" exact component={Landing}/>
      <Route path="/study" component={TeacherList}/>
      <Route path="/give-classes" component={TeacherForm}/>
    </BrowserRouter>
  );
}

export default Routes;