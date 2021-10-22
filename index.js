const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Wow!! Hello from my second node server, he he he!!!');
});

const users = [
    { id: 0, name: 'Samima', email: 'Samima@gmail.com', phone: '00112233' },
    { id: 1, name: 'Suzi', email: 'Suzi@gmail.com', phone: '11112233' },
    { id: 2, name: 'Suchona', email: 'Suchona@gmail.com', phone: '22112233' },
    { id: 3, name: 'Sumi', email: 'Sumi@gmail.com', phone: '33112233' },
    { id: 4, name: 'Susmita', email: 'Susmita@gmail.com', phone: '44112233' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use Query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users);
    }

});

//app.METHOD

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body);
    //res.send('inside post');
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'apple', 'lichi'])
})

app.get('/fruits/magoes/fazli', (req, res) => {
    res.send('Moja na!')
})

app.listen(port, () => {
    console.log('Listening to port', port);
})
