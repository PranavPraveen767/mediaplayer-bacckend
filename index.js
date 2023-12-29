//import json server library in index.js
const jsonServer=require('json-server')


//create server using json server library
const mediaPlayerServer=jsonServer.create()


//create path to db.json
const router=jsonServer.router('db.json')


//create middleware to convert js to json
const middleware=jsonServer.defaults()


//concet middlware and router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)


//setup port fopr the server
const port=7000 || process.env.PORT


//to listen for resolving request
mediaPlayerServer.listen(port,()=>{
    console.log(`Media Player serever started at ${port} and ready to fetch request`);
})
