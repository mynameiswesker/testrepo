import { useState } from "react";

export function ItogOsmotraZaz(props){

    const {handle} = props;

    const [countID,/* addID */] = useState(1)
    const [state,changeState] = useState(//массив и 1 элемент объект
        [
            {
                id:countID,
                name_project:'',
                project_org:'',
                number_chert:'',
                is_obriv:'',
                visual_osmotr_svarki:'',
                visual_osmotr_boltSoed:'',
                is_defects:'',
                itog:''
            }
        ]
    )

/*     const add = (e)=>{//добавить раздел
        e.preventDefault()
        addID(countID+1)
        changeState([...state,{id:countID+1,
            name_project:'',
            project_org:'',
            number_chert:'',
            is_obriv:'',
            visual_osmotr_svarki:'',
            visual_osmotr_boltSoed:'',
            is_defects:'',
            itog:''
            }])
        handle(state)
    } */

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

    console.log('Итоги проверки заземл: ',state)

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
                            <label>Проект: </label>
                            <input 
                                type='text' 
                                name='name_project' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Проектная организация: </label>
                            <input 
                                type='text' 
                                name='project_org' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Номера чертежей: </label>
                            <input 
                                type='text' 
                                name='number_chert' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Обрывы проводников: </label>
                            <input 
                                type='text' 
                                name='is_obriv' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Визуальный осмотр мест сварки показал: </label>
                            <textarea 
                                type='text' 
                                name='visual_osmotr_svarki' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></textarea>
                        </p>
                        <p>
                            <label>Визуальный осмотр мест болтовых соединений показал: </label>
                            <textarea 
                                type='text' 
                                name='visual_osmotr_boltSoed' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></textarea>
                        </p>
                        <p>
                            <label>Выявленные дефекты: </label>
                            <textarea 
                                type='text' 
                                name='is_defects' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></textarea>
                        </p>
                        <p>
                            <label>Заключение: </label>
                            <textarea 
                                type='text' 
                                name='itog' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></textarea>
                        </p>

                    </div>
                )
            })}
                    
        </div>
    )
}

export default ItogOsmotraZaz;