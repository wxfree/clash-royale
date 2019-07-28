const express = require('express')
const app = express()
const path = require('path')
app.use('/static', express.static(path.resolve(__dirname, '../static')))
console.log(path.resolve(__dirname, '../static'))
app.get('/api/card/detail', (req, res) => {
    const resp = {
        name: '克隆',
        type: 'spell',
        rarity: 'epic',
        url: '',
        id: 10
    }
    res.send(JSON.stringify(resp))
})
app.get('/', (req, res) => {
    res.send('hello world')
})
const server = app.listen('8080', () => {
    const host = server.address().address
    const port = server.address().port
    console.log(host, port)
    console.log('server is running at http://%s:%s', host, port)
})