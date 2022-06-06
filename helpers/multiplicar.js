const fs = require('fs');
const argv=require('../config/yargs');
const{base,listar,c}=argv
const crearAchivo = async () => {
    try {
        let salida = ''
        for (let i = 1; i <= c; i++) {
            salida += `${base} x ${i}  =  ${base * i}\n`;
        }
        if(listar){
            console.log(salida)
        
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla del tabla-${base} creada`

    } catch (e) {
        throw e;
    }

}

module.exports = {
    crearAchivo
}