import { useState } from 'react'
import './App.css';
import UserForm from './customForm/UserForm'
// import Form from './ant/Form'
// import Form from './new/Form'
// import Profile from './new/Profile'
// import Validation from './new/Validation'
// import HideShow from './new/HideShow'
// import Input from './new/Input'
// import Student from './new/Student'
// import User from './new/User'
// import Members from './new/Members'
// import Hookss from './new/Hookss'
// import EffectHook from './new/EffectHook'
// import CounterHooks from './new/CounterHooks'
// import Maparr from './new/Maparr'
import LoopComponents from './new/LoopComponents'
import LiftingState from './new/LiftingState'


function App() {


  function parentAlert(data){
    console.log(data);
  }
  return (
  // <div>
  //   <User data={getData}/>
  //   <Members data={getData}/>
  // </div>
  // <Hookss/>
  // <EffectHook/>
  // <CounterHooks/>
  // <Maparr/>
  // <LoopComponents/>
  <LiftingState alert={parentAlert}/>
  );
}

export default App;