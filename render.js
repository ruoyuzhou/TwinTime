let fs = require('fs')

console.log(fs)

fs.writeFile('input.txt','let hello ward write into input.txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('done')
    }

})
