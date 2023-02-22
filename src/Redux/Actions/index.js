import axios from "axios";
import {GET_CHARACTERS,GET_STUDENTS,GET_STAFF, CHOOSE_HOUSE,CHARACTERS_HOME} from './const'


const url='http://hp-api.herokuapp.com/api/characters';//URL base, solo para optimizar

export const characters=(house)=>{
    return async function (dispatch){
        const data=await axios(`${url}/house/${house}`);
        return dispatch({type:GET_CHARACTERS,payload:data});
    };
};
export const staff=()=>{
    return async function (dispatch){
        const data=await axios(`${url}/staff`);
        return dispatch({type:GET_STAFF,payload:data});
    };
};
export const students=()=>{
    return async function (dispatch){
        const data=await axios(`${url}/students`);
        return dispatch({type:GET_STUDENTS,payload:data});
    };
};
export const chooseHouse=(house)=>{
    return async function (dispatch){
        return dispatch({
            type:CHOOSE_HOUSE,
            payload:house
        })
    }
}
export const charactersHome=(home)=>{
    return async function (dispatch){
        return dispatch({
            type:CHARACTERS_HOME,
            payload:home
        })
    }
}





