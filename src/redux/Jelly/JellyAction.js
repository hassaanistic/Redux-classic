import{ ADD_JELLY,  REMOVE_JELLY } from "./JellyType"

// buyCake  is action creator 
//the return object is the action 
export  const addJelly = () => {
    return{
        type : ADD_JELLY
    }
}
export  const removeJelly = () => {
    return{
        type : REMOVE_JELLY
    }
}

