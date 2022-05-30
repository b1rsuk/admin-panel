const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const menu = [  { '': [{title: 'Прямые диваны', marginAndDiscount: [0, 1], id: 0}], 'Прямые диваны': [{title: 'Модульные диваны', marginAndDiscount: [0, 0], id: 1}, {title:'Каркасные диваны', marginAndDiscount: [0, 0], id: 2}], 'Модульные диваны': [{title: 'Норм диваны', marginAndDiscount: [0, 1], id: 3}, {title: 'Натуральные диваны', marginAndDiscount: [0, 1], id: 4}], 'Норм диваны':[], 'Натуральные диваны': [], 'Каркасные диваны': [] }]; // '': [] обязательно
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
            birchDay: 's223.34.34',
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
        price: [
            3450,
            5000
        ],
        about: 'abount',
        detalis: 'detalis',
        category: [],
        label: 'sd',
        demensions: [],
        scheme: ['/product/scheme/scheme.png', '/product/scheme/scheme.png'],
        material: [],
        id: 0
    }, 
    {
        src: ['/product/png.png', '/product/divan.png'],
        name: 'Png2',
        price: [
            3470,
            0
        ],
        about: 'abount',
        detalis: 'detalis',
        category: [],
        label: 'sd',
        demensions: [],
        scheme: [],
        material: [{name: 'name', list: [{name: '123'}]}],
        id: 1
    }, 
   
];

const twoPage = [
   
    {
        src: ['/product/png.png', '/product/divan.png'],
        name: 'Png',
        price: [
            3450,
            5000
        ],
        about: 'abount',
        detalis: 'detalis',
        category: [],
        label: 'sd',
        demensions: [],
        scheme: ['/product/scheme/scheme.png', '/product/scheme/scheme.png'],
        material: [],
        id: 2
    }, 
    {
        src: ['/product/png.png', '/product/divan.png'],
        name: 'Png2',
        price: [
            3470,
            0
        ],
        about: 'abount',
        detalis: 'detalis',
        category: [],
        label: 'sd',
        demensions: [],
        scheme: [],
        material: [{name: 'name', list: [{name: '123'}]}],
        id: 3
    }, 
   
];

app.post('/authorization', (req, res) => {
    if ( req.body.user == 'borsuk' && req.body.password == 'borsuk') return res.send(true);
    res.send(false);
});

app.get('/table/category/', (req, res) => {
    res.send(menu);
})

app.post('/edit/product', (req, res) => { // редактирвание продукта
    const { name, price, about, detalis, category, src, label, id } = req.body;
    console.log({ name, price, about, detalis, category, src, label, id });
    res.end();
});     

app.get('/users/:id', (req, res) => {
    const result = users.map(e => {
        e.three = Number(e.three * req.params.id + 1);
        return e;
    });
    res.send(result);
});

app.get('/cards/:id', (req, res) => {
    const result = cards.map(e => {
        e.four = Number(e.four) + 1 * req.params.id;
        return e;
    });
    res.send(result);
});

app.get('/category/:id', (req, res) => {
    const result = category.map(e => {
        e.three = Number(e.three * req.params.id + 1);
        return e;
    });
    res.send(result);
});

app.get('/product/:id', (req, res) => {
    if (req.params.id == 1) return res.send(twoPage);
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
    res.send(JSON.stringify(1));
});

app.post('/create/product', (req, res) => {
    const { name, price, about, detalis, category, src, label, demensions, material, id } = req.body;
    console.log({ name, price, about, detalis, category, src, label, demensions, material, id });
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
    console.log(img, name)
    res.send('/product/qr.png');
});

app.post('/save/scheme', (req, res) => {
    const { img, name } = req.body;
    console.log(img, name)
    res.send('/product/scheme/scheme.png');
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
    const { menu, category } = req.body;
    console.log(menu, category);
    res.end();
});

app.post('/demensions', (req, res) => {
    const { value } = req.body;
    console.log(value);
    res.end();
});

app.post('/material', (req, res) => {
    const { value } = req.body;
    console.log(value);
    res.end();
});

app.get('/delete/demension/:index', (req, res) => {
    const { index } = req.params;
    console.log(index)
    res.end();
});

app.post('/delete/category', (req, res) => {
    const { id, category } = req.body;
    console.log(id, category)
    res.end();
})

app.get('/delete/material/:index', (req, res) => {
    const { index } = req.params;
    console.log(index);
    res.end();
})

app.post('/delete/scheme', (req, res) => {
    const { src } = req.body;
    console.log(src);
    res.end();
})

app.listen(5000, function () {
    console.log('CORS-enabled web server listening on port 80')
});