//@ts-check
const frase = 'Front End';
const total = 100.05
const empresas = ['Apple', 'Microsoft']
console.log(frase.toLowerCase())

// total.toLowerCase(); -> runtime error

const t = total.toFixed(); // -> retorna uma string
console.log(t + 10); 

empresas.map(empresas => empresas.toLowerCase())

const body = document.body;
body.style.background = '#000'

const operacao = 100 + 200;
console.log(operacao)
