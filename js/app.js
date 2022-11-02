const sneaker = document.querySelector(".container-right-sneaker");
const container = document.querySelector(".container");
const rightContainer = document.querySelector(".container-right");
const card = document.querySelector(".container-right-card");


rightContainer.addEventListener("mousemove", (e) =>{
    
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    
    
  card.style.transform = `rotateX(${yAxis}deg)`;
  
 });
 rightContainer.addEventListener("mouseleave", (e) =>{
    card.style.transform = `rotateX(0deg)`;
 })

card.addEventListener("mouseenter", (e) =>{
    sneaker.style.transform ="translateZ(250px)";
    card.style.transition = "none";

    // sneaker.style.transform ="translateZ(250px)";
    
});

card.addEventListener("mouseleave", (e) =>{
    sneaker.style.transform ="translateZ(0px)";
    sneaker.style.transition = 'all 0.5s ease';
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateX(0deg)`;
    

});

sneaker.addEventListener("click", rotateSneaker);

function rotateSneaker(){
    document.getElementsByClassName("container-right-sneaker").innerHTML =
    sneaker.style.transform ="translateZ(280px) translateX(80px) rotateZ(90deg)";
}



