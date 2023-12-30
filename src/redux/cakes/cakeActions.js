import BUY_CAKE from "./cakeType"

// buyCake  is action creator 
//the return object is the action 
export const buyCake = (number = 1) => {
    return{
        type : BUY_CAKE,
        payload : number,

    }
}

