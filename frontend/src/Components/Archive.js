import { useEffect, useState } from "react"
import '../Styles/archive.css'
import {useHttp} from '../hooks/http'

export function Archive(){

    const {request,loading} = useHttp()
    const [data,change_data] = useState([])

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
                        
                    </div>
                </div>
            </div>
        );
      }
    }
    
export default Archive;