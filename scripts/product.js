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
let data= JSON.parse(localStorage.getItem("cart")) || [];

let url='https://rodan-fields.herokuapp.com/api/Product'

let search =async()=>{
    let res=await fetch(url)
    let data=await res.json()
    append(data)
}

search()

let append=(data)=>{
    
    data.forEach((el)=>{
        let show=document.getElementById("appendProduct")

        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.Image
        img.setAttribute("id","imgP")
        let best=document.createElement("p")
        best.innerText=el.Best
        let name=document.createElement("p")
        name.innerText=el.Name
        let desc=document.createElement("p")
        desc.innerText=el.Desc
        let price=document.createElement("p")
        price.innerText=el.Price
        let btn=document.createElement("button")
        btn.innerText=el.Button;
        btn.setAttribute("id","btn1")
        btn.addEventListener("click",()=>{
            addCart(el)
        })

        div.append(img,best,name,desc,price,btn)
        show.append(div)


    })
}
function addCart(el){

    data.push(el);
    localStorage.setItem("cart",JSON.stringify(data));
}


