import { useState } from "react"
import {Route,Redirect} from "react-router-dom";
import '../Styles/auth.css'  

export function Auth() {

    const storageName = 'location'

    const [login,change_login] = useState('')
    const [password,change_password] = useState('')
    const [isAuth,change_isauth] = useState(false)

    const handler = async(e)=>{
        e.preventDefault()
        let response = await fetch('/api/test',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({login,password})
        })

        let data = await response.json()

        change_isauth(data.response)

    }

    if(isAuth === 'user'){

        localStorage.setItem(storageName,'user')

        return(
            <Route>
               <Redirect to={{
                    pathname:'/',
                    propsSearch:isAuth
                }}/> 
            </Route>
        )
    }

    if(isAuth === 'admin'){

        localStorage.setItem(storageName,'admin')

        return(
            <Route>
                <Redirect to={{
                    pathname:'/admin',
                    propsSearch:isAuth
                }}/>
            </Route>
        )
    }

    return (
     <div className='wrapp_form'>
         <div className='form_auth'>
            <div className='background_form_auth'></div>
            <form>
                <ul>
                    <li>
                        <p><label htmlFor="login" style={{color:'#0624f6',fontSize:'20px'}}>Логин:</label></p>
                        <p><input type="text" id="login" name="login" onChange={(e)=>change_login(e.target.value)}/></p>
                    </li>
                    <li>
                        <p><label htmlFor="pass" style={{color:'#0624f6',fontSize:'20px'}}>Пароль:</label></p>
                        <p><input type="password" id="pass" name="pass" onChange={e=>change_password(e.target.value)}/></p>
                    </li>
                    <li>
                        <p>
                            <button className='button_auth' onClick={handler}>Войти</button>
                        </p>
                    </li>
                </ul>
            </form>
        </div>
     </div>
    );
  }
  
  export default Auth;