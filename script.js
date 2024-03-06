
TweenMax.from(".logo",1,{
    opacity:0,
    x:-20,
    ease:Expo.easeInOut
})

TweenMax.from("ul li ",1,{
    opacity:0,
    x:-70,
    ease:Expo.easeInOut
},0.02)

TweenMax.from(".text ",2,{
    opacity:0,
    x:-70,
    ease:Expo.easeInOut
})

TweenMax.from(".content h1 ",2,{
    opacity:0,
    x:-70,
    ease:Expo.easeInOut
})

TweenMax.from(".content button ",3,{
    opacity:0,
    x:-70,
    ease:Expo.easeInOut
})

TweenMax.from(".shape ",2,{
    opacity:0,
    x:-700,
    ease:Expo.easeInOut,
    delay:1
})

TweenMax.from(".image img ",1,{
    opacity:0,
    x:70,
    ease:Expo.easeInOut,
    delay:2
})



let moon = document.querySelector('ul li a ion-icon');
let body = document.querySelector('body');

moon.addEventListener('click',()=>{
    if(moon.getAttribute('name')==='sunny-outline'){
        moon.setAttribute('name','moon-outline');
        body.classList.remove.apply('active');
    }else{
        moon.setAttribute('name','sunny-outline');
        body.classList.add('active');
    }
})