let burger = document.querySelector(".burger");
burger.addEventListener("click",start);
let menu = document.querySelector("nav ul");

function start(){
    burger.classList.toggle("active");
    menu.classList.toggle("show");
}

let header = document.querySelector("header");
let body = document.querySelector("body");
let article = document.querySelectorAll("article");
let h1 = document.querySelectorAll("h1");
let h2 = document.querySelectorAll("h2");
let h3 = document.querySelectorAll("h3");
let h4 = document.querySelectorAll("h4");
let p = document.querySelectorAll("p");
let li = document.querySelectorAll("li");
let dark_theme = document.querySelector(".Theme");
dark_theme.addEventListener("click",change_theme);

let condition = false;

function change_theme(){
    if(condition == false){
        body.style.backgroundColor = "#000080";
        article.forEach((f)=>{
            f.style.backgroundColor = "#2A2F4D";
        })
        h1.forEach((e)=>{
            e.style.color = "white";
        })
        h2.forEach((i)=>{
            i.style.color = "white";
        })
        h3.forEach((a)=>{
            a.style.color = "white";
        })
        h4.forEach((b)=>{
            b.style.color = "white";
        })
        p.forEach((c)=>{
            c.style.color= "white";
        })
        li.forEach((d)=>{
            d.style.color= "white";
        })
        condition = true;
    }
    else{
        body.style.backgroundColor = "gray";
        article.forEach((f)=>{
            f.style.backgroundColor = "white";
        })
        h1.forEach((e)=>{
            e.style.color = "black";
        })
        h2.forEach((i)=>{
            i.style.color = "black";
        })
        h3.forEach((a)=>{
            a.style.color = "black";
        })
        h4.forEach((b)=>{
            b.style.color = "black";
        })
        p.forEach((c)=>{
            c.style.color = "black";
        })
        li.forEach((d)=>{
            d.style.color= "black";
        })
        condition = false;
    }
}