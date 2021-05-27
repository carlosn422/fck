import express, { static } from 'express';
const app = express();

//const PORT = 9000;
// app.use(function(req, res, next) {
//   res.setHeader("Content-Type", "application/json");
//   next();
// })
app.use(static('dist'));
app.use(static('./'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

var PORT = process.env.PORT

app.listen(PORT) 
console.log('Server running at http://127.0.0.1:' + PORT + '/');


//app.listen(PORT);
//console.log(`[SERVER RUNNING] 127.0.0.1:${PORT}`);

//module.exports=app;
//module.exports.handler = serverless(app)