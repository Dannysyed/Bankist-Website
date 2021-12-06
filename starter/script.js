'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header=document.querySelector('.header')
let btnscroll=document.querySelector('.btn--scroll-to')
let section=document.querySelector('#section--1')

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(val=>
  val.addEventListener('click',openModal)
  )

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown',function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });
// let diva=document.createElement('div')
// diva.classList.add('cookie')
// diva.innerHTML= 'do u wanna acccept the cookie frim browsere <button>buuton</button>'
// header.prepend(diva)
// // PROJECT
// SMOOTH SCORLL
btnscroll.addEventListener('click',function(e)
{
  let getcoor=section.getBoundingClientRect();
  console.log(getcoor);
  console.log(e.target.getBoundingClientRect());
  console.log('x/y',window.pageXOffset,window.pageYOffset);
  // window.scrollTo({
  //   left:getcoor.left+window.pageXOffset,
  //   top:getcoor.top+window.pageYOffset,
  //   behavior:'smooth',})
    section2.scrollIntoView({behavior:'smooth'})
})
//navigation
// let navi=document.querySelector('.nav')
let nav=document.querySelector('.nav__links');
nav.addEventListener('click',function(e)
{
  e.preventDefault()
  console.log(e.target);
  if(e.target.classList.contains('nav__link'))
  {
    console.log('libk');
    let id=e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior:'smooth'})

  }
})
// let section2=document.querySelector('#section--2')
// nav.forEach(val=>
//   val.addEventListener('click',function(e)
//   {
//     e.preventDefault()
//     let id=this.getAttribute('href')
//     document.querySelector(id).scrollIntoView({behavior:'smooth'})
//   }))

//operatoion on tab
let tab=document.querySelectorAll('.operations__tab')
let tab_menu=document.querySelector('.operations__tab-container')
let opt=document.querySelectorAll('.operations__content')
tab_menu.addEventListener('click',function(e)
{
  const clicked=e.target.closest('.operations__tab'); 
  console.log(clicked);
 
 
  tab.forEach(val=>
    val.classList.remove('operations__tab--active'))
    if(clicked)
  clicked.classList.add('operations__tab--active')
  opt.forEach(val=>
    val.classList.remove('operations__content--active'))
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})
///navbar
let navi=document.querySelector('.nav')

let hover=function(e)
{
  // console.log(this);
  if(e.target.classList.contains('nav__link'))
  { let click=e.target;
   let siblings=click.closest('.nav').querySelectorAll('.nav__link')
   console.log(siblings);
   let logo=click.closest('.nav').querySelector('img')
   logo.style.opacity=this
   siblings.forEach(va=>{
     if(va!==click) va.style.opacity=this

 })  }
}
navi.addEventListener('mouseover',hover.bind(0.5))
navi.addEventListener('mouseout',hover.bind(1))
// sticky
// let section_cor=section.getBoundingClientRect()
// console.log(section_cor);
// window.addEventListener('scroll',function()
// {
// if(window.scrollY>section_cor.top)
// {
//   navi.classList.add('sticky')
// }
// else
// navi.classList.remove('sticky')
// })


// //TODO:observation api
// let headers=document.querySelector('.header')
// let obscallback=function(entries)
// {
//   entries.forEach(ent=>
//     {
//       console.log(ent);
//     })
//     if(entries.isIntersecting==false)
//     navi.classList.add('sticky')
//     else
//     navi.classList.remove('sticky')

// }
// let obsOptions={
//   root:document,
//   threshold:0,
// }
// const obs= new IntersectionObserver(obscallback,obsOptions)
// obs.observe(headers)
////
let headers=document.querySelector('.header')
let navgetbond=navi.getBoundingClientRect()
let sections=document.querySelectorAll('.section')
console.log(navgetbond);
let func= function(entries)
{
let [entry]=entries
if(!entry.isIntersecting)
{
  navi.classList.add('sticky')
  // sections.classList.remove('section--hidden')
}
else
{
  navi.classList.remove('sticky')
  // sections.classList.add('section--hidden')

}
}
let obj={
  root:null,
  threshold:0,
  rootMargin:`-${navgetbond.height}px`
}
let obser=new IntersectionObserver(func,obj)
obser.observe(headers)

//////// TODO: section visibilty

