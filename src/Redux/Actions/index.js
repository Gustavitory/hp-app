// import axios from "axios";
import {GET_CHARACTERS,GET_STUDENTS,GET_STAFF, CHOOSE_HOUSE,CHARACTERS_HOME} from './const'
import gryffindor from '../../API/characters/Gryf';
import slytherin from '../../API/characters/Sly';
import hufflepuff from '../../API/characters/Huff';
import ravenclaw from '../../API/characters/Rave';
import staffList from '../../API/staff';
import Stu from '../../API/students';


// const url='https://hp-api.onrender.com/api/characters';//URL base, solo para optimizar
function selectCharacters(house){
    switch(house){
        case 'gryffindor':
            return gryffindor;
        case 'slytherin':
            return slytherin;
        case 'hufflepuff':
            return hufflepuff;
        case 'ravenclaw':
            return ravenclaw;
        default:
            return [];
    }
}

export const characters=(house)=>{
    return async function (dispatch){
        // const data=await axios(`${url}/house/${house}`);
        const data=selectCharacters(house);
        return dispatch({type:GET_CHARACTERS,payload:data});
    };
};
export const staff=()=>{
    return async function (dispatch){
        // const data=await axios(`${url}/staff`);
        const data=staffList;
        return dispatch({type:GET_STAFF,payload:data});
    };
};
export const students=()=>{
    return async function (dispatch){
        // const data=await axios(`${url}/students`);
        const data=Stu;
        console.log(data)
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





