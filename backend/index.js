var express = require('express');
var app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());

const menu = ['Прямые диваны', 'Угловые диваны', 'Угловые диваны', 'Распродажа диванов'];
const users = [
    {
        id: 0, // id
        one: 0, // id
        two: 'borsuk',
        three: '500',
        four: 'Oplatil',
        user: {
            note: 'aa',
            password: '324324',
            fullName: 'POP OPS Sd',
            birchDay: '223.34.34',
        }
    },
    {
        id: 1, // id
        one: 1, // id
        two: 'bouk',
        three: '500',
        four: 'Oplatil',
        user: {
            note: 'aa',
            password: '324324',
            fullName: 'POP OPS Sd',
            birchDay: '223.34.34',
        }
    },
];

const cards = [
    {
        id: 0, //  id
        one: 0, // id
        two: '4000 0012 3456 7899',
        three: '11/20',
        four: '0000',
    }
];

const category = [
    {
        id: 0,
        one: 0,
        two: 'Category',
        three: 10,
        card: {
            margin: '0',
            discount: '0'
        }
    }
];

const product = [
    {
        src: ['/product/png.png', '/product/divan.png'],
        name: 'Png',
        price: '2000',
        about: 'abount',
        detalis: 'detalis',
        category: 'category',
        id: 0
    }, 
    {
        src: ['/product/divan.png'],
        name: 'Pn33g', 
        price: '2000',
        about: 'abount',
        detalis: 'detalis',
        category: 'category',
        id: 1
    }, 
    {
        src: ['/product/divan.png'],
        name: 'Pn33g', 
        price: '2000',
        about: 'abount',
        detalis: 'detalis',
        category: 'category',
        id: 2
    }, 
    {
        src: ['/product/divan.png'],
        name: 'Pn33g', 
        price: '2000',
        about: 'abount',
        detalis: 'detalis',
        category: 'category',
        id: 3
    },     
    {
        src: ['/product/divan.png'],
        name: 'Pn33g', 
        price: '2000',
        about: 'abount',
        detalis: 'detalis',
        category: 'category',
        id: 4
    }, 
    {
        src: ['/product/divan.png'],
        name: 'Pn33g', 
        price: '2000',
        about: 'abount',
        detalis: 'detalis',
        category: 'category',
        id: 5
    }, 
    {
        src: ['/product/divan.png'],
        name: 'Pn33g', 
        price: '2000',
        about: 'abount',
        detalis: 'detalis',
        category: 'category',
        id: 6
    }, 
    {
        src: ['/product/divan.png'],
        name: 'Pn33g', 
        price: '2000',
        about: 'abount',
        detalis: 'detalis',
        category: 'category',
        id: 7
    }, 
    {
        src: ['/product/divan.png'],
        name: 'Pn33g', 
        price: '2000',
        about: 'abount',
        detalis: 'detalis',
        category: 'category',
        id: 8
    }, 
    {
        src: ['/product/divan.png'],
        name: 'Pn33g', 
        price: '2000',
        about: 'abount',
        detalis: 'detalis',
        category: 'category',
        id: 9
    }, 
];

app.post('/authorization', (req, res) => {
    if ( req.body.user == 'borsuk' && req.body.password == 'borsuk') return res.send(true);
    res.send(false);
});

app.post('/edit/product', (req, res) => { // редактирвание продукта
    const { name, price, about, detalis, category, src, id } = req.body;
    console.log({ name, price, about, detalis, category, src, id });
    res.end();
});     

app.get('/users/:id', (req, res) => {
    res.send(users);
});

app.get('/cards/:id', (req, res) => {
    res.send(cards);
});

app.get('/category/:id', (req, res) => {
    res.send(category);
});

app.get('/product/:id', (req, res) => {
    res.send(product);
});

app.get('/limit/users', (req, res) => {
    res.send(JSON.stringify(10));
});

app.get('/limit/category', (req, res) => {
    res.send(JSON.stringify(5));
});

app.get('/limit/cards', (req, res) => {
    res.send(JSON.stringify(7));
});

app.get('/limit/services', (req, res) => {
    res.send(JSON.stringify(0));
});

app.post('/create/product', (req, res) => {
    const { name, price, about, detalis, category, src, id } = req.body;
    console.log({ name, price, about, detalis, category, src, id });
    res.end();
});

app.get('/menu', (req,res) => {
    res.send(menu);
});

app.post('/delete/image/', (req, res) => {
    const { src } = req.body;
    console.log(src);
    res.end();
});

app.post('/save/image', (req, res) => {
    const { img, name } = req.body;
    res.send('/product/qr.png');
});

app.post('/save/user', (req, res) => {
    const { login, password, sum, fullName, birchDay, status, id } = req.body;
    console.log({ login, password, sum, fullName, birchDay, status, id });
    res.end();
});

app.post('/save/note', (req, res) => {
    const { note, id } = req.body;
    console.log({ note, id });
    res.end();
})

app.post('/delete', (req, res) => {
    const { page, id } = req.body;
    console.log({ page, id });
    res.end();
});


app.post('/edit/category', (req, res) => {
    const { name, margin, discount, id } = req.body;
    console.log({ name, margin, discount, id });
    res.end();
});

app.post('/create/category', (req, res) => {
    const { name, margin, discount } = req.body;
    console.log({ name, margin, discount });
    res.end();
});

app.listen(5000, function () {
    console.log('CORS-enabled web server listening on port 80')
});