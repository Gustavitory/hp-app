import {GET_CHARACTERS,GET_STUDENTS,GET_STAFF, CHOOSE_HOUSE,CHARACTERS_HOME} from '../Actions/const'
import Stu from '../../API//students'

//estado global inicial
const initialState = {
    staff:[],
    students:Stu,
    characters:[],
    house:'none',
    CharactersHome:''
}

export const rootReducer =(state=initialState,action)=>{//se maneja una copia del estado global inicial.
    switch(action.type){

        case GET_CHARACTERS:
            return{
                ...state,
                characters:action.payload
            };

        case GET_STAFF:
            return{
                ...state,
                staff:action.payload
            };

        case GET_STUDENTS:
            return{
                ...state,
                students:action.payload
            };
        case CHOOSE_HOUSE:
            return{
                ...state,
                house:action.payload
            }  
        case CHARACTERS_HOME:
            return{
                ...state,
                CharactersHome:action.payload
            }

        default:return state;
    }
}
export default rootReducer;