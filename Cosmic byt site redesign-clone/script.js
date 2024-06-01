let acc = document.getElementById('account')
acc.addEventListener('click',()=>{
    window.location.href='../myaccount.html'
})

let a = 0
let cart=document.querySelectorAll('.addtocart')
cart.forEach(cart=>{

cart.addEventListener("click",()=>{
    
    if( cart.innerText.trim()==="ADD TO CART"){
    cart.innerText="REMOVE FROM CART";
    a++;
    let cartcount = document.querySelector(".cartcount")
    cartcount.innerHTML=a;
    console.log(cart.innerText)
    }
    else if("REMOVE FROM CART"===cart.innerText.trim()){
        a--;
        console.log(a);
        cart.innerText="ADD TO CART";
        let cartcount = document.querySelector(".cartcount")
        cartcount.innerHTML=a;
    }
})
})




let btn = document.querySelectorAll(".shop-btn")
btn.forEach(function(btn,index){
    if(index===0){
    btn.addEventListener("click",()=>{
        window.location.href='../product-headphone.html'
    })
    }
    else if(index===1){
        btn.addEventListener("click",()=>{
            window.location.href='../product-keyboard.html'
        })
    }else if(index===2){
        btn.addEventListener("click",()=>{
            window.location.href='../product-mouse.html'
        })
    }
})

window.onscroll = function() {myFunction()};
function myFunction() {
    if(window.scrollY===0){
    document.querySelector(".logo-img").style.transform = "scale(1)"
    }
    else{
        document.querySelector(".logo-img").style.transform = "scale(0.5)"
    
    }
}



const details = document.querySelector('.drop-down-menu')

const summary = document.querySelector('.content-drop-down')
const list = document.querySelector('.menu-nav')
summary.addEventListener('mouseenter',()=>{
    details.setAttribute('open','')
})
summary.addEventListener('mouseleave',()=>{
    details.removeAttribute('open')
})
list.addEventListener('mouseenter',()=>{
    details.setAttribute('open','')
})
list.addEventListener('mouseleave',()=>{
    details.removeAttribute('open')
})


const home=document.querySelector('.content.home')
home.addEventListener('click',()=>{
    window.location.href='../index.html'
})
