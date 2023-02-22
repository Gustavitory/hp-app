import React from 'react'
import { NavLink } from 'react-router-dom'
import './Landing.css'

export const Landing = () => {
    return (
        <div className='LandingContaineer'>
            <div className='back'>
                <img className='backimg' src="/background.gif" alt="back" />                
            </div>
            <img className='flags' src="https://i.imgur.com/lKScdCs.png" alt="flags" />
            <img className='shell Gry' src="https://i.imgur.com/BeNuylF.png" alt="flags" />
            <img className='shell Sly' src="https://i.imgur.com/jC2xxrL.png" alt="flags" />
            <img className='shell Rav' src="https://i.imgur.com/z32guqm.png" alt="flags" />
            <img className='shell Huff' src="https://i.imgur.com/C7P0zVy.png" alt="flags" />
            <div className='ContentLandingContaineer'>
                <img className='logo' src="https://i.imgur.com/orQSBBe.png" alt="logo" />
                <NavLink className='link' to='/home'>Entrar</NavLink>
            </div>            
        </div>
    )
}
