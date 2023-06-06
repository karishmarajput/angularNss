const jsonServer = require('json-server')
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const eventData = require('../server/data/user')

server.get('/api/events',(req,res,next)=>{
    res.status(200).send(eventData.getEvent)
})
const userData = require('../server/data/volunteer')
console.log(userData)
server.get('/api/volunteers',(req,res,next)=>{
    res.status(200).send(userData.getVolunteer)
})
server.listen(3000,()=>{
    console.log('JSON server listening on port 3000')
})