document.addEventListener('DOMContentLoaded', (event) => {
    const swiperQuienesSomos = new Swiper('.About_Swiper', {
        loop: true,
        slidesPerView: 1, 
        // Si quieres que las imágenes pasen solas:
         autoplay: {
             delay: 3000, 
             disableOnInteraction: false,
         }
    });
});

const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

let activated = false;

function startCounters() {
    if (activated) return; 
    counters.forEach(counter => {
        counter.innerText = 0;
        let count = 0;
        const target = parseInt(counter.dataset.count);
        const increment = target / 100; 
        function updateCount() {
            if (count < target) {
                
                count = Math.min(target, count + increment);
                
                counter.innerText = Math.ceil(count) + (counter.textContent.includes('%') ? '%' : '') + (counter.textContent.includes('+') ? '+' : '');
                
                setTimeout(updateCount, 10); 
            } else {
                
                let finalValue = target.toString();
                if (counter.textContent.includes('%')) finalValue += '%';
                if (counter.textContent.includes('+')) finalValue += '+';
                counter.innerText = finalValue;
            }
        }
        
        updateCount();
    });
    activated = true;
}

function checkVisibility() {
    const containerTop = container.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (containerTop < windowHeight * 0.55 && containerTop > -container.offsetHeight) {
        startCounters();
    } else if (containerTop > windowHeight || containerTop < -container.offsetHeight) {
        if (activated) {
             counters.forEach(counter => {
                counter.innerText = 0; 
            });
            activated = false;
        }
    }
}

checkVisibility();
window.addEventListener("scroll", checkVisibility);

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.container,.follow, .About_Title, .sub-tittle, .section_tittle,.Why_elegirnos ,.galeria',{origin:'top'});
ScrollReveal().reveal('.About_Swiper, .services-list, .map_area, .galeria-box', {origin:'left'}); 
ScrollReveal().reveal('.About_Info, .map_tittle, .map_info', {origin:'right'}); 


const modal=document.getElementById('modal')
const openWork=document.getElementById('openWork')
const closeWork=document.getElementById('closeWork')

openWork.addEventListener('click', function() {
    modal.style.display='flex'
})

closeWork.addEventListener('click',function(){
    modal.style.display='none'
})

window.addEventListener('click',function(event){
    if(event.target==modal){
        modal.style.display='none'
    }
})

const modal1=document.getElementById('modal1')
const openAlm=document.getElementById('openAlm')
const closeAlm=document.getElementById('closeAlm')

openAlm.addEventListener('click', function() {
    modal1.style.display='flex'
})

closeAlm.addEventListener('click',function(){
    modal1.style.display='none'
})

window.addEventListener('click',function(event){
    if(event.target==modal1){
        modal1.style.display='none'
    }
})
const modal2=document.getElementById('modal2')
const openTal=document.getElementById('openTal')
const closeTal=document.getElementById('closeTal')

openTal.addEventListener('click', function() {
    modal2.style.display='flex'
})

closeTal.addEventListener('click',function(){
    modal2.style.display='none'
})

window.addEventListener('click',function(event){
    if(event.target==modal2){
        modal2.style.display='none'
    }
})