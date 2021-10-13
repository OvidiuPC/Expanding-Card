const cards = document.querySelectorAll(".card")

cards.forEach(card =>{
    // console.log(card)
    card.addEventListener("click",()=>{
        remove()
        card.classList.add("active");
        card.style.zIndex = 10;
        
    })
})

function remove(){
    cards.forEach(item =>{
        item.classList.remove("active")
        item.style.zIndex = 1;
    })
}