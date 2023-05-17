import { client } from "..";

export const  redisdata = async(req,res,next)=> {
const client_data =await client.get("note")
if(client_data){
return res.json({ data:JSON.parse(client_data) })
}else{
    next()
}
}