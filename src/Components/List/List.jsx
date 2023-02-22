import React from 'react'
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import './List.css'

export const List = (props) => {
    const {data,title,link1,link2}=props   
    let linked1=`/${link1}`
    let linked2=`/${link2}`
    // const age=(birth)=>{         
    //     let time=new Date();
    //     let yyyy=time.getFullYear();
    //     let mm=time.getMonth();
    //     let dd=time.getDate();
    //     let date=[dd,mm,yyyy];
    //     let birthDate=birth.split('-')
    //     let age=date[2]-birthDate[2];
    //     if(birthDate[1]<date[1]){
    //         age--;
    //         if(birthDate[0]>date[0])age++;
    //     }
    //     return age;
    // }
    const getHouse=(house)=>{
       
        switch(house){
            case 'Gryffindor':
                return(
                    <img className='chooser unselec' src="https://i.imgur.com/BeNuylF.png" alt="Gryff" />
                )
            case 'Slytherin':
                return(
                    <img className='chooser unselec' src="https://i.imgur.com/jC2xxrL.png" alt="Slyth" />
                )
            case 'Hufflepuff':
                return(
                    <img className='chooser unselec' src="https://i.imgur.com/C7P0zVy.png" alt="Huff" />
                )
            case 'Ravenclaw':
                return(
                    <img className='chooser unselec' src="https://i.imgur.com/z32guqm.png" alt="Rav" />
                )
            default:
                return(
                    <img className='chooser unselec' src="https://i.imgur.com/fiAGLMP.png" alt="Hog" />
                )
        }
    }
    if(!data){return(
        <div className='load'>
            <h1 className='title'>Cargando</h1>
            <img className='loading' src="https://img.wattpad.com/7df5332d74e9cc9e10f50efe574ee0cd4f5a2134/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f624e685a467976353165677445773d3d2d3139352e313565393965363636636562336366613934383035303531373932382e676966?s=fit&w=720&h=720" alt="Loading" />
        </div>
    )}
    if(data.length){
       return (
        <div className='global2'>
            <div className='TableCont'>
                <div id='Header'>
                    <img className='chooser principal unselec' src="https://i.imgur.com/fiAGLMP.png" alt="hog" />
                    <h1 className='title'>{title}</h1>
                </div>
                {/* {act?<div className='float'>
                <img className='restart' src="https://i.imgur.com/oJxuDzz.jpg" alt="shell" onClick={()=>reset} />
            </div> : console.log('la condicion no entra')} */}
                <div className='links'>
                    <NavLink className='linkC charac' to='/home'><div className='nav'>Home</div> </NavLink>
                    <hr />
                    <NavLink className='linkC staff' to={linked1}><div className='nav'>{link1}</div> </NavLink>                  
                    <hr />
                    <NavLink className='linkC stud' to={linked2}><div className='nav'>{link2}</div></NavLink>
                </div>
                <ul>
                    <div className='TableHead'>
                        <h2>Pic</h2>
                        <hr />
                        <h2>Inf</h2>
                        <hr />
                        <h2>Shell</h2>
                    </div>
                    {data.map(item=>{
                        return(
                            <li className='TableItem' key={uuidv4()}>
                                <div className='piccont'><img className='picture' src={item.image!==''?item.image:'https://www.eaprende.com/la-busqueda/images/silueta-hombre.png'} alt="Character" /></div>
                                <hr />
                                <div className='info'>
                                    <div><p>Name: {item.name}</p></div>
                                    <hr />
                                    <div><p>Species: {item.species}</p></div>
                                    <hr />
                                    <div><p>Gender: {item.gender}</p></div>
                                    {/* <div><p>Age:{age(item.dateOfBirth)}</p></div> */}
                                    <hr />
                                    <div><p>Birth: {item.dateOfBirth?item.dateOfBirth:'Unknow'}</p></div>
                                    <hr />
                                    <div><p>House: {item.house?item.house:'Unknow'}</p></div>
                                </div>
                                <hr />
                                <div className='shellcont'>
                                    {getHouse(item.house)}
                                </div>
                            </li>
                        )
                    })}
                </ul>
                
            </div>
        </div>
        ) 
    }
    
}
