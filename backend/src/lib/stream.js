import {StreamChat} from "stream-chat";
import "dotenv/config";

const apiKey=process.env.STREAM_API_KEY;
const apiSecret=process.env.STREAM_API_SECRET;

if(!apiKey||!apiSecret){
    console.error("Stream API key or API secret is missing");

}
const streamClient=StreamChat.getInstance(apiKey,apiSecret);
//create or update user in stream
export const upsertStreamUser= async(userData)=>{
    try {
         await streamClient.upsertUsers([userData]);
         return userData;
    } catch (error) {
        console.error("Error upserting Stream user:",error);
    }
};
//do it later
export const generateStreamToken=(userId)=>{};
