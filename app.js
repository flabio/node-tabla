const {crearAchivo}=require('./helpers/multiplicar');

crearAchivo()
.then(nombreArchivo=>console.log(nombreArchivo))
.catch(err =>console.log(err) )
