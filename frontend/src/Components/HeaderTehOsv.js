import { useState } from "react";

export function HeaderTehOsv(props){

    const {handle} = props;

    const [state,change_state] = useState({
        
    })

    const changer = (e)=>{
        change_state({...state,[e.target.name]:e.target.value})
        handle(state)
    }

    return(
        <div className='div_teh_osv'>
            <p>
                <label>Год постройки </label>
                <input 
                    name='date_create' 
                    type='datetime-local' 
                    onChange={(e)=>changer(e)}
                    >
                </input>
            </p>

            <p>
                <label>Проект </label>
                <input 
                    name='project' 
                    type='text' 
                    onChange={(e)=>changer(e)}
                    >                           
                </input>
            </p>

            <p>
                <label>Дата допуска к эксплуатации </label>
                <input 
                    name='date_of_approval' 
                    type='datetime-local' 
                    onChange={(e)=>changer(e)}
                    >                           
                </input>
            </p>

            <p>
                <label>Нормативный срок службы </label>
                <input 
                    name='standard_service_life' 
                    type='number' 
                    placeholder='20 (лет)' 
                    onChange={(e)=>changer(e)}
                    >                            
                </input>
            </p>

            <p>
                <label>Инвентарный номер </label>
                <input 
                    name='inv_number' 
                    type='text' 
                    onChange={(e)=>changer(e)}
                    >                              
                </input>
            </p>                        
        </div>
    )
}

export default HeaderTehOsv;