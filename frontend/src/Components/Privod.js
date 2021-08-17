import { useState } from "react";

export function Privod(props){

    const {handle} = props;

    const [countID,addID] = useState(1)
    const [state,changeState] = useState(//массив и 1 элемент объект
        [
            {
            id:countID,
            name_oborud:'',
            type_ogregata:'',
            type_engine:'',
            zavod_number:'',
            pasport_na_izdelie:'',
            power:'',
            chastota_vra:'',
            nominal_tok:'',
            proizvodit:'',
            ves:'',
            year_vipusk:'',
            year_vvoda:'',
            zavod_izgotov:''
            }
        ]
    )

    const add = (e)=>{//добавить раздел
        e.preventDefault()
        addID(countID+1)
        changeState([...state,{id:countID+1,
            name_oborud:'',
            type_ogregata:'',
            type_engine:'',
            zavod_number:'',
            pasport_na_izdelie:'',
            power:'',
            chastota_vra:'',
            nominal_tok:'',
            proizvodit:'',
            ves:'',
            year_vipusk:'',
            year_vvoda:'',
            zavod_izgotov:''}])
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
                            <label>Наименование оборудования, тип соединения с ТЭД: </label>
                            <input 
                                type='text' 
                                name='name_oborud' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Тип пгрегата (насос, вентилятор): </label>
                            <input 
                                type='text' 
                                name='type_ogregata' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Тип электродвигателя: </label>
                            <input 
                                type='text' 
                                name='type_engine' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Заводской номер(№): </label>
                            <input 
                                type='text' 
                                name='zavod_number' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Паспорт на изделие(№): </label>
                            <input 
                                type='text' 
                                name='pasport_na_izdelie' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Вес: </label>
                            <input 
                                type='text' 
                                name='ves' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Год выпуска: </label>
                            <input 
                                type='datetime-local' 
                                name='year_vipusk' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Год ввода в эксплуатацию: </label>
                            <input 
                                type='datetime-local' 
                                name='year_vvoda' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Завод изготовитель: </label>
                            <input 
                                type='text' 
                                name='zavod_izgotov' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        
                        <h4>Основные характеристики оборудования</h4>

                        <p>
                            <label>Мощность(кВт): </label>
                            <input 
                                type='text' 
                                name='power' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Частота вращения(об/мин): </label>
                            <input 
                                type='text' 
                                name='chastota_vra' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Номинальный ток(А): </label>
                            <input 
                                type='text' 
                                name='nominal_tok' 
                                placeholder='не готово'
                                onChange={(e)=>{changer(e,obj)}}
                            ></input>
                        </p>
                        <p>
                            <label>Производительность,подача(м<sup><small>3</small></sup>/час): </label>
                            <input 
                                type='text' 
                                name='proizvodit' 
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

export default Privod;