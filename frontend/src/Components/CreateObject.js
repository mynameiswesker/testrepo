import { useState } from 'react'
import '../Styles/createObject.css'
import TablePrilo from './TablePrilo'
import {TehOsvid} from './TehOsvid'
import {Link} from 'react-router-dom'
import {Privod} from './Privod'
import {Osnova} from './Osnova'
import {HeaderTehOsv} from './HeaderTehOsv'
import {OsnovnoeElOborud} from './OsnovnoeElOborud'
import {Vspomogatelnoe} from './Vspomogatelnoe'
import {Kabel} from './Kabel'
import {SvedeniyaORemontah} from './SvedeniyaORemontah'
import {AvariiRemont} from './AvariiRemont'
import {ProverkaZazeml} from './ProverkaZazeml'
import {ItogOsmotraZaz} from './ItogOsmotraZaz'

export function CreateObject(){

    const [info_fro_tehOsv,get_tehOsvid] = useState([])//данные с тех освидетельствования [{},{}...]
    const [info_fro_prilo,get_prilo] = useState([])//данные с тех приложений [{},{}...]
    const [info_fro_privod,get_privod] = useState([])//данные с привода [{},{}...]
    const [info_fro_osnova,get_osnova] = useState({})//данные с основы {}
    const [info_fro_haeder_teh_osv,get_header] = useState({})//данные с хедера тех осв {}
    const [osnovnoe_el_oborud,get_osnovnoe_el_oborud] = useState([])//данные с основного эл оборуд [{},{}...]
    const [vspomogatelnoe,get_vspomogatelnoe] = useState([])//данные с основного эл оборуд [{},{}...]
    const [kabel,get_kabel] = useState([])//данные о кабельных линиях [{},{}...]
    const [svedeniya,get_svedeniya] = useState([])//данные о кабельных линиях [{},{}...]
    const [avar_remont,get_avar_remont] = useState([])//данные о аварийных ремонтах [{},{}...]
    const [prov_zazeml,get_prov_zazeml] = useState([])//данные о проверки заземл [{},{}...]
    const [itog_osmotra_zaz,get_itog_osmotra_zaz] = useState([])//данные об итогах проверки заземл [{},{}...]

    const [isCreate,toCreate] = useState(false)//при нажатии на кнопку отправить вывести сообщение 'данные сохранены в бд'

    const send_to_server = async(e)=>{
        e.preventDefault()
        const photos = document.getElementById('photos').files//массив изображений

        const formData = new FormData()

        formData.append('teh_osvidetelstvovanye',JSON.stringify(info_fro_tehOsv))//положил массив из объектов тех освидетельствования *!нет на сервере
        formData.append('info_fro_osnova',JSON.stringify(info_fro_osnova))//положил объект c основными данными
        formData.append('table_prilo',JSON.stringify(info_fro_prilo))//положил массив из объектов таблица приложений
        formData.append('privod',JSON.stringify(info_fro_privod))//положил массив из объектов привод
        formData.append('header',JSON.stringify(info_fro_haeder_teh_osv))//положил объект c хедером тех осв
        formData.append('osnovnoe_el_oborud',JSON.stringify(osnovnoe_el_oborud))//положил объект c хедером тех осв
        formData.append('vspomogatelnoe',JSON.stringify(vspomogatelnoe))//положил объект c хедером тех осв
        formData.append('kabel',JSON.stringify(kabel))//положил массив из {} для кабельных линий
        formData.append('svedeniya',JSON.stringify(svedeniya))//положил массив из {} для сведения о ремонтах
        formData.append('avar_remont',JSON.stringify(avar_remont))//положил массив из {} для аварийных ремонтах
        formData.append('prov_zazeml',JSON.stringify(prov_zazeml))//положил массив из {} для аварийных ремонтах
        formData.append('itog_osmotra_zaz',JSON.stringify(itog_osmotra_zaz))//положил массив из {} для аварийных ремонтах

        for (let i = 0; i < photos.length; i++) {
            formData.append('photos', photos[i]);//положили каждую картинку в формдата в ячейку photos
          }

        try {
            const response = await fetch('/api/create/array',{
                method:'POST',
                body:formData
            })
            const result = await response.json()
            console.log(result)
            toCreate(true)
        } catch (err) {
            console.log('Ошибка при получении данных :', err)
        }  
    }

    return(
    <>
        {isCreate ? 
            <div className='message_created'>
                <h3>Данные сохранены с базе</h3>
                <p>
                    <button onClick={()=>toCreate(false)}>Ок</button>
                </p>
            </div>
        :''} 
        
        <div className='create_object'>
            <h1>Создать объект</h1>
            <form>

                <fieldset>
                    <legend>Основная информация</legend>
                    <Osnova handle={(x)=>{get_osnova(x)}}/>
                </fieldset>

                <fieldset>
                    <legend>Технический паспорт </legend>
                    <HeaderTehOsv handle={(x)=>{get_header(x)}}/>

                    <div className='wrapp_teh_pasport'>
                        <h3>Техническое освидетельствование</h3>                        
                        <TehOsvid handle={(x)=>{get_tehOsvid(x)}}/>

                        <h3>Таблица приложений</h3>
                        <TablePrilo handle={(x)=>{get_prilo(x)}}/>

                        <h3>Электропривод технологической системы</h3>
                        <Privod handle={(x)=>{get_privod(x)}}/>

                        <h3>Основное электрооборудование</h3>
                        <OsnovnoeElOborud handle={(x)=>{get_osnovnoe_el_oborud(x)}}/>

                        <h3>Вспомогательное электрооборудование</h3>
                        <Vspomogatelnoe handle={(x)=>{get_vspomogatelnoe(x)}}/>

                        <h3>Кабельные линии</h3>
                        <Kabel handle={(x)=>{get_kabel(x)}}/>

                        <h3>Сведения о проведенных текущих, капитальных ремонтах, реконструкции и модернизации</h3>
                        <SvedeniyaORemontah handle={(x)=>{get_svedeniya(x)}}/>

                        <h3>Сведения о проведенных аварийных ремонтах</h3>
                        <AvariiRemont handle={(x)=>{get_avar_remont(x)}}/>

                        <h3>Проверка и осмотр открыто проложенных заземляющих проводников</h3>
                        <ProverkaZazeml handle={(x)=>{get_prov_zazeml(x)}}/>

                        <h3>Итоги проверки(осмотра) состояния открыто проложенных заземляющих проводников</h3>
                        <ItogOsmotraZaz handle={(x)=>{get_itog_osmotra_zaz(x)}}/>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Фото чертежей двигателей</legend>

                    <p className='photo_ingines'>
                        <input type="file" name="photos_of_blueprints" multiple id='photos'></input>
                    </p>
                </fieldset>

                <p className='p_btn_send'>
                    <input type="submit" onClick={send_to_server}></input>
                </p>
                
            </form>
            
        </div>
        <Link to='/auth' className='exit_create'>выход</Link>
    </>
    )
}

export default CreateObject;