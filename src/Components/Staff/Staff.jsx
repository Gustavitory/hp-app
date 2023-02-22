import React,{useEffect} from 'react'
import { Fade } from 'react-awesome-reveal'
import { useDispatch,useSelector } from 'react-redux'
import {staff} from '../../Redux/Actions/index'
import { List } from '../List/List'

export const Staff = () => {
    const dispatch=useDispatch();    
    const st = useSelector((state)=>state.staff);
    const hou=useSelector((state)=>state.house);

    useEffect(()=>{
        dispatch(staff())
    },[dispatch])
    return (
        <Fade cascade={true} duration={2500}>
            <div className={hou}>
                <List data={st.data} title='Staff' link1='Characters' link2='Students'/>
            </div>
        </Fade>
    )
}
