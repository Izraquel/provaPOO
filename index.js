const express = require("express");
const server = express();

server.use(express.json());

const array = [
  {
    id: 6,
    diaDaSemana: "Sexta-Feira",
    dataDaAvd: "16/04/21",
    disciplina: "POO",
    hora: "19hrs",
    professor: "Thiaguinho",
  },
  {
    id: 5,
    diaDaSemana: "Quinta-Feira",
    dataDaAvd: "15/04/21",
    disciplina: "LPW",
    hora: "19hrs",
    professor: "Luiz Claudio",
  },
];


/* const chId = (req, res, next) => {
    const { id } = req.params
    if (!array[id]) {
        return res
            .status(400)
            .json({ Error: 'Não existe prova com este id' })
    }
    return next()
}
 */


//B
server.get("/array", (req, res) => {
  res.json(array);
});


//C
server.get("/array/:id", (req, res) => {
   //const { id } = req.params
   const arrays = prova.some(({ id }) => id == req.params.id)
   return res.json(arrays)

   const chId = (req, res) => {
    const id = req.params
    if(!array[id]) { 
        return res
          .status(400)
          .json({ error: 'Não existe data da prova com este id' })
      }
    
}

});


//D
 server.post('/array', chId, incluirData , (req, res) => {
    const { id, diaDaSemana, dataDaAvd, disciplina, hora, professor} = req.body
    const arrays = {
        id, diaDaSemana, dataDaAvd, disciplina, hora, professor
    }

    array.push(arrays)
    return res.json(array)

    const incluirData = (req, res) => {
        if(!req.body.id || !req.body.diaDaSemana || !req.body.dataDaAvd || !req.body.disciplina || !req.body.hora || !req.body.professor){
            return res
            .status(400)
            .json({error: " O campo dia da semana ou data da avd ou disciplina ou horário ou professor não existe no corpo da requisição"})
        }
    }
}) 


//E 
/* server.put('/alunos/:index', (req, res) => {
    const { index } = req.params
    const { dataDaAvd } = res.body
    const { disciplina } = res.body

    return res.json({mensage: `` })

}) 
 */
//F



server.listen(3333, () => {
  console.log("Servidor Rodando");
});
