const express = require('express')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const employees = [
    {
        employeeid: "l300",
        name: "kelly mona",
        position: "software researcher"
    },
    {
        employeeid: "l200",
        name: "beatrice adoma",
        position: "software manager"
    },
    
    {
        employeeid: "l100",
        name: "nana ama",
        position: "software marketer"
    }
]

app.get('/', (req, res) => {
    res.render('landing', { employees });
});

app.get('/employeelist', (req, res) => {
    res.render('to-dolist')
});

app.get('/to-dolist', (req, res) => {
    res.render('to-dolist')
});

//serve application on port 7070
const port = 2020;
app.listen(port, () => {
    console.log('server has started on port ${port}');
});


