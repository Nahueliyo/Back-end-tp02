const fs = require('fs')
const log = p=> console.log(p)

let data = ""


fs.promises.readFile('./info.txt', 'utf-8').then(contenido=>{
    data = JSON.parse(contenido)
    log(data)
    data.contenidoObj.author= 'Nahue'

    fs.promises.writeFile('./package.json.Nahue', JSON.stringify(data, null, 2))
    .then(d=> log('termine'))
    .catch(err=>log(err))

}).catch(err=>log(err))

