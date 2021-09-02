import { useEffect, useState } from "react"
import '../Styles/archive.css'
import {useHttp} from '../hooks/http'
import { Link, useHistory } from "react-router-dom"

export function Archive(){

    const {request,loading} = useHttp()
    const [data,change_data] = useState([])
    const history = useHistory()

    const oldPath = history.location.pathname
    
    useEffect(()=>{

        async function fetchData(){
            let res = await request('/api/create/getobj')
            change_data(res)
        }
        fetchData()

    },[request])

    if(loading){
        return(
            <div>Загрузка...</div>
        )
    }else{
        return (
            <div className='wrapp_archive'>
                <h1>Архив объектов</h1>
                <div className='main'>
                    <div className='input'>
                        <input type='text' placeholder='Поиск...'></input>
                    </div>
                    <div className='objects'>
                        <ul>
                            {data.map((item,i)=>{
                                return(
                                    <li key={i}>
                                        <Link to={{pathname:`${oldPath}/${item.name_object}`,state:item}} key={i}>{item.name_object}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
      }
    }
    
export default Archive;