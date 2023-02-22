import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {characters} from '../../Redux/Actions/index'
import { List } from '../List/List'
import './Characters.css'



export const Characters = () => {
    const dispatch=useDispatch();    
    const [house,setHouse]=useState('')
    const char = useSelector((state)=>state.characters);
    const hou=useSelector((state)=>state.house);


    useEffect(()=>{
        if(house!==''){
            dispatch(characters(house))
        }
    },[house,dispatch])
    if(house===''){
        return(
            <div className={hou}>
                <div className='pant'>                    
                    <div className='selects'>
                        <h1 className='title'>Select a House</h1>
                        <div>
                            <img className='chooser pulser' src='https://i.imgur.com/BeNuylF.png' onClick={()=>setHouse('gryffindor')} alt='img'></img>
                            <img className='chooser pulser sl' src='https://i.imgur.com/jC2xxrL.png' onClick={()=>setHouse('slytherin')} alt='img'></img>
                            <img className='chooser pulser' src='https://i.imgur.com/z32guqm.png' onClick={()=>setHouse('ravenclaw')} alt='img'></img>
                            <img className='chooser pulser' src='https://i.imgur.com/C7P0zVy.png' onClick={()=>setHouse('hufflepuff')} alt='img'></img>
                        </div>                        
                    </div>                    
                </div>                
            </div>
        )        
    }
    else{
        console.log(char);
       return (
            <div className={hou}>
                <div className='float'>
                    <img className='restart' src="https://i.imgur.com/oJxuDzz.jpg" alt="shell" onClick={()=>setHouse('')} />
                </div>            
                <List data={char} title='Characters' link1='Staff' link2='Students'/>
            </div>        )
    }     
}
