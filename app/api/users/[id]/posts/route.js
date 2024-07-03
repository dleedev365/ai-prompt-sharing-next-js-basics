import { connectToDB } from "@utils/database"
import Prompt from '@models/prompt';


export const GET = async (req, {params}) => {

    try{
        await connectToDB();
        const propmts = await Prompt.find({
            creator: params.id
        }).populate('creator');
        return new Response(JSON.stringify(propmts), {status: 200})
    }catch(error){
        console.log(error)
        return new Response("Failed to fetch prompts", {status: 500})
    }
;}