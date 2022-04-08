const express = require('express');
const fs = require('fs')

const app = express();
const PORT = 8080;

class Contenedor{
  constructor(nombre){
    this.nombre  = nombre
  }

  async products() {
    try {
      let data = await fs.promises.readFile(`./${this.nombre}`, 'utf-8')
      console.log(JSON.parse(data))
    }catch{
      console.log('Error reading')

    }
  }
  async productsRandom() {
    try{
      let data = await fs.promises.readFile(`./${this.nombre}`, 'utf-8')
      let productos = JSON.parse(data)
      let number = Math.floor(Math.random()*productos.length)
      let random = productos[number]
      console.log(random)
    }catch{
      console.log('Error reading')
    }
  }
}
let archivo = new Contenedor('productos.txt');


app.get('/products', (req, res) => {
  res.json(archivo.products())
})

app.get('/productsRandom', (req, res) => {
  res.json(archivo.productsRandom())
})

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`)
})


