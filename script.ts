/*
    string, number e boolean são tipos básicos do TypeScript (primitivos).
*/

const frase: string = 'Front End';
const preco: number = 500;
const condi: boolean = preco > 100;

/*
    typeof é um operador de JavaScript que retorna uma string indicando o tipo do dado.
    Os possíveis valores retornados por typeof são: string, number, boolean, function, 
    object, undefined, bigint e symbol. O typeof funciona como um type guard.
*/

const frase2 = 'Front End';
const preco2 = 500;
const condi2 = preco2 > 100;

if (typeof frase2 === 'string') {
  console.log('frase é string');
}
if (typeof preco2 === 'number') {
  console.log('preco é number');
}
if (typeof condi2 === 'boolean') {
  console.log('condi é boolean');
}

/*
    Não confundir string, number e boolean com String, Number e Boolean. 
    Os últimos são as funções construtoras desses tipos de dados, 
    responsáveis pela herança das propriedades e métodos dos mesmos.
*/

const frase3 = new String('Front End'); // Objeto new
const frase4 = String('Front End');
const frase5 = 'Front End';

console.log(typeof frase3);
console.log(typeof frase4);
console.log(typeof frase5);
console.log(typeof String) // -> Função construtora