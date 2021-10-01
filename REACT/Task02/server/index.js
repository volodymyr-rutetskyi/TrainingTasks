const express = require("express");
const app = express();
const port = 8000;
const ejf = require('edit-json-file')
const bodyParser = require('body-parser')
const cors = require('cors')

const file = ejf('elements.json')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req,res) => {
    res.send(elements())
})

app.put('/comment', (req,res) => {
    putComment(req.body.element, req.body.comment)
    res.send(elements())
})

app.put('/element', (req,res) => {
    putElement(req.body)
    res.send(elements())
})

app.delete('/element', (req,res) => {
    deleteElement(req.query.title)
    res.send(elements())
})

app.listen(port, () => {
    console.log(`server is working on port ${port}`)
});

function elements() {
    return file.get().elements
}
function putElement(element) {
    file.append('elements', {
        title: element.title, comments: element.comments
    })
    file.save()
}
function putComment(title, comment) {
    const element = elements().find(el => el.title === title)
    element.comments.push(comment)
    deleteElement(title)
    putElement(element)
    
}
function deleteElement(title) {
    file.set('elements', elements().filter((el) => el.title != title))
    file.save()
}