let express = require("express")
let app = express()
let PORT = 8080;

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.post("/add" , (req,res) => {
    const {num1, num2} = req.body;
    if(typeof(num1) === 'string' || typeof(num2) === 'string'){
        res.send('Invalid data types')
    }
    else{
        let result = num1 + num2
        if(result < -1000000){
            res.send("Underflow")
        }
        else if(result > 1000000){
            res.send("Overflow")
        }
        else{
            res.send(`The sum of given two numbers: ${result}`)
        }
    }
})

app.post("/sub" , (req,res) => {
    const {num1, num2} = req.body;
    if(typeof(num1) === 'string' || typeof(num2) === 'string'){
        res.send('Invalid data types')
    }
    else{
        let result = num1 - num2
        if(result < -1000000){
            res.send("Underflow")
        }
        else{
            res.send(`The difference of given two numbers: ${result}`)
        }
    }
})

app.post("/multiply" , (req,res) => {
    const {num1, num2} = req.body;
    if(typeof(num1) === 'string' || typeof(num2) === 'string'){
        res.send('Invalid data types')
    }
    else{
        let result = num1 * num2
        if(result < -1000000){
            res.send("Underflow")
        }
        else if(result > 1000000){
            res.send("Overflow")
        }
        else{
            res.send(`The product of given two numbers: ${result}`)
        }
    }
})

app.post("/divide" , (req,res) => {
    const {num1, num2} = req.body;
    if(typeof(num1) === 'string' || typeof(num2) === 'string'){
        res.send('Invalid data types')
    }
    else if(num2 === 0){
        res.send("Cannot divide by zero")
    }
    else{
        let result = num1 / num2
        if(result < -1000000){
            res.send("Underflow")
        }
        else if(result > 1000000){
            res.send("Overflow")
        }
        else{
            res.send(`The division of given two numbers: ${result}`)
        }
    }
})
app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server is working on ${PORT}`)
})

//=====================================   Using Path parameter ==========================================

// app.post("/add", (req, res) => {
//     let url = req.query;
//     let num1 = url['num1'];
//     // console.log(typeof(num1))
//     let num2 = url['num2'];
//     result = parseFloat(num1) + parseFloat(num2)
//     res.send(`The sum of given two numbers sum: ${result}`)
// })

// app.post("/sub", (req, res) => {
//     let url = req.query;
//     let num1 = url['num1'];
//     let num2 = url['num2'];
//     let result = parseFloat(num1) - parseFloat(num2)

//     // if (typeof(num1) === 'string' && typeof(num2) === 'string') {
//     //     res.send("Invalid data types")
//     // }
//     res.send(`The difference of given two numbers result: ${result}`)
// })

// app.post("/multiply", (req, res) => {
//     let url = req.query;
//     let num1 = url['num1'];
//     let num2 = url['num2'];
//     let result = parseFloat(num1) * parseFloat(num2)
//     // if (typeof(num1) === 'string' && typeof(num2) === 'string') {
//     //     res.send("Invalid data types")
//     // }
//     res.send(`The product of given numbers ${result}`)
// })

// app.post("/divide", (req, res) => {

//     let url = req.query;
//     let num1 = url['num1'];
//     let num2 = url['num2'];

//     if (num2 === 0) {
//         res.send("Cannot divide by zero")
//     }
//     else if (typeof (num1) === 'string' && typeof (num2) === 'string') {
//         res.send("Invalid data types")
//     }
//     else {
//         let result = parseFloat(num1) / parseFloat(num2)
//         res.send(`The division of given numbers ${result}`)
//     }
// })
