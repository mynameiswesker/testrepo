import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export function StationInArchive(){

    const [data,change_data] = useState([])
    const history = useHistory()
    const state = history.location.state

    useEffect(()=>{
        change_data(state)
    },[state])

    return(
        <div>
            Установка: {data.name_object}
            <button onClick={
                ()=>{
                    change_data(Object.assign(data,{q:1}))
                    console.log('Добавили 1')
                }
            }>1</button>
            <button onClick={
                ()=>{
                    console.log(data)
                }
            }>2</button>
        </div>
    )
}
    
export default StationInArchive;