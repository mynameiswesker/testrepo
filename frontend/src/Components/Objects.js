import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/name_object.css'

export function Objects(){

    const [arr_objects,getArrObjects] = useState([])//все объекты с бд

    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await fetch('/api/create/getobj',{
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
    },[])

    if(arr_objects.length === 0){
        return(
            <div>Нет данных</div>
        )
    }

    return(

        <div className='home_objects_wrapp'>
            <ul>
                <li>
                    <Link to='/dist1'>Дистанция 1</Link>
                </li>
                <li>
                    <Link to='/dist2'>Дистанция 2</Link>
                </li>
                <li>
                    <Link to='/dist3'>Дистанция 3</Link>
                </li>
                <li>
                    <Link to='/dist4'>Дистанция 4</Link>
                </li>
                <li>
                    <Link to='/dist5'>Дистанция 5</Link>
                </li>
                <li>
                    <Link to='/dist6'>Дистанция 6</Link>
                </li>
                <li>
                    <Link to='/dist7'>Дистанция 7</Link>
                </li>
                <li>
                    <Link to='/dist8'>Дистанция 8</Link>
                </li>
                <li>
                    <Link to='/dist9'>Дистанция 9</Link>
                </li>
                <li>
                    <Link to='/dist10'>Дистанция 10</Link>
                </li>
            </ul>
        </div>
    )
}

export default Objects;