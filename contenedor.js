const fs = require('fs')

class Contenedor{
  constructor(name){
    this.name = name
  }

  getAll(){
    fs.readFile(`./${this.name}`, 'utf-8', (err, data) => {
      if (err) {
        console.log('Error')
      }else{
        let arr = JSON.parse(data)
        console.log(arr)
      }
    })
  }
}

let archive = new Contenedor('productos.txt')

// const getAll = () => {
//   fs.readFile(`./productos.txt`, 'utf-8', (err, data) => {
//     if (err) {
//       console.log('Error')
//     }else{
//       let arr = JSON.parse(data)
//       console.log(arr)
//     }
//   })
// }

exports.getAll = archive.getAll
