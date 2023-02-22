import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {chooseHouse} from '../../Redux/Actions/index'
import { NavLink } from 'react-router-dom'
import {Fade} from 'react-awesome-reveal'
import './Home.css'

export const Home = () => {
    const dispatch=useDispatch();
    const hou=useSelector((state)=>state.house);
    return (
        <Fade cascade={true} duration={2500}>
            <div className={hou}>
                <div className='global'>
                    <img className='logoHome' src="https://i.imgur.com/orQSBBe.png" alt="logo" />
                    <div className='chooses'>
                        <img  className='chooser' src="https://i.imgur.com/BeNuylF.png" alt="shell" onClick={()=>dispatch(chooseHouse('gryf'))}/>
                        <img  className='chooser' src="https://i.imgur.com/jC2xxrL.png" alt="shell" onClick={()=>dispatch(chooseHouse('slyt'))}/>
                        <img  className='chooser' src="https://i.imgur.com/z32guqm.png" alt="shell" onClick={()=>dispatch(chooseHouse('rave'))}/>
                        <img  className='chooser' src="https://i.imgur.com/C7P0zVy.png" alt="shell" onClick={()=>dispatch(chooseHouse('huff'))}/>
                        <img className='restart' src="https://i.imgur.com/oJxuDzz.jpg" alt="shell" onClick={()=>dispatch(chooseHouse('none'))} />
                    </div>
                    <div className='links'>
                        <NavLink className='linkC charac' to='/Characters'><div className='nav'>Characters</div> </NavLink>                   
                        <hr />
                        <NavLink className='linkC staff' to='/Staff'><div className='nav'>Staff</div> </NavLink>                  
                        <hr />
                        <NavLink className='linkC stud' to='/Students'><div className='nav'>Students</div></NavLink>
                        
                    </div>
                </div>
            </div>
        </Fade>
        
    )
}
