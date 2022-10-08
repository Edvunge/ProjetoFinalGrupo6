/*const express = require('express')
const { request, response } = require("express")
const app = express()*/
const PORT = process.env.PORT ?? 3000
 
//app.use(express.json())

app.patch("/api/password", (request, response) => {
    const { password, confirmacaoPassword } = request.body

    let forca = 0
    if (maiuscula()) forca++
    if (minuscula()) forca++
    if (peloMenosUmNumero()) forca++
    if (peloMenosOitoCaracteres()) forca++
    
    if (confirmacaoPassword === password) {
        forca++
    } else {
        forca = 0
    }

    response.status(200).json({forca, valida: forca >= 4})

    function maiuscula() {
        const maiusculas = "abcdefghijklmnopqrstuvxz".toUpperCase().split('')
        return maiusculas.some(elen => password.includes(elen))
    }

    function minuscula() {
        const minusculas = "abcdefghijklmnopqrstuvxz".split('')
        return minusculas.some(ele => password.includes(ele))
    }

    function peloMenosUmNumero() {
        const NUMEROS = "0123456789".split('')
        return NUMEROS.some(n => password.includes(n))
    }

    function peloMenosOitoCaracteres() {
        return password.length <= 8
    }
})

app.listen(
    PORT,
    () => console.log(`a escuta em http://localhost:${PORT}`)
)



