const toggleBtn = document.getElementById("toggle");
const removeBtn = document.getElementById("cross");
const links = document.getElementById("links");
const rootEle =document.querySelector(":root");

//toggle click events
toggleBtn.onclick = function toggle(){
    links.classList.toggle("hide");
    removeBtn.classList.toggle("hide");
    toggleBtn.classList.toggle("hide");
    rootEle.style.setProperty("--body-value","''");
}

//remove btn click events
removeBtn.addEventListener("click",()=>{
    links.classList.toggle("hide");
    removeBtn.classList.toggle("hide");
    toggleBtn.classList.toggle("hide");
    rootEle.style.setProperty("--body-value","nothing");
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll",display);

function display(){
    if(scrollY >= 100)
        navbar.classList.add("transparent");
    else
        navbar.classList.remove("transparent");
}

const homeImg = document.querySelector("#home > img");
//navbar display problem fix
window.addEventListener("resize",()=>{
    let width = window.innerWidth;
    if(width >= 992 && !removeBtn.classList.contains("hide"))
        rootEle.style.setProperty('--body-value','anything');
    else if(width < 992 && !removeBtn.classList.contains("hide"))
        rootEle.style.setProperty("--body-value","''");
    });

window.addEventListener("load",imgUpDownAnimation);
window.addEventListener("resize",imgUpDownAnimation);

function imgUpDownAnimation(){ 
    width = window.innerWidth;
    if(width >=992){
        homeImg.classList.add("img-up-down");
    }
    else if(width < 992){
        homeImg.classList.remove("img-up-down");
    }
 }

//accordion
const accordionLists = document.querySelectorAll("#left > .list-item");
const listParaContent = document.querySelectorAll("#left > .list-item > p.list-item-content");
const spanToBeRotated = document.querySelectorAll("#left > .list-item > .list-item-head > span");
let prevClicked;

accordionLists.forEach((list, index)=>{
    list.addEventListener("click",function(){
        if(prevClicked !=this)
        {
            listParaContent.forEach(content=>
            {
                if(!content.classList.contains("smooth-hide"))
                content.classList.add("smooth-hide");
                if(content.classList.contains("smooth-show"))
                {
                    content.classList.remove("smooth-show");
                }
            });
        }
        listParaContent[index].classList.toggle("smooth-hide");
        listParaContent[index].classList.toggle("smooth-show");
        spanToBeRotated[index].classList.toggle("rotate");
        prevClicked = list;
    });
});

//progress bar incrementing
const progressBarContainer = document.getElementById("progress-bars");
const prcntgEles = document.querySelectorAll(".progress-container > .text > span.percentage");
const barFirstSpan = document.querySelectorAll(".progress-container > .bar > span:first-child");
const numPrcntgs = [];
prcntgEles.forEach(ele=>{
    numPrcntgs.push(ele.innerText);
});

window.addEventListener("scroll", incrementProgressBar);

function incrementProgressBar()
{
    let topOfContainer = progressBarContainer.getBoundingClientRect().top;
    if(topOfContainer + 100 <= window.innerHeight)
    {
        barFirstSpan.forEach((ele, index)=>{
            barFirstSpan[index].style.setProperty("--percentage-value", `${numPrcntgs[index]}`);
            barFirstSpan[index].classList.remove("width-0");
            barFirstSpan[index].classList.add("width-appropriately");
        });
    }
}

function splitNumFromPrcntg(value)
{
    let indexOfPrcntg = value.indexOf("%");
    return value.slice(0,indexOfPrcntg);
}

//animations
const homeDiv = document.querySelector("#home > div");
window.onload = function(){
    homeImg.classList.remove("scale-0");
    homeDiv.classList.remove("transform-down");
}

const homeImages = document.querySelectorAll("#img-container > img");
const allH1 = document.querySelectorAll(".similar-section > h1");
const allLine = document.querySelectorAll(".similar-section > .line");
const pContainer = document.querySelector("#p-container");
const aboutPart2Img = document.querySelector("#about-part2 > img");
const aboutPart3Img = document.querySelector("#about-part3 > img");
const aboutPart3Right = document.getElementById("right");
const servicesCards = document.querySelectorAll("#cards-container > .card");
const teamCards = document.querySelectorAll("#team-cards > .team-card");
const teamH1 = document.querySelector("#team > h1");
const teamP = document.querySelector("#team > p");

window.onscroll = function(){
    let height = window.innerHeight;
    let eleShowOffset = [];
    let tops = [];
    homeImages.forEach((img, index)=>{
        tops.push(img.getBoundingClientRect().top);
        eleShowOffset.push(tops[index] + 70);
    });
    homeImages.forEach((img,i)=>
    {
        if(eleShowOffset[i] <= height)
            img.classList.remove("scale-0");
    });

    let allH1ShowOffset = [];
    let allH1Tops = [];
    allH1.forEach((h1, index)=>{
        allH1Tops.push(h1.getBoundingClientRect().top);
        allH1ShowOffset.push(allH1Tops[index] + 70);
    });
    allH1.forEach((h1,i)=>
    {
        if(allH1ShowOffset[i] <= height)
            h1.classList.remove("transform-down");
    });

    let allLineShowOffset = [];
    let allLineTops = [];
    allLine.forEach((line, index)=>{
        allLineTops.push(line.getBoundingClientRect().top);
        allLineShowOffset.push(tops[index] + 70);
    });
    allLine.forEach((line,i)=>
    {
        if(allLineShowOffset[i] <= height)
            line.classList.remove("transform-down");
    });

    let pContainerTop = pContainer.getBoundingClientRect().top;
    if(pContainerTop <= height)
        pContainer.classList.remove("transform-down-l");

    let aboutPart2ImgTop = aboutPart2Img.getBoundingClientRect().top;
    if(aboutPart2ImgTop + 100<= height)
        aboutPart2Img.classList.remove("scale-0");

    let aboutPart3ImgTop = aboutPart3Img.getBoundingClientRect().top;
    if(aboutPart3ImgTop + 100 <= height)
        aboutPart3Img.classList.remove("translate-left");
    
    let aboutPart3RightTop = aboutPart3Right.getBoundingClientRect().top;
    if(aboutPart3RightTop + 100 <= height)
        aboutPart3Right.classList.remove("translate-right");

    let servicesCardsTops = [];
    servicesCards.forEach((card,i)=>{
        servicesCardsTops.push(card.getBoundingClientRect().top);
    });
    servicesCards.forEach((card, i)=>{
        if(servicesCardsTops[i] + 40 <= height)
            card.classList.remove("scale-0");
    });

    let teamCardsTops = [];
    teamCards.forEach((card,i)=>{
        teamCardsTops.push(card.getBoundingClientRect().top);
    });
    teamCards.forEach((card, i)=>{
        if(teamCardsTops[i] + 40 <= height)
            card.classList.remove("scale-0");
    });

    let teamH1Top = teamH1.getBoundingClientRect().top;
    if(teamH1Top + 100 <= height)
    {
        teamH1.classList.remove("transform-down");
        teamP.classList.remove("transform-down");
    }
}

//portfolio menu
const menuItems = document.querySelectorAll("#menu-items > .menu-item");
const menuSpans = document.querySelectorAll("#menus > span");
const allBtn = menuSpans[0];
const appBtn = menuSpans[1];
const cardBtn = menuSpans[2];
const webBtn = menuSpans[3];

allBtn.addEventListener("click",()=>{
    menuItems.forEach((item)=>{
        if(item.classList.contains("height-0"))
        {
            item.classList.remove("display-none");
            setTimeout(()=>{
                item.classList.remove("height-0");
                item.classList.remove("transform-down");
            }, 50);
        }
    });
    menuSpans.forEach((span)=>{
        span.classList.remove("active-span");
    });
        allBtn.classList.add("active-span");
});
appBtn.addEventListener("click",()=>{
    menuItems.forEach((item)=>{
        if(!item.classList.contains("app") && !item.classList.contains("height-0"))
        {
            item.classList.add("height-0");
            item.classList.add("display-none");
        }
        else if(item.classList.contains("app") && item.classList.contains("height-0"))
        {
            item.classList.remove("display-none");
            setTimeout(()=>{
                item.classList.remove("height-0");
                item.classList.remove("transform-down");
            }, 50);
        }

        if(!item.classList.contains("app"))
        {
            item.classList.add("transform-down");
            item.classList.add("display-none");
        }
    });
    menuSpans.forEach((span)=>{
        span.classList.remove("active-span");
    });
        appBtn.classList.add("active-span");
});
cardBtn.addEventListener("click",()=>{
    menuItems.forEach((item)=>{
        if(!item.classList.contains("card") && !item.classList.contains("height-0"))
        {
            item.classList.add("height-0");
            item.classList.add("display-none");
        }
        else if(item.classList.contains("card") && item.classList.contains("height-0"))
        {
            item.classList.remove("display-none");
            setTimeout(()=>{
                item.classList.remove("height-0");
                item.classList.remove("transform-down");
            }, 50);
        }

        if(!item.classList.contains("card"))
        {
            item.classList.add("transform-down");
            item.classList.add("display-none");
        }
    });
    menuSpans.forEach((span)=>{
        span.classList.remove("active-span");
    });
        cardBtn.classList.add("active-span");
});
webBtn.addEventListener("click",()=>{
    menuItems.forEach((item)=>{
        if(!item.classList.contains("web") && !item.classList.contains("height-0"))
        {
            item.classList.add("height-0");
            item.classList.add("display-none");
        }
        else if(item.classList.contains("web") && item.classList.contains("height-0"))
        {
            item.classList.remove("display-none");
            setTimeout(()=>{
                item.classList.remove("height-0");
                item.classList.remove("transform-down");
            }, 50);
        }

        if(!item.classList.contains("web"))
        {
            item.classList.add("transform-down");
            item.classList.add("display-none");
        }
    });
    menuSpans.forEach((span)=>{
        span.classList.remove("active-span");
    });
        webBtn.classList.add("active-span");
});

// //navbar fixing
// const dropdown1 = document.querySelector("#dropdown1");
// const deepDropdown = document.querySelector("#deep-dropdown")
// window.addEventListener("resize",leftDetermine); 

// function leftDetermine(){
//     let left = dropdown1.getBoundingClientRect().left;
//     left -=5;
//     let width = window.innerWidth;
//     let value = width - left - 22;
//     deepDropdown.style.right = `${value}px`;
// }
// window.addEventListener("load",leftDetermine);