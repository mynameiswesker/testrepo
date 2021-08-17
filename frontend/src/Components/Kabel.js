import { useState } from "react";

export function Kabel(props){

    const {handle} = props;

    const [countID,addID] = useState(1)
    const [state,changeState] = useState(//массив и 1 элемент объект
        [
            {
            id:countID,
            naznachenie:'',
            date_montazh:'',
            marka:'',
            napr:'',
            dlina:'',
            date_proverki:''    
            }
        ]
    )

    const add = (e)=>{//добавить раздел
        e.preventDefault()
        addID(countID+1)
        changeState([...state,{id:countID+1,
            naznachenie:'',
            date_montazh:'',
            marka:'',
            napr:'',
            dlina:'',
            date_proverki:''
            }])
        handle(state)
    }

    const remove = (e,obj)=>{//удалить раздел
        e.preventDefault()
        let newState = [...state]
        newState = newState.filter(o=>{
            return o.id !== obj.id
        })
        changeState(newState)
        handle(state)
    }

    const changer = (e,obj)=>{
        e.preventDefault()
        const tagName = e.target.name
        const tagValue = e.target.value
        const newState = [...state]
        newState.forEach(o=>{
            if(o.id === obj.id){
                o[`${tagName}`] = tagValue
            }
        })
        changeState(newState)
        handle(state)
    }

    console.log(state)

    return(
        <div className='wrapp_div_teh_osv'>
            {state.map((obj,i)=>{
                return(
                    <div className='prilo' key={i}>

                        {state.length <=1 ? '' :
                            <div className='wrapp_button_close' data-title='удалить'>
                                <button 
                                    className='close' 
                                    onClick={(e)=>remove(e,obj)}
                                    data-title='Удалить раздел'
                                >
                                </button>
                            </div>
                        }

                        <p>
                            <label>Назначение, номер, наименование кабеля (силовых,управления,сигнализация): </label>
                            <input 
                                type='text' 
                                name='naznachenie' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Дата монтажа: </label>
                            <input 
                                type='datetime-local' 
                                name='date_montazh' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Марка кабеля (число жил, сечение): </label>
                            <input 
                                type='text' 
                                name='marka' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Напряжение: </label>
                            <input 
                                type='text' 
                                name='napr' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Длина: </label>
                            <input 
                                type='text' 
                                name='dlina' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Дата проверки: </label>
                            <input 
                                type='datetime-local' 
                                name='date_proverki' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>

                    </div>
                )
            })}
            <div className='wrapp_div_button_add'>
                        <div className='wrapp_button_add' data-title='добавить'>
                            <button className='button_add' onClick={add}></button>
                        </div>
                    </div>
        </div>
    )
}

export default Kabel;