import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
//toggle.css

export function StationInArchive(){

    const [data,change_data] = useState([])
    const history = useHistory()
    const state = history.location.state

    useEffect(()=>{
        change_data(state)
    },[state])

    const changer = (e,tag,pod_tag,index)=>{
        const text = e.target.value
        const newData = data

        if(pod_tag){
            newData[tag][index][pod_tag] = text
            change_data(newData)
            console.log(data)
            return
        }

        newData[tag] = text
        change_data(newData)
        console.log(data)
    }

    if(data.length === 0){
        return(
            <div>...Загрузка</div>
        )
    }else{
        return(
            <div className='target1'>
                <div className='target2'>
                    <h1>Изменение данных установки</h1>
                    <h2>{data.name_object}</h2>
                </div>
                <div className='target4'>
                    <h3 className='h3_change'>Технический паспорт :</h3>
                    <div className='target3'>
                        <div>
                            <div>Номер электроустановки:  
                                <input
                                    className='input_target1' 
                                    type='text' 
                                    defaultValue={data.name_object} 
                                    onChange={(e)=>changer(e,'name_object')}>
                                </input>
                            </div>
                            <div>Место расположения:  
                                <input 
                                    className='input_target1' 
                                    type='text' 
                                    defaultValue={data.station} 
                                    onChange={(e)=>changer(e,'station')}>
                                </input>
                            </div>
                            <div>Год постройки:  
                                <input
                                    className='input_target1'  
                                    type='text' 
                                    defaultValue={data.date_create} 
                                    onChange={(e)=>changer(e,'date_create')}
                                    style={{color:'red'}}
                                    >
                                </input>
                            </div>
                            <div>Проект:  
                                <input
                                    className='input_target1'  
                                    type='text' 
                                    defaultValue={data.project} 
                                    onChange={(e)=>changer(e,'project')}>
                                </input>
                            </div>
                            <div>Дата допуска к эксплуатации:  
                                <input 
                                    className='input_target1' 
                                    type='text' 
                                    defaultValue={data.date_of_approval} 
                                    onChange={(e)=>changer(e,'date_of_approval')}
                                    style={{color:'red'}}>
                                </input>
                            </div>
                            <div>Нормативный срок службы:  
                                <input 
                                    className='input_target1' 
                                    type='text' 
                                    defaultValue={data.standard_service_life} 
                                    onChange={(e)=>changer(e,'standard_service_life')}>
                                </input>
                        </div>
                        </div>
                    </div>
                    <div className='change_tehPasport'>
                        <h3 className='h3_change_padd_90'>Техническое освидетельствование :</h3>
                        {data.teh_osvidetelstvovanye.map((item,i)=>{
                            return(
                                <div key={i} className='vlozh_div'>
                                    <div>
                                        Дата: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.date}
                                            onChange={(e)=>changer(e,'teh_osvidetelstvovanye','date',i)}>
                                        </input>
                                    </div>
                                    <div>
                                        Результат: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.rezultat}
                                            onChange={(e)=>changer(e,'teh_osvidetelstvovanye','rezultat',i)}>
                                        </input>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='change_tehPasport'>
                        <h3 className='h3_change_padd_90'>Таблица приложений :</h3>
                        {data.prilo.map((item,i)=>{
                            return(
                                <div key={i} className='vlozh_div'>
                                    <div>
                                        Наименование приложения: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.name_prilo}
                                            onChange={(e)=>changer(e,'prilo','name_prilo',i)}>
                                        </input>
                                    </div>
                                    <div>
                                        Документ: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.document}
                                            onChange={(e)=>changer(e,'prilo','document',i)}>
                                        </input>
                                    </div>
                                    <div>
                                        Исполнитель: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.user}
                                            onChange={(e)=>changer(e,'prilo','user',i)}>
                                        </input>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='change_tehPasport'>
                        <h3 className='h3_change_padd_90'>Электропривод технологической системы :</h3>
                        {data.privod.map((item,i)=>{
                            return(
                                <div key={i} className='vlozh_div'>
                                    <div>
                                        Наименование оборудования: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.name_oborud}
                                            onChange={(e)=>changer(e,'privod','name_oborud',i)}>
                                        </input>
                                    </div>
                                    <div>
                                        Тип агрегата: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.type_ogregata}
                                            onChange={(e)=>changer(e,'privod','type_ogregata',i)}>
                                        </input>
                                    </div>
                                    <div>
                                        Тип электродвигателя: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.type_engine}
                                            onChange={(e)=>changer(e,'privod','type_engine',i)}>
                                        </input>
                                    </div>
                                    <div>
                                        Заводской номер: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.zavod_number}
                                            onChange={(e)=>changer(e,'privod','zavod_number',i)}>
                                        </input>
                                    </div>
                                    <div>
                                        Паспорт на изделие: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.pasport_na_izdelie}
                                            onChange={(e)=>changer(e,'privod','pasport_na_izdelie',i)}>
                                        </input>
                                    </div>
                                    <div>
                                        Мощность: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.power}
                                            onChange={(e)=>changer(e,'privod','power',i)}>
                                        </input>
                                    </div>
                                    <div>
                                        Частота вращения: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.chastota_vra}
                                            onChange={(e)=>changer(e,'privod','chastota_vra',i)}>
                                        </input>
                                    </div>
                                    <div>
                                        Номинальный ток: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.nominal_tok}
                                            onChange={(e)=>changer(e,'privod','nominal_tok',i)}>
                                        </input>
                                    </div>
                                    <div>
                                        Производительность: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.proizvodit}
                                            onChange={(e)=>changer(e,'privod','proizvodit',i)}>
                                        </input>
                                    </div>
                                    <div>
                                        Вес: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.ves}
                                            onChange={(e)=>changer(e,'privod','ves',i)}>
                                        </input>
                                    </div>
                                    <div>
                                        Год выпуска: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.year_vipusk}
                                            onChange={(e)=>changer(e,'privod','year_vipusk',i)}>
                                        </input>
                                    </div>
                                    <div>
                                        Год ввода в эксплуатацию: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.year_vvoda}
                                            onChange={(e)=>changer(e,'privod','year_vvoda',i)}>
                                        </input>
                                    </div>
                                    <div>
                                        Завод изготовитель: 
                                        <input 
                                            className='input_target1' 
                                            type='text' 
                                            defaultValue={item.zavod_izgotov}
                                            onChange={(e)=>changer(e,'privod','zavod_izgotov',i)}>
                                        </input>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
    
export default StationInArchive;