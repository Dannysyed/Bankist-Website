///event hadler
let nav=document.querySelector('.nav')
let section_1=document.querySelector('#section--1')
let section=document.querySelectorAll('.section')
let header=document.querySelector('.header')

///nav handler
nav.addEventListener('mouseover',function(e)
{
    // console.log(e.target);
    if(e.target.classList.contains('nav__link'))
    {
        console.log(e.target);
        let click=e.target;
        // click.style.opacity=0.5;
        let siblings=click.closest('.nav').querySelectorAll('.nav__link')
        console.log(siblings);
        siblings.forEach(val=> {
            if(val!=click)
            {
                val.style.opacity=0.1;
            }
        });

    }

})
nav.addEventListener('mouseout',function(e)
{
    // console.log(e.target);
    if(e.target.classList.contains('nav__link'))
    {
        console.log(e.target);
        let click=e.target;
        // click.style.opacity=0.5;
        let siblings=click.closest('.nav').querySelectorAll('.nav__link')
        console.log(siblings);
        siblings.forEach(val=> {
            if(val!==click)
            {
                val.style.opacity=1;
            }
        });

    }

})
let rectbond=nav.getBoundingClientRect()
//sticky tab on observation
let callback=function(enteries)
{
    let [entry]=enteries
    // console.log(entry);
    if(entry.isIntersecting==false)
    {
    nav.classList.add('sticky')       
    }
        else
        {
    nav.classList.remove('sticky')
 }

}
let obj={
    root:null,
    threshold:0,
    rootMargin:`-${rectbond.height}px`,
}
let observation=new IntersectionObserver(callback,obj)
// section.forEach(val=>
//     {
//         observation.observe(val)
//     })
observation.observe(header)

// console.log(rectbond);

////opetations active
let operation=document.querySelector('.operations')
let operations__tab=document.querySelectorAll('.operations__tab')
let operations__content=document.querySelectorAll('.operations__content')
operation.addEventListener('click',function(e)
{
    // console.log(e.target);
    if(e.target.classList.contains('operations__tab'))
    {
        let click=e.target
        // console.log(click);
        operations__tab.forEach(val=>
            {
                val.classList.remove('operations__tab--active')
            })
        click.classList.add('operations__tab--active')
        operations__content.forEach(val=>
            {
                val.classList.remove('operations__content--active')
            })
            let{dat}=click.dataset;
            console.log(click.dataset   );

        document.querySelector(`.operations__content--${click.dataset.tab}`).classList.add('operations__content--active')
    }
})

////smooth scrooling
// let href=document.querySelector('href')
let links=document.querySelector('.nav__links')
// console.log(links);
links.addEventListener('click',function(e)
{
    e.preventDefault()
   if(e.target.classList.contains('nav__link'))
   {
    //    console.log('hello');
       let id=e.target.getAttribute('href')
    //    document.querySelector(id).scrollIntoView({behavior:'smooth'})
       document.querySelector(id).scrollIntoView({behavior:'smooth'})
   }

})
//OBESERVER ON IMAGES
let img=document.querySelectorAll('img')
let lazy=document.querySelector('.lazy-img')
let feat=document.querySelectorAll('.features__img')
console.log(img);
//function
let img_function=function(enteries)
{
let[entry]=enteries
console.log(entry);
if(entry.isIntersecting==true)
{
    entry.target.src=entry.target.dataset.src   
   feat.forEach(val=>
    {
        val.classList.remove('lazy-img')
    })

}
}
let img_obj={
    root:null,
    threshold:0,
}
let img_observe=new IntersectionObserver(img_function,img_obj)
// img_observe.observe(feat)
feat.forEach(val=>
    {

     img_observe.observe(val)  
    })

////////TODO:MODAL HIDDEN
let show=document.querySelectorAll('.btn--show-modal')
let modal=document.querySelector('.modal')
let overlay=document.querySelector('.overlay')
let btn=document.querySelector('.btn--close-modal')
show.forEach(val=>
    {
        val.addEventListener('click',function()
{
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
  console.log('hello');
})
    })
btn.addEventListener('click',function()
{
    modal.classList.add('hidden')
  overlay.classList.add('hidden')

})
///slider
let slider=document.querySelector('.slider')
let slide=document.querySelectorAll('.slide')
let left=document.querySelector('.slider__btn--left')
let right=document.querySelector('.slider__btn--right')
////
// slider.style.transform='scale(0.2)'
// slider.style.overflow='visible'
// slider.style.overflow='visible'
let gotos=function(no)
{
    slide.forEach((val,i)=>
    {
        val.style.transform=`translateX(${100*(i-no)}%)`
    })
}
gotos(0)

let max=slide.length
let count=0
let next=function()
{
    if(count==max-1)
    {
        count=0
    }
    else
    {
        count++
    }

    slide.forEach((val,i)=>
    {
        val.style.transform=`translateX(${100*(i-count)}%)`
    })
    active_dot(count)
    
}
let prev=function()
{
    if(count==0)
    {
        count=max-1
    }
    else
    {
        count--
    }
    slide.forEach((val,i)=>
    {
        val.style.transform=`translateX(${100*(i-count)}%)`
    })
    active_dot(count)

}
right.addEventListener('click',next)
left.addEventListener('click',prev)

///adding buttons
let dot=document.querySelector('.dots')
slide.forEach((_,i)=>
    {
       dot.insertAdjacentHTML('afterbegin',`<button class=dots__dot data-set=${i}></button>`)
        
    })
//active dot
let active=function(e)
{
    dot.addEventListener('click',function(e)
    {
        // console.log(e.target);
        let click=e.target
        if(click.classList.contains('dots__dot'))
        {
           console.log(click.dataset);
           console.log(click);
           gotos(click.dataset.set)
           active_dot(click.dataset.set)

        }

    })
}   
active()
/// activedots
let dots_dot=document.querySelectorAll('.dots__dot')
console.log(dots_dot);
let active_dot=function(number)
{
    dots_dot.forEach(val=>
        val.classList.remove('dots__dot--active'))
        document.querySelector(`.dots__dot[data-set="${number}"]`).classList.add('dots__dot--active')
}
///keyboard keys
document.addEventListener('keydown',function(e)
{
    console.log(e);
    if(e.key=='ArrowRight')
    {
     next()
    }
})
///learn more
let btni=document.querySelector('.btn--scroll-to')
btni.addEventListener('click',function()
{
section_1.scrollIntoView({behavior:'smooth'})

})