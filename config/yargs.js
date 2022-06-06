const argv =require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:"número de la base"
})
.option('c',{
    alias:'cantidad',
    type:'number',
    demandOption:true,
    default:10,
    describe:'hasta donde quiere la tabla'
})
.option('l',{
    alias:'listar',
    type:'boolean',
    demandOption:true,
    default:false
})
.check((argv,options)=>{
    if (isNaN(argv.b)){
        throw 'La base tiene que ser un número'
    }
    return true;
})
.argv;

module.exports=argv;