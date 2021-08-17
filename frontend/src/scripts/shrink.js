
export const list = ()=>{
    let list = document.getElementById('wrapp_list')//левое меню ul

        if(list){
            const list_of_li = list.querySelectorAll('li')//все элементы li левого меню
            const list_of_ul = list.querySelectorAll('ul')//все элементы ul левого меню
    
            //оборачиваем все внутренние теги в спан
            for(let li of list_of_li){
                //console.log(li.firstChild.tagName)
                if(li.firstChild.tagName === 'SPAN') return//если уже есть спаны то выйти из функции не создавать
                let span = document.createElement('span')
                span.classList.add('show')
                li.prepend(span)//внутри тега li в начале вставить span
                span.append(span.nextSibling)//добавить тег спан после текста внутри span
            }
    
            //по дефолту вложенные в ul span's должны быть скрытыми :
            for(let ul of list_of_ul){
                let lis = ul.childNodes
    
                for(let li of lis){
                    let spans = li.querySelectorAll('span')
                    
                    for(let span of spans){
                        span.classList.add('hide')
                    }
                }
            }
    
            //т.к li все равно имеют height 2px несмотря на все попытки сделать их = 0 :
            let spans = list.querySelectorAll('span')
            //console.log(spans)
            for(let span of spans){
                if(span.classList.value.includes('hide')){
                    span.parentNode.classList.add('height_li')
                    span.parentNode.classList.add('zero_height_li')
                }
            }
    
            list.onclick = e =>{
                if(e.target.tagName !== 'SPAN') return//если клик не попал на span ничего не делать
    
                let mini_list = e.target.parentNode.querySelectorAll('ul')
    
                if(mini_list.length === 0) return//клик проходит только на названиях узлов вложенных списков (категории)
    
                let vlozhenie = mini_list[0]
                let childs_vlozhenie = vlozhenie.childNodes
    
                for(let child_vlozhenue of childs_vlozhenie){
                    let span = child_vlozhenue.firstChild//первый потомок узла в dom элементе ul всегда span
                    span.classList.toggle('hide')
    
                    span.parentNode.classList.toggle('zero_height_li')//при клике задать высоту li элементам
                }
            }
    
            //найти корневые спаны (узлы) (после них всегда ul) и добавить им стрелку
            let uzelSpan = list.querySelectorAll('span')
            for(let span of uzelSpan){
    
                if(span.nextSibling){//если следующий элемент есть (а если и есть то только ul иначе null)
                    //console.log(span)
                    let div = document.createElement('div')
                    div.classList.add('arrow')
                    span.append(div)
    
                    span.onclick=(e)=>{//добавляем вращение стрелке по клику
                        //span.classList.toggle('rotate')
    
                        if(e.target.tagName !== 'SPAN') return//если клик не на спане то иди на***
    
                        let divs = span.querySelectorAll('div')
                        for(let div of divs){
                            div.classList.toggle('rotate')
                        }
                    }
                }
            }
    
            //Добавить отступы первым li в списке
            for(let li of list.childNodes){
                li.classList.add('addMargin')
            }
        }
}

export default list