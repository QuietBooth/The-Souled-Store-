
let menCategory = document.querySelector(".men")
let womenCategory = document.querySelector(".women")
let kidsCategory = document.querySelector(".kids")

menCategory.onclick = ()=>{
    menCategory.style.backgroundColor = "white"
    menCategory.style.color = "rgba(0,0,0,0.5)"
    womenCategory.style.color = "white"
    womenCategory.style.backgroundColor = "rgb(237,45,47)"
    kidsCategory.style.color = "white"
    kidsCategory.style.backgroundColor = "rgb(237,45,47)"
    menCategory.style.transition = "0.4s"
    womenCategory.style.transition = "0.4s"
    kidsCategory.style.transition = "0.4s"

}

womenCategory.onclick = ()=>{
    menCategory.style.backgroundColor = "rgb(237,45,47)"
    menCategory.style.color = "white"
    womenCategory.style.color = "rgba(0,0,0,0.5)"
    womenCategory.style.backgroundColor = "white"
    kidsCategory.style.color = "white"
    kidsCategory.style.backgroundColor = "rgb(237,45,47)"
    menCategory.style.transition = "0.4s"
    womenCategory.style.transition = "0.4s"
    kidsCategory.style.transition = "0.4s"
}
kidsCategory.onclick = ()=>{
    menCategory.style.backgroundColor = "rgb(237,45,47)"
    menCategory.style.color = "white"
    womenCategory.style.color = "white"
    womenCategory.style.backgroundColor = "rgb(237,45,47)"
    kidsCategory.style.color = "rgba(0,0,0,0.5)"
    kidsCategory.style.backgroundColor = "white"
    menCategory.style.transition = "0.4s"
    womenCategory.style.transition = "0.4s"
    kidsCategory.style.transition = "0.4s"
}

let searchBar = document.querySelector("#search")
let searchBtn = document.querySelector(".search-btn")
searchBtn.addEventListener("mouseenter", () => {
    searchBar.style.visibility = "visible";
    searchBar.style.width = "18vw";
    console.log("enter")
});

searchBar.addEventListener("mouseleave", () => {
    searchBar.style.width = "0";
    // searchBar.style.visibility = "hidden";
    console.log("leave")
});

let topwear = document.querySelector(".topwear")
let topwearDropdown = document.querySelector("#topwear-dd")

let bottomwear = document.querySelector(".bottomwear")
let bottomwearDropdown = document.querySelector("#bottomwear-dd")

topwear.addEventListener("mouseenter", ()=>{
    topwearDropdown.style.visibility = "visible"
})
topwearDropdown.addEventListener("mouseenter", ()=>{
    topwearDropdown.style.visibility = "visible"
})
topwearDropdown.addEventListener("mouseleave", ()=>{
    topwearDropdown.style.visibility = "hidden"
})
topwear.addEventListener("mouseleave", ()=>{
    topwearDropdown.style.visibility = "hidden"
})
bottomwear.addEventListener("mouseenter", ()=>{
    bottomwearDropdown.style.visibility = "visible"
})
bottomwearDropdown.addEventListener("mouseenter", ()=>{
    bottomwearDropdown.style.visibility = "visible"
})
bottomwearDropdown.addEventListener("mouseleave", ()=>{
    bottomwearDropdown.style.visibility = "hidden"
})
bottomwear.addEventListener("mouseleave", ()=>{
    bottomwearDropdown.style.visibility = "hidden"
})