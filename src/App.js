import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import {Fade} from 'react-awesome-reveal'

//importaciondes de los componentes:
import { Landing } from './Components/Landing/Landing';
import { Home } from './Components/Home/Home';
import { Characters } from './Components/Characters/Characters';
import { Staff } from './Components/Staff/Staff';
import { Students } from './Components/Students/Students';

//importar sonido
// import Hp from './Sounds/hp.mp3'


function App() {

  // const play=new Howl({
  //   src:[Hp],
  //   volume:0.2,
  //   autoplay:true,
  //   loop:true
  // })
  // play.play();
  return (
    <React.Fragment>
      <Fade cascade={true} duration={2500}><Route exact path='/' component={Landing}/></Fade>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/characters' component={Characters}/>
      <Route exact path='/staff' component={Staff}/>
      <Route exact path='/students' component={Students}/>
    </React.Fragment>
  );
}

export default App;
