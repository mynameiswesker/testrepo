import {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';

export function Stations() {

    const [arr_objects,getArrObjects] = useState([])//все объекты с бд
    const {station,id} = useParams()

    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await fetch(`/api/create/get_objects${station}`,{
                    method:'GET',
                })
                const result = await response.json()
                //console.log(result)
                getArrObjects(result)
            } catch (err) {
                console.log('Ошибка при получении данных :', err)
            }
          }
          fetchData();
    },[station])

    //console.log(arr_objects)

    if(!arr_objects || arr_objects.length === 0){
        return(
            <div>Загрузка...</div>
        )
    }

    return (
     <div>
        <h1>Станция {station}</h1>
        
        <ul>
            {arr_objects.map((obj,i)=>{
                return(
                    <li key={i}>
                        <Link to={{pathname:`/dist${id}/${station}/${obj.name_object}`}}>{obj.name_object}</Link>
                    </li>
                )
            })}
        </ul>

     </div>
    );

  }
  
  export default Stations;