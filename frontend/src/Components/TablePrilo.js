import { useState } from "react";

export function TablePrilo(props) {

    const {handle} = props;

    const [countID,addID] = useState(1)
    const [state,changeState] = useState(//массив и 1 элемент объект
        [
            {
            id:countID,
            name_prilo:'',
            document:'',
            user:''
            }
        ]
    )

    const add = (e)=>{//добавить раздел
        e.preventDefault()
        addID(countID+1)
        changeState([...state,{id:countID+1,name_prilo:'',document:'',user:''}])
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

    const changeName = (e,obj)=>{//при изменении имени 
        e.preventDefault()
        const newName = e.target.value
        const newState = [...state]
        newState.forEach(o=>{
            if(o.id === obj.id){
                o.name_prilo = newName
            }
        })
        changeState(newState)
        handle(state)
    }

    const changeDocument = (e,obj)=>{//при изменении документа
        e.preventDefault()
        const newDoc = e.target.value
        const newState = [...state]
        newState.forEach(o=>{
            if(o.id === obj.id){
                o.document = newDoc
            }
        })
        changeState(newState)
        handle(state)
    }

    const changeUser = (e,obj)=>{//при изменении документа
        e.preventDefault()
        const newUser = e.target.value
        const newState = [...state]
        newState.forEach(o=>{
            if(o.id === obj.id){
                o.user = newUser
            }
        })
        changeState(newState)
        handle(state)
    }

    console.log('Таблица приложений',state)

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
                            <label>Наименование приложения: </label>
                            <input type='text' 
                            name='name_prilo' 
                            onChange={(e)=>{changeName(e,obj)}}
                            ></input>
                        </p>

                        <p>
                            <label>Документ(проект,схема,протокол,акт и др.): </label>
                            <input type='text' 
                            name='document' 
                            onChange={(e)=>{changeDocument(e,obj)}}
                            ></input>
                        </p>

                        <p>
                            <label>Исполнитель: </label>
                            <input type='text' 
                            name='user' 
                            onChange={(e)=>{changeUser(e,obj)}}
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
    );

  }
  
  export default TablePrilo;