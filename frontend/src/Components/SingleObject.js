import { useParams,Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../Styles/SingleObject.css'
import {Toggle} from './Toggle.js'
import {list} from '../scripts/shrink'

export function SingleObject() {

    const {name_object} = useParams()

    const [arr_object,getArrObjects] = useState([])
    const [category,change_category] = useState('')

    useEffect(()=>{
        list()
    })

    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await fetch(`/api/create/get_object${name_object}`,{
                    method:'GET',
                })
                const result = await response.json()
                //console.log(result)
                getArrObjects(result)
            } catch (err) {
                console.log('Ошибка при получении данных :', err)
            }
          }
          fetchData()
    },[name_object])

    if(arr_object.length === 0){
        return(
            <div>Загрузка...</div>
        )
    }

    //console.log(arr_object)

    return (

         <div className='Single_Object_Wrapper'>
             
             <div className='return_home'>
                 <Link to='/'>выйти</Link>
             </div>

             <div className='left_content'>
                 <ul className='wrapp_list' id='wrapp_list'>

                    <li>Технический паспорт
                        <ul>
                            <li onClick={()=>{change_category('osnova')}}>Основная информация</li>
                            <li onClick={()=>{change_category('tablePrilo')}}>Таблица приложений</li>
                            <li onClick={()=>{change_category('elPrivodTehSistem')}}>Электропривод технологической системы</li>
                            <li onClick={()=>{change_category('osnovnoe_el_oborudovanie')}}>Основное электрооборудование</li>
                            <li onClick={()=>{change_category('vspomogatelnoe')}}>Вспомогательное электрооборудование</li>
                            <li onClick={()=>{change_category('kabelnie_linii')}}>Кабельные линии</li>
                            <li onClick={()=>{change_category('svedeniya_o_rem')}}>Сведения о проведенных ремонтах</li>
                            <li onClick={()=>{change_category('avar_remont')}}>Сведения о проведенных аварийных ремонтах</li>
                            <li onClick={()=>{change_category('prov_zazeml')}}>Проверка и осмотр состояния заземляющих проводников</li>
                            <li onClick={()=>{change_category('itogi_osmotra_zaz')}}>Итоги проверки состояния заземляющих проводников </li>
                        </ul>
                    </li>

                    <li>Технические осмотры
                        <ul>
                            <li>ТО помещений</li>
                            <li>Замена смазки электродвигателей</li>
                            <li>Замена чего то еще в чем то</li>
                        </ul>
                    </li>

                 </ul>

             </div>

             <div className='top_content'>
                <h1>{name_object}</h1>
             </div>

             <div className='right_content'>
                <Toggle obj={arr_object} category={category}/>
             </div>

         </div>
    );

  }
  
  export default SingleObject;