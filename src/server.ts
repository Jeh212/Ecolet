import express, { request } from 'express';

const app = express();

app.use(express.json());

const users = [
  'Jean',
  'paulo',
  'carlos'
]

app.get('/', (req, res) => {
	res.json({ msg: 'Hello' });
});

app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);

  const user = users[id];

  return res.json(user)

})


app.post('/users', (req, res) => {

  const user = {
    name:'Jean carlos',
    email:'jeandub1@hotmail.com',
    gender:'Male'
  };

  
    res.json({ user});


})


app.listen('3333', () => console.log('Program was 🚀'));

