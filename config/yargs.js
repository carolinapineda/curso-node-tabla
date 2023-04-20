const argv = require('yargs')
    .option('n', {
        alias: 'num',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        defaul: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        describe: 'Muestra hasta que numero debe de llegar la tabla de multiplicacion'
        
    })
    .check( (argv, options)=>{
        if( isNaN( argv.n )){
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;