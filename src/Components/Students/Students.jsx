import React,{useEffect} from 'react'
import { Fade } from 'react-awesome-reveal'
import { useDispatch,useSelector } from 'react-redux'
import {students} from '../../Redux/Actions/index'
import { List } from '../List/List'

export const Students = () => {
    const dispatch=useDispatch();    
    const stud = useSelector((state)=>state.students);
    const hou=useSelector((state)=>state.house);
    useEffect(()=>{
        dispatch(students())
    },[dispatch])
    return (
        <Fade cascade={true} duration={2500}>
            <div className={hou}>
                <List data={stud.data} title='Students' link1='Characters' link2='Staff'/>
            </div>
        </Fade>
    )
}
