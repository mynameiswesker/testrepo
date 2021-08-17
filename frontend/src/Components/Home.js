import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import '../Styles/home.css'
import {Objects} from './Objects'

export function Home() {

  const [back,ch] = useState(false)

    if(!localStorage.location){
      return(
        <Redirect to={{
          pathname:'/auth'
        }}/>
      )
    }

    if(back){
      return(
        <Redirect to={{
          pathname:'/auth'
        }}/>
      )
    }

  const exit = ()=>{
    localStorage.removeItem('location')
    ch(true)
  }

    return (
      <div className='wrapp_home'>
          <Objects />
          <button className='button_exit' onClick={exit}>Выйти</button>
      </div>
    );
  }
  
  export default Home;