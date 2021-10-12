let holder = document.querySelector('#holder')
let readList = document.querySelector('#readList')
// let fs = require('fs')
holder.addEventListener('drop',(e)=>{
    e.preventDefault();// cancel the default
    e.stopPropagation();// prevent the bubble
    console.log(e)
    for(const file of e.dataTransfer.files){
        console.log(file)
        console.log('path of the file',file.path)
        fs.readFile(file.path,(err,data)=>{
            if(err){
                console.log(err)
            }else{
                let newDiv = document.createElement('div')
                newDiv.className = "readFile"
                newDic.innerHTML = `
                    <h3>${file.name}</h3>
                    <pre>${data}</pre>
                `
                readList.appendChild(newDiv)

            }
        })
    }
})

holder.addEventListener('dragover',(e)=>{
    e.preventDefault();// cancel the default
    e.stopPropagation();// prevent the bubble
})

const webview = document.querySelector('webview')

webview.addEventListener('did-start-loading',()=>{
    console.log('Loading....')
})
webview.addEventListener('did-stop-loading',()=>{
    console.log('Done')
    console.log(webview)
})
