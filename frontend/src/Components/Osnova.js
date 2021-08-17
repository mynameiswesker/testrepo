import { useState } from "react";

export function Osnova(props){

    const {handle} = props;

    const [state,change_state] = useState({
        type_object:'ВШ',//тип объекта+
        station:'',//станция метро+
        number_dist:'',//номер дистанции+
        name_object:''//название объекта+
    })

    const changer = (e)=>{
        e.preventDefault()
        const tagName = e.target.name
        const tagValue = e.target.value
        const newState = {...state}
        newState[tagName] = tagValue
        change_state(newState)
        handle(newState)
    }

    //console.log('Основная инфа в начале: ',state)

    return(
        <div className='div_teh_osv'>
            <p>
                <label>Тип объекта </label>
                <select 
                    name='type_object' 
                    defaultValue='ВШ' 
                    onChange={(e)=>changer(e)}
                >
                <option >ВУ</option>
                <option defaultValue={'ВШ'} >ВШ</option>
                </select>
            </p>

            <p>
                <label>Станция метро </label>
                <input 
                    name='station' 
                    type='text' 
                    placeholder='Бульвар Рокоссовского'  
                    onChange={(e)=>changer(e)}
                >
                </input>
            </p>

            <p>
                <label>Номер дистанции </label>
                <input 
                    name='number_dist' 
                    type='text' 
                    placeholder='1' 
                    onChange={(e)=>changer(e)}
                > 
                </input>
            </p>

            <p>
                <label>Название установки </label>
                <input 
                    name='name_object' 
                    type='text' 
                    placeholder='ВШ-123' 
                    onChange={(e)=>changer(e)}
                >
                </input>
            </p>            
        </div>
    )
}

export default Osnova;