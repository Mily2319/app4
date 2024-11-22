const express = require('express');
const app = express();
const port=3000;

// Middleware para passear JSON
app.use(express.json());
// array para amarzenar os usuarios
let usuarios= [];

//rota GET para usuarios
app.get('/usuarios', (req,res)=>{
    res.json(usuarios);
})
app.post('/usuarios',(req,res)=>{
    const {nome, email}=req.body;

    if(!nome||!email){
        return res.status(400).json({error:'nome e email são obrigatorios'});
    }

    const novousuario={id:usuarios.length+1,nome,email};
    usuarios.push(novousuario);
    res.status(201).json(novousuario);
})



app.listen(port,()=>{
    console.log(`servidor rodando em http://localhost:${port}`);
});
