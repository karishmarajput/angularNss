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

server.get('/api/volunteers',(req,res,next)=>{
    res.status(200).send(userData.getVolunteer)
})
server.post('/api/admin/login',(req,res,nest)=>{
    const {username,password} = req.body;
    console.log(username=="admin")
    console.log(password == "admin")
    if(username=="admin" && password == "admin"){
        res.json({ success: true });
    }else{
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
})
server.listen(3000,()=>{
    console.log('JSON server listening on port 3000')
})