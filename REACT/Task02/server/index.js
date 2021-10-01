const express = require("express");
const app = express();
const port = 5017;
const ejf = require('edit-json-file')
const bodyParser = require('body-parser')

const file = ejf('elements.json')

app.use(bodyParser())

app.get('/', (req,res) => {
    res.send(elements())
})

app.put('/comment', (req,res) => {
    putComment(req.body.title, req.body.comment)
    res.send(elements())
})

app.put('/element', (req,res) => {
    putElement(req.body)
    res.send(elements())
})

app.delete('/element', (req,res) => {
    deleteElement(req.body.title)
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
    putElement(element)
}
function deleteElement(title) {
    file.set('elements', elements().filter((el) => el.title != title))
    file.save()
}