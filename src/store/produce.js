//importing produce data 
import produceData from "../mockData/produce.json";


const POPULATE = "produce/POPULATE"

//this is the populateProduce action creator 
//whenever you create a new action type, you need to add a case for it in the reducer
    //that handles the slice of state that needs to be updated 
export function populateProduce () {
    return {
        //string literal became the value for my type key 
        type: POPULATE,
        //key of produce is set to the produce data 
        produce: produceData,
    }
}

//produceReducer is responsible for handling the produce information in the store 
//or the produce slice of state

//define a function called produceReducer 
    //take in state and action as parameters
    //the state should default to an empty object
    //add a switch/case statement on the action.type
    //return the state as the default case of the switch
export default function produceReducer (state = {}, action){
    switch(action.type){
        //addition of case for this action.type with the type being POPULATE 
        case POPULATE:
            const newState = {};
            //conversion from an array into an object 
                //called normalizing data 
                    //its faster to search for a produce by its id than to search through an array
            action.produce.forEach(produce => {
                newState[produce.id] = produce;
            });
            return newState;
        default:
            return state;
    }
};

//this is the structure of how all reducer functions should look 

//the reducer should return the old state or a new state 
    //depending on the type of the action that gets dispatched
    //the state does does not have to be an object 
        //can be an array, boolean,etc

