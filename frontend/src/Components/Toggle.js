import '../Styles/toggle.css'
import '../Styles/elPrivodTehSys.css'
export function Toggle({category,obj}) {

/*     const [urls,change_urls] = useReducer((state,url)=>{//урлы картинок
        //console.log(state)
        return [...state,url]
    },[]) */

    //console.log(category,obj)

/*     const getImgs = async()=>{

        for(const file of data.photos_engine_filenames){

            try {
                const response = await fetch('/api/create/getimg',{
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    body:JSON.stringify({name:file})
                })
                const blob = await response.blob()
                //console.log(blob)
                //console.log(arr_filenames_photos)
                const url = URL.createObjectURL(blob)
                //console.log(url)
                //console.log(urls)
                change_urls(url)
            } catch (err) {
                console.log('Ошибка при получении картинок :', err)
            }
            
        }

    } */

/*     if(type === 'photos_engines'){

        return(
            <div className='Toggle'>
                <h2>Фото чертежей двигателей</h2>

                <div>
                    <div>
                        <button onClick={getImgs}>Загрузить все фото</button>
                    </div>
                    <div className='photos_engines_div'>
                        {urls.length === 0 ? 'Нет картинок' : 
                            <ul>
                                {urls.map((url,i)=>{
                                    return(
                                        <li key={i}>
                                            <img alt='paigeimage' src={url}></img>
                                        </li>
                                    )
                                })}
                            </ul>
                        }
                    </div>
                </div>

            </div>
        )
    } */

    console.log(obj,category)
//основная информация//////////////////////////////////////////////////////////////////
    if(category === 'osnova'){
        return(
            <div className='div_osnova'>

                <div>
                    <h1>Технический паспорт</h1>
                    <h3>Технологической системы, электрооборудования и кабелей</h3>
                    <h3>Электроустановки №: {obj.name_object}</h3>
                </div>

                <ul>
                    <li><h3>Основная информация</h3></li>
                    <li><h4>Место расположения: {obj.station}</h4></li>
                    <li><h4>Год постройки: {new Date(obj.date_create).getFullYear()} год</h4></li>
                    <li><h4>Проект: №{obj.project}</h4></li>
                    <li><h4>Дата допуска к эксплуатации: {new Date(obj.date_of_approval).getDay()}.{new Date(obj.date_of_approval).getMonth()}.{new Date(obj.date_of_approval).getFullYear()} год</h4></li>
                    <li><h4>Нормативный срок службы: {obj.standard_service_life} года/лет</h4></li>
                    <li><h4>Инвентарный номер №: {obj.inv_number}</h4></li>
                </ul>

                <ul>
                    <li>
                        <h3>Техническое освидетельствование:</h3>
                            
                        <ul className='ul_teh_osv'>
                            {obj.teh_osvidetelstvovanye.map((item,i)=>{
                                return(
                                    <li key={i}>
                                        <h4>
                                            <p>Дата: {new Date(item.date).getDay()}.{new Date(item.date).getMonth()}.{new Date(item.date).getFullYear()}</p>
                                            <p>Результат: {item.rezultat}</p>
                                        </h4>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>

                </ul>
            </div>
        )
    }
////////////////////////////////////////////////////////////////////////////////////////

//таблица приложений////////////////////////////////////////////////////////////////////
    if(category === 'tablePrilo'){
        return(
            <div>
                <h1>Таблица приложений</h1>
                <div className='tablePrilo'>
                    <table>
                        <tbody>
                            <tr>
                                <td>№ п/п</td>
                                <td>Наименование приложения</td>
                                <td>Документ (проект,схема,протокол,акт и др.)</td>
                                <td>Исполнитель</td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                            </tr>

                            {obj.prilo.map((row,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{row.name_prilo}</td>
                                        <td>{row.document}</td>
                                        <td>{row.user}</td>
                                    </tr>
                                )
                            })}

                            {[1,2,3,4,5,6,7,8,9,10].map((item,i)=>{
                                return(

                                    <tr key={i}>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>  
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

/////////////////////////////////////Электропривод технологической системы
    if(category === 'elPrivodTehSistem'){
        return(
            <div className="wrapp_table">
                <h1>Электропривод технологической системы</h1>
                <table className="table1">
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        )
    }
////////////////////////////////////////////////////////////////////////////////////////

    return(
        <div className='div_osnova'>

                <div>
                    <h1>Технический паспорт</h1>
                    <h3>Технологической системы, электрооборудования и кабелей</h3>
                    <h3>Электроустановки №: {obj.name_object}</h3>
                </div>

                <ul>
                    <li><h3>Основная информация</h3></li>
                    <li><h4>Место расположения: {obj.station}</h4></li>
                    <li><h4>Год постройки: {new Date(obj.date_create).getFullYear()} год</h4></li>
                    <li><h4>Проект: №{obj.project}</h4></li>
                    <li><h4>Дата допуска к эксплуатации: {new Date(obj.date_of_approval).getDay()}.{new Date(obj.date_of_approval).getMonth()}.{new Date(obj.date_of_approval).getFullYear()} год</h4></li>
                    <li><h4>Нормативный срок службы: {obj.standard_service_life} года/лет</h4></li>
                    <li><h4>Инвентарный номер №: {obj.inv_number}</h4></li>
                </ul>

                <ul>
                    <li>
                        <h3>Техническое освидетельствование:</h3>
                            
                        <ul className='ul_teh_osv'>
                            {obj.teh_osvidetelstvovanye.map((item,i)=>{
                                return(
                                    <li key={i}>
                                        <h4>
                                            <p>Дата: {new Date(item.date).getDay()}.{new Date(item.date).getMonth()}.{new Date(item.date).getFullYear()}</p>
                                            <p>Результат: {item.rezultat}</p>
                                        </h4>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>

                </ul>
            </div>
    )

  }
  
  export default Toggle;