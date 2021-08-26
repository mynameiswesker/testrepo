import '../Styles/toggle.css'
import '../Styles/elPrivodTehSys.css'
import '../Styles/tableOsnovElObor.css'
import '../Styles/tableVspomogatelnoe.css'
import '../Styles/tableKabel.css'

const Empty13 = ()=>{
    return(
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )
}

const Empty4 = ()=>{
    return(
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )
}

const Empty5 = ()=>{
    return(
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )
}

const Empty6 = ()=>{
    return(
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )
}

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
                <table className="table2">
                    <tbody>
                        <tr>
                            <td colSpan={1} rowSpan={2} className='rotate_text_table firstElem'>Наименование оборудования (назначение), тип соединения с ЭД</td>
                            <td colSpan={1} rowSpan={2} className='rotate_text_table'>Тип агрегата (насос,вентилятор)</td>
                            <td colSpan={1} rowSpan={2} className='rotate_text_table'>Тип электродвигателя</td>
                            <td colSpan={1} rowSpan={2} className='rotate_text_table'>Заводской номер</td>
                            <td colSpan={1} rowSpan={2} className='rotate_text_table'>Паспорт на изделие (№)</td>
                            <td colSpan={5}>Основные характеристики оборудования</td>
                            <td colSpan={1} rowSpan={2} className='rotate_text_table'>Год выпуска</td>
                            <td colSpan={1} rowSpan={2} className='rotate_text_table'>Год ввода в эксплуатацию</td>
                            <td colSpan={1} rowSpan={2} className='rotate_text_table'>Завод изготовитель</td>
                        </tr>

                        <tr>{/* Ячейка для вложенной таблички */}
                            <td className='rotate_text_table'>Мощность</td>
                            <td className='rotate_text_table'>Частота вращения (об/мин)</td>
                            <td className='rotate_text_table'>Номинальный ток (А)</td>
                            <td className='rotate_text_table elemHeight'>Производительность, подача (м<sup>3</sup>/час)</td>
                            <td className='rotate_text_table'>Вес</td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                        </tr>

                        {obj.privod.map((item,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{item.name_oborud}</td>
                                    <td>{item.type_ogregata}</td>
                                    <td>{item.type_engine}</td>
                                    <td>{item.zavod_number}</td>
                                    <td>{item.pasport_na_izdelie}</td>
                                    <td>{item.power}</td>
                                    <td>{item.chastota_vra}</td>
                                    <td>{item.nominal_tok}</td>
                                    <td>{item.proizvodit}</td>
                                    <td>{item.ves}</td>
                                    <td>{new Date(item.year_vipusk).getFullYear()}</td>
                                    <td>{new Date(item.year_vvoda).getFullYear()}</td>
                                    <td>{item.zavod_izgotov}</td>
                                </tr>
                            )
                        })}

                        {/* пустые ячейки */}
                        {[1,2,3,4,5,6,7,8,9,10].map((item,i)=>{
                                return(
                                    <Empty13  key={i}/>
                                )
                            })}

                    </tbody>
                </table>
            </div>
        )
    }
////////////////////////////////////////////////////////////////////////////////////////

