const jsonServer = require('json-server')
const middleware = jsonServer.defaults();
const server = jsonServer.create();
const jwt = require('jsonwebtoken');

const secretKey = 'secret_key';

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
server.post('/api/admin/login',(req,res,next)=>{
    const {username,password} = req.body;
    const token = jwt.sign({ username: 'admin' }, secretKey, { expiresIn: '1h' });
    if(username=="admin" && password == "admin"){
        res.json({ success: true, token: token });
    }else{
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
})
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(401).json({ error: 'Token not provided' });
    }
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      }
      req.user = decoded;
      next();
    });
  }
  
server.post('/api/admin/addEvent',verifyToken,(req,res,next)=>{
    console.log(req.body)
    res.json({ success: true });
})
server.post('/api/admin/addVolunteer',verifyToken,(req,res,next)=>{
    console.log(req.body)
    res.json({ success: true });
})
server.listen(3000,()=>{
    console.log('JSON server listening on port 3000')
})