console.log("Hiii")
const testimonialsData = [
    { 
        id:1,
        author:"Roland Weedon",
        designation:"CEO & Founder Essex Mortgage",
        desc:"The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their",
    },
    { 
        id:2,
        author:"John Doe",
        designation:"CEO & Founder Essex facebook",
        desc:"The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their",
    },
    { 
        id:3,
        author:"Rohn Joel",
        designation:"Founder Essex Mortgage",
        desc:"The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their",
    },
    { 
        id:4,
        author:"Roland Willi",
        designation:"CEO Essex Mortgage",
        desc:"The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their",
    },
    { 
        id:5,
        author:"Ronaldo Weedon",
        designation:"CEO & Founder Essex Mortgage",
        desc:"The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their",
    },
]

const nav = document.querySelector(".navbar");
const about = document.querySelector(".about-section");
const landing = document.querySelector(".landing-section");
let stat = document.querySelectorAll(".stat");
let start = false;
let max;
let testDescContainer = document.querySelector(".test-desc-wrapper");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playBtn = document.getElementById("playVideo-btn");
const videoContainer = document.querySelector(".video-container");
const close = document.querySelector(".close");
const video = document.querySelector(".Video");
const BackToTopBtn = document.querySelector(".backToTop");

let i = 0;
let j = testimonialsData.length;
let displayTestimonials = ()=>{
    const {author,  designation, desc} = testimonialsData[i];
    testDescContainer.innerHTML =`
        <p id= "testi-desc">${desc}</p>
        <div class="authorWrapper">
            <h3>${author}</h3>
            <span>${designation}</span>
        </div>
    `
}

nextBtn.addEventListener("click",()=>{
    i = (j + i + 1 ) % j;
    displayTestimonials();
});

prevBtn.addEventListener("click",()=>{
    i = (j + i - 1 ) % j;
    displayTestimonials();
})

window.onload = displayTestimonials;


let inc = [];
function intervalFunc(){
    for(let i = 0; i < stat.length; i++){
        inc.push(i);
        if(inc[i] != stat[i].getAttribute("data-max")){
            inc[i]++;
        }
        stat[i].innerHTML = inc[i];
    }
}

function increaseCount(){
    const timer = setInterval(()=>{
        let topElem = about.offsetTop;
        let btmElem = about.offsetTop + about.clientHeight;
        let topScreen = window.pageYOffset;
        let btmScreen = window.pageYOffset + window.innerHeight;
        if(btmScreen > topElem && topScreen < btmElem){
            intervalFunc();
        }else{
            clearInterval(timer);
            for(let i = 0; i < stat.length; i++){
                stat[i].innerHTML = 0;
                inc = [];
            }
        }
    },100)
}

window.onscroll = function() {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("sticky");
    }else {
        nav.classList.remove("sticky");
    }
    if(window.scrollY > 680){
        BackToTopBtn.classList.add('show')
    }else{
        BackToTopBtn.classList.remove('show')
    }
    increaseCount()
};

playBtn.addEventListener("click", ()=>{
    videoContainer.classList.add("active");
    video.play();
})
close.addEventListener("click", ()=>{
    videoContainer.classList.remove("active");
    video.pause();
})
