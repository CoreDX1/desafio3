const express = require('express');
const fs = require('fs')

const app = express();
const PORT = 8080;

app.get('/products', async (req, res) => {
  try{
    let data = await fs.promises.readFile('./productos.txt', 'utf-8')
    let arr = JSON.parse(data)
    console.log(arr)
    res.send(arr)
  }catch{
    console.log('Error al generar el Objeto')
  }
})

app.get('/productsRandom', async (req, res) => {
  try{
    let data = await fs.promises.readFile('./productos.txt', 'utf-8')
    let arr = JSON.parse(data)
    let random = Math.floor(Math.random() * arr.length)
    let arrNew = arr[random]
    console.log(arrNew)
    res.send(arrNew)
  }catch{
    console.log('Error al generar el Objeto')
  }
})

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`)
})

