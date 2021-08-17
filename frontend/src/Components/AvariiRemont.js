import { useState } from "react";

export function AvariiRemont(props){

    const {handle} = props;

    const [countID,addID] = useState(1)
    const [state,changeState] = useState(//массив и 1 элемент объект
        [
            {
                id:countID,
                date:'',
                number:'',
                text:'',
                person:''
            }
        ]
    )

    const add = (e)=>{//добавить раздел
        e.preventDefault()
        addID(countID+1)
        changeState([...state,{id:countID+1,
            date:'',
            number:'',
            text:'',
            person:''
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

    console.log('Аварийные ремонты: ',state)

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
                            <label>Дата аварии: </label>
                            <input 
                                type='datetime-local' 
                                name='date' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Номер акта: </label>
                            <input 
                                type='text' 
                                name='number' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Краткое описание аварии, ее обстоятельства, по чьей вине произошла, принятые меры: </label>
                            <textarea 
                                type='text' 
                                name='text' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></textarea>
                        </p>
                        <p>
                            <label>Начальник дистанции: </label>
                            <input 
                                type='text' 
                                name='person' 
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

export default AvariiRemont;