let callback=function(entries)
{
let [entry]=entries;
// console.log(entry);
if(entry.isIntersecting)
entry.target.classList.remove('section--hidden')
else
entry.target.classList.add('section--hidden');

// observer.unobserve(entry.target)


}
let obje={
  root:null,
  threshold:0.1
}
let observer= new IntersectionObserver(callback,obje)
sections.forEach(section=>{
  observer.observe(section)
  // section.classList.add('section--hidden')
}
  )
  //// lazy loading
  let images=document.querySelectorAll('img[data-src]')
  let funcc=function(entries)
  {
     let[entry]=entries
     console.log(entry);
     if(entry.isIntersecting)
     {
       entry.target.src=entry.target.dataset.src
       entry.target.classList.remove('lazy-img')
     }
  }
  let obe={
    root:null,
    threshold:0.1

  }
  let imgobserv=new IntersectionObserver(funcc,obe)
  images.forEach(obs=>imgobserv.observe(obs))
  ///IMAGES SLIDER

  let slide=document.querySelectorAll('.slide')
  let slider=document.querySelector('.slider')
  let left=document.querySelector('.slider__btn--left')
  let right=document.querySelector('.slider__btn--right')
  // slider.style.overflow='visible'
  let maxi=slide.length
  // slider.style.overflow='visible'
  // slider.style.transform='scale(0.2)'

  let gotos=function(slides)
  {
    slide.forEach((val,i)=>
    {
      val.style.transform=`translateX(${100*(i-slides)}%)`
    })
  }
  // slide.forEach((val,i)=>
  //   {
  //     val.style.transform=`translateX(${100*i}%)`
  //   })
  gotos(0)
  
let countslid=0
let nextslide=function()
{
  if(countslid==maxi-1)
  {
    countslid=0
  }
  else
  {
    countslid++
  }
  
gotos(countslid)
active_dot(countslid)
   
}
//
let prevslide=function()
{
  if(countslid==0)
  {
    countslid=maxi-1
  }
  else
  {
    countslid--
  }
  
gotos(countslid)  
active_dot(countslid)
}
right.addEventListener('click',nextslide)
left.addEventListener('click',prevslide)
///button



let dot=document.querySelector('.dots')
let dots= function(e)
{
slide.forEach((val,i)=>
{
  dot.insertAdjacentHTML('afterbegin',`<button class=dots__dot data-tab=${i}></button>`)



})
}
dots() 
///active
let active_dot=function(slide)
{
  document.querySelectorAll('.dots__dot').forEach(val=>
    {
      val.classList.remove('dots__dot--active')
    })
   document
   .querySelector(`.dots__dot[data-tab="${slide}"]`)
   .classList.add('dots__dot--active')

}

active_dot(0)

////function
dot.addEventListener('click',function(e)
{
  // console.log(e.target);
  if(e.target.classList.contains('dots__dot'))
  {
    let slides=e.target.dataset.tab
    gotos(slides)
    active_dot(slides)
  }
  // let click=e.target.closest('.dots__dot')
  // console.log(click);
})
// intersecting observer on foot 
let foot=document.querySelector('.footer')
let calle=function(e)
{

  let [en]=e
  console.log(en);
  if(en.isIntersecting==true)
  {
    document.addEventListener('keydown',function(e)
    {
      console.log(e);
      if(e.key=='ArrowRight')
      {
        nextslide()
      }
      if(e.key=='ArrowLeft')
      {
        prevslide()
      }
    
    })
  }
  else{
    // foot_ob.unobserve(foot)
  }
}
let ob={
  root:null,
  threshold:0.25

}
let foot_ob=new IntersectionObserver(calle,ob)
foot_ob.observe(foot)
//
document.addEventListener('DOMContentLoaded',function(e)
{
  console.log('hello is the world',e);
})
window.addEventListener('load',function(e)
{
  console.log('helloasdad is the world',e);
})
// window.addEventListener('beforeunload',function(e)
// {
//   e.preventDefault()
//   console.log(e);
//   e.returnValue='';
// })


















//////
/////prac
// let cook=document.querySelector('.cookie')
// let section2=document.querySelector('#section--2')
// cook.addEventListener('click',function()
// {
//   this.style.color=random_col()
//   let coor=section2.getBoundingClientRect()
//   window.scrollTo({
//     left:coor.left,
//     top:coor.right,
//     behavior:'smooth'
//   }
// )
// })
// learnign event handleer
// rgb(255,255,255)
// let random_num=(max,min)=>Math.trunc((Math.random()*(max-min+1)+min))
// console.log(random_num(0,255));
// let random_col=()=>`rgb(${random_num(0,255)},${random_num(0,255)},${random_num(0,255)})`; 
// random_col()
// //dom traveersing
// let h1=document.querySelector('h1')

// let node=h1.querySelectorAll('.highlight')

// console.log(node);
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color='white'
// console.log(h1.firstChild);
// //parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.color='red'
//

// let maxi=slide.length
// slider.style.transform='scale(0.3)'
// slider.style.overflow='visible'
// slide.forEach((a,i)=>
// {
//   a.style.transform=`translateX(${100*i}%)`
// })
// let curSlide=0;
// right.addEventListener('click',function()
// {
//   if(curSlide==maxi-1)
//   curSlide=0
//   else{
//     curSlide++
//   }
//   slide.forEach((a,i)=>
// {
//   a.style.transform=`translateX(${100*(i-curSlide)}%)`
// })
  
// })

