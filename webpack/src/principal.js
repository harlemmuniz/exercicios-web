// const Pessoa = require('./pessoa')

import Pessoa from './pessoa' // sistem de modulos do ecmascript, importando modulo pessoa
import './assets'

const atendente = new Pessoa
console.log(atendente.cumprimentar())