//////////////////Основное электрооборудование 
    if(category === 'osnovnoe_el_oborudovanie'){
        return(

        <div className='osnovnoe_el_oborud'>
            <h1>Основное электрооборудование</h1>
            <div className='table3'>
                <table>
                    <tbody>

                        <tr>
                            <td>Назначение и состав основного электрооборудования</td>
                            <td>Тип, завод изготовитель</td>
                            <td>Технический паспорт (№)</td>
                            <td>Год ввода в эксплуатацию</td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>

                        {obj.osnovnoe_el_oborud.map((item,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{item.naznachenie}</td>
                                    <td>{item.type}</td>
                                    <td>{item.teh_pasport}</td>
                                    <td>{new Date(item.year_vipusk).getFullYear()}</td>
                                </tr>
                            )
                        })}

                        {[1,2,3,4,5,6,7,8,9,10].map((item,i)=>{
                            return(
                                <Empty4 key={i}/>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
        
        )
    }
//////////////////////////////////////////////

/////////////////Вспомогательное оборудование/////////////////////

if(category === 'vspomogatelnoe'){
    return(

    <div className='osnovnoe_el_oborud'>
        <h1>Назначение и состав основного электрооборудования</h1>
        <div className='table4'>
            <table>
                <tbody>

                    <tr>
                        <td>Назначение и состав основного электрооборудования</td>
                        <td>Тип, завод изготовитель</td>
                        <td>Технический паспорт (№)</td>
                        <td>Год ввода в эксплуатацию</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>

                    {obj.vspomogatelnoe.map((item,i)=>{
                        return(
                            <tr key={i}>
                                <td>{item.naznachenie}</td>
                                <td>{item.type}</td>
                                <td>{item.teh_pasport}</td>
                                <td>{new Date(item.year_vipusk).getFullYear()}</td>
                            </tr>
                        )
                    })}

                    {[1,2,3,4,5,6,7,8,9,10].map((item,i)=>{
                        return(
                            <Empty4 key={i}/>
                        )
                    })}

                </tbody>
            </table>
        </div>
    </div>
    
    )
}

//////////////////////////////////////////////////////////////////

/////////////////Кабельные линии//////////////////////////////////

if(category === 'kabelnie_linii'){
    return(

    <div className='osnovnoe_el_oborud'>{/* Не поменял класс */}
        <h1>Кабельные линии</h1>
        <div className='table5'>
            <table>
                <tbody>

                    <tr>
                        <td>Назначение, номер, наименование кабеля (силовых, управления, сигнализация)</td>
                        <td>Дата монтажа</td>
                        <td>Марка кабеля (число жил, сечение)</td>
                        <td>Напряжение (U)</td>
                        <td>Длина (м)</td>
                        <td>Дата проверки</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                    </tr>

                    {obj.kabel.map((item,i)=>{
                        return(
                            <tr key={i}>
                                <td>{item.naznachenie}</td>
                                <td>{new Date(item.date_montazh).getFullYear()}</td>
                                <td>{item.marka}</td>
                                <td>{item.napr}</td>
                                <td>{item.dlina}</td>
                                <td>{new Date(item.date_proverki).getFullYear()}</td>
                            </tr>
                        )
                    })}

                    {[1,2,3,4,5,6,7,8,9,10].map((item,i)=>{
                        return(
                            <Empty6 key={i}/>
                        )
                    })}

                </tbody>
            </table>
        </div>
    </div>
    
    )
}

//////////////////////////////////////////////////////////////////

/////////////////Сведения о проведенных ремонтах//////////////////////////////////

if(category === 'svedeniya_o_rem'){
    return(

    <div className='osnovnoe_el_oborud'>{/* Не поменял класс */}
        <h1>Сведения о проведенных текущих, капитальных ремонтах, реконструкции и модернизации</h1>
        <div className='table5'>
            <table>
                <tbody>

                    <tr>
                        <td>Дата поступления в ремонт</td>
                        <td>Вид ремонта</td>
                        <td>Производитель ремонта</td>
                        <td>Дата окончания ремонта</td>
                        <td>Подпись ответственного за ремонт</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>

                    {obj.svedeniya.map((item,i)=>{
                        return(
                            <tr key={i}>
                                <td>{new Date(item.date_start).getFullYear()}</td>
                                <td>{item.type}</td>
                                <td>{item.person}</td>
                                <td>{new Date(item.date_end).getFullYear()}</td>
                                <td>{item.otvetstv}</td>
                            </tr>
                        )
                    })}

                    {[1,2,3,4,5,6,7,8,9,10].map((item,i)=>{
                        return(
                            <Empty5 key={i}/>
                        )
                    })}

                </tbody>
            </table>
        </div>
    </div>
    
    )
}

//////////////////////////////////////////////////////////////////

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