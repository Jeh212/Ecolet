import express from 'express';


const routes = express();


routes.get('/',(request,response)=>{

  response.json({"success":'hi'})
  
})

export default routes;