/**
 * É importante começarmos importando a bibilioteca 'react'
 * porque para conseguirmos trabalhar com a sintaxe de HTML dentro do JS,
 * essa sintaxe tem o nome de JSX = Javascript + XML.
 * e react é a lib que faz essa magica acontecer ;)
 */
import React from 'react';

import Routes from './routes';

import './assets/styles/global.css'

/**
 * No React trabalhamos com components para estruturamos nossas paginas,
 * Mas o que são components? components no react são funções que retornam
 * um html.
 * dentro de um compontente só podemos ter uma tag Pai.
 * Mas pq criamos components?
 * No React é tudo componente, na maioria das vezes criamos components 
 * para conseguir reaproveitar código entre varias telas,
 * diferente do HTML que temos que repetir o mesmo codigo varias vezes.
 * Importante lembrar que um componente sempre começa com uma letra
 * maiuscala, porque pode acontecer conflito no codigo com as tags HTML, 
 * que começam com as letras minusculas.
 */
function App() {
  return (
    <Routes />
  );
}

export default App;
