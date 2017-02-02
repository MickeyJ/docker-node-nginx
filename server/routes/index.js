
const stuff = [
  1,2,3,4,5
];

module.exports = (api) =>{

  api.get('/', (req, res) =>{
    res.redirect('http://localhost:9090/stuff')
  });

  api.get('/stuff', (req, res) =>{

    res.status(200).send(stuff)

  });

  api.post('/thing', (req, res) =>{

    const nextThing = stuff.length + 1;

    stuff.push(nextThing);

    res.status(201).send(stuff)

  })

};