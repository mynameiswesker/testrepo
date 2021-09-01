import {useHistory} from 'react-router-dom'
import {Route,Redirect} from "react-router-dom";
import { useState } from "react"
import '../Styles/admin.css'

export function Admin(){

  const history = useHistory()

  const old_path = history.location.pathname

  const btn_create_obj = function(){
    history.push(`${old_path}/create`)
  }

  const get_archive = function(){
    history.push(`${old_path}/archive`)
  }

  const [back,ch] = useState(false)

  if(!localStorage.location){
    return(
      <Route>
        <Redirect to={{
          pathname:'/auth'
          }}
        />
      </Route>
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
        <div>
          <h1>Панель администратора</h1>
          <button className='btn_close' onClick={exit}>Выйти</button>
            
          <button onClick={btn_create_obj}>
            Добавить новый объект
          </button>

          <button onClick={get_archive}>
            Архив объектов
          </button>

        </div>
    );
  }
    
export default Admin;