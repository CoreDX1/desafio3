const express = require('express');
const fs = require('fs')

const app = express();
const PORT = 8080;

class Contenedor{
  constructor(nombre){
    this.nombre  = nombre
  }

  async getAll(name) {
    try{
      app.get(`/${name}`, async (req, res) => {
        try{
          let data = await fs.promises.readFile(`./${this.nombre}`, 'utf-8') 
          res.send(JSON.parse(data))
        }catch{
          console.log('Error al generar')
        }
      })
    }catch{
      console.log('Error al leer')
    }

    // try {
    //   let data = await fs.promises.readFile(`./${this.nombre}`, 'utf-8')
    //   let arr = JSON.parse(data)
    //   console.log(arr)
    // }catch{
    //   console.log('Error reading')
    // }
  }
  async getAllRandom(name) {
    try{
      app.get(`/${name}`, async (req, res) => {
        try{
          let data = await fs.promises.readFile(`./${this.nombre}`, 'utf-8') 
          let arr = JSON.parse(data)
          let random = Math.floor(Math.random() * arr.length)
          let arrNew = arr[random]
          console.log(arrNew)
          res.send(arrNew)
        }catch{
          console.log('Error al generar')
        }
      })
    }catch{
      console.log('Error al leer')
    }
    
    // try{
    //   let data = await fs.promises.readFile(`./${this.nombre}`, 'utf-8')
    //   let productos = JSON.parse(data)
    //   let number = Math.floor(Math.random()*productos.length)
    //   let random = productos[number]
    //   console.log(random)
    // }catch{
    //   console.log('Error reading')
    // }
  }
}

let archivo = new Contenedor('productos.txt');
archivo.getAll('productos')
archivo.getAllRandom('productoRandok')

// app.get('/products', (req, res) => {
//   res.send(archivo.products())
//   // fs.readFile('./productos.txt', 'utf-8', (err, data) => {
//   //   if (err) {
//   //     res.send('Error')
//   //   }else{
//   //     res.send(data)
//   //   }
//   // })
// })
//
// app.get('/productsRandom', (req, res) => {
//   fs.readFile('./productos.txt', 'utf-8', (err, data) => {
//     if (err) {
//       res.send('Error')
//     }else{
//       let arr = JSON.parse(data)
//       let random = Math.floor(Math.random() * arr.length)
//       let arrNew = arr[random]
//       res.send(arrNew)
//     }
//   })
// })

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`)
})
