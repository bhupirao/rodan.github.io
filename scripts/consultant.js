import { container,navbar,navbar1,footer,footer2 } from "../components/navbar.js";
document.getElementById("container").innerHTML=container();
document.getElementById("navbar").innerHTML= navbar()
document.getElementById("navbar1").innerHTML=navbar1()
document.getElementById("footer").innerHTML=footer();
document.getElementById("footer2").innerHTML=footer2();



document.getElementById("signUp").addEventListener("click",()=>{
    event.preventDefault()
    let sign= document.getElementById("form")
    if(sign.style.display=="block"){
        sign.style.display="none"
    }else{
        sign.style.display="block"
    }
})


document.getElementById("shop").addEventListener("mouseover",()=>{
    event.preventDefault()
    let shop= document.getElementById("showF")
  
        shop.style.display="block"
    
})
document.getElementById("shop").addEventListener("mouseout",()=>{
    event.preventDefault()
    let shop= document.getElementById("showF")
    
        shop.style.display="none"
    
})


document.getElementById("featured").addEventListener("mouseover",()=>{
    event.preventDefault()
    let feat= document.getElementById("infeat")
        feat.style.display="block"
})
document.getElementById("featured").addEventListener("mouseout",()=>{
    event.preventDefault()
    let feat= document.getElementById("infeat")
    
        feat.style.display="none"
})
document.getElementById("story").addEventListener("mouseover",()=>{
    event.preventDefault()
    let feat= document.getElementById("instory")
  
        feat.style.display="block"
    
})
document.getElementById("story").addEventListener("mouseout",()=>{
    event.preventDefault()
    let feat= document.getElementById("instory")
        feat.style.display="none"
        
   
})
