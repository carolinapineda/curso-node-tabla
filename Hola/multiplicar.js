const fs = require('fs');
const colors = require('colors');

const crearArchivo= (num = 5, listar=false, hasta=10)=>{

        if(listar){
            console.log('====================='.green);
            console.log(   `Tabla del:`.green, colors.yellow(num));
            console.log("======================".green);
        }
       
        let salida ='';
        let consola = '';
    
        for(let i=1; i<=hasta; i++){
            salida += `${num} x ${i} = ${num*i}\n`;
            consola += `${colors.red(num)} ${'x'.magenta} ${colors.cyan(i)} ${'='.gray} ${colors.yellow(num*i)}\n`;
        }
    
        if(listar){
            console.log(consola);
        }
       
        fs.writeFileSync(`./salida/Tabla ${num}.txt`,salida);
        
        console.log(`Tabla-${num}.txt creada`.rainbow)

}
    

module.exports={
    crearArchivo
}


