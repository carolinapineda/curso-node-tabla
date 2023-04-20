const {crearArchivo} = require('./Hola/multiplicar');
// const { argv } = require('process');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// console.log(process.argv);
// console.log(argv);

// console.log('num: yargs', argv.num);

// const num = 3;

crearArchivo(argv.num, argv.l, argv.h);
    // .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    // .catch(err=>console.log(err));
    

// fs.writeFile(`Tabla-${num}.txt`,salida,(err)=>{
//     if(err) throw err;



