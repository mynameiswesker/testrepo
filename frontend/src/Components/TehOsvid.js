import { useEffect, useState } from "react";

export function TehOsvid(props) {

    const {handle} = props;

    const [countID,addID] = useState(1)
    const [state,changeState] = useState(//массив и 1 элемент объект
        [
            {
            id:countID,
            date:'',
            rezultat:''
            }
        ]
    )

    useEffect(()=>{
        handle(state)
    },[handle,state])

    const add = (e)=>{//добавить раздел
        e.preventDefault()
        addID(countID+1)
        changeState([...state,{id:countID+1,date:'',rezultat:''}])
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

    const change_date = (e,obj)=>{//изменяем состояние при изменении даты
        const newDate = e.target.value
        const newState = [...state]
        newState.forEach(o=>{
            if(o.id === obj.id){
                o.date = new Date(newDate)
            }
        })
        changeState(newState)
        handle(state)
    }

    const change_teh_exam = (e,obj)=>{//изменяем состояние при изменении текста
        const newText = e.target.value
        const newState = [...state]
        newState.forEach(o=>{
            if(o.id === obj.id){
                o.rezultat = newText
            }
        })
        changeState(newState)
        handle(state)
    }

    console.log('Массив тех освидетельствования',state)

    return (
        <div className='wrapp_div_teh_osv'>
                {state.length === 0 ? '' : state.map((obj,i)=>{
                    return(
                        <div className='div_teh_osv' key={i}>
                            <div className='div_teh_osv_targetDate'>
                                <div className='wrap_div_label_tehosv'>
                                    <label>Дата : </label>
                                    <input 
                                        name='technical_examination_date' 
                                        type='datetime-local' 
                                        onChange={(e)=>change_date(e,obj)}>
                                    </input>
                                </div>
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
                            </div>

                            <div className='result_prov'>
                                <label>Результат проверки </label>
                                <textarea name='technical_examination_result' rows="10" cols="45" onChange={(e)=>change_teh_exam(e,obj)}></textarea>
                            </div>
                        </div>
                    )
                })}

                    <div className='wrapp_div_button_add'>
                        <div className='wrapp_button_add' data-title='добавить'>
                            <button className='button_add' onClick={add}></button>
                        </div>
                    </div>  

        </div>
    );
  }
  
  export default TehOsvid;