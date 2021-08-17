import { Link, useParams } from "react-router-dom";
import {useEffect, useState} from 'react'

export function Dist() {

    const {id} = useParams()//получаем номер дистанции из урла
    const [arr_objects,getArrObjects] = useState([])//все объекты с бд
    const [stations,change_stations] = useState([])//станции метро для данной дистанции отфильтрованные не повторяющиеся

    useEffect(()=>{//создаем массив из неповторяющихся станций метро для данной дистанции

        if(arr_objects && arr_objects.length>0){

            let names = []
            arr_objects.forEach(obj=>{
            names.push(obj.station)

        })

        const filtered_names = names.filter(function(item, pos) {
            return names.indexOf(item) === pos;
        })

        change_stations(filtered_names)

        }
    },[change_stations,arr_objects])

    console.log('Доступные станции метро',stations)

    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await fetch(`/api/create/get_station${id}`,{
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
    },[id])

    console.log('Существующие станции установок на данной дистанции',arr_objects)

    if(!stations || stations.length === 0){
        return(
            <div>
                <h1>Дистанция №{id}</h1>
                <h2>Нет данных</h2>
            </div>
        )
    }

    return (
     <div>
        <h1>Дистанция №{id}</h1>

        <div>
            <h2>Станции метро :</h2>
            <ul>
                {stations.map((station,i)=>{/**в obj все станции для id дистанции */
                    return(
                        <li key={i}>
                            <Link to={{pathname:`/dist${id}/${station}`}}>{station}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>

     </div>
    );
  }
  
  export default Dist;