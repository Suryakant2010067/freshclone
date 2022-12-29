// Menu Variables 
const button1 = document.getElementById('drop-btn1');
const button2 = document.getElementById('drop-btn2');
const dropMenu1 = document.querySelector('.hiw-menu');
const dropMenu2 = document.querySelector('.or-menu');
const togglers = document.querySelectorAll(".toggler");
const siteLinks = document.querySelectorAll('.site-links')
const burger = document.querySelector('.burger-icon')
const mobileMenu = document.querySelector(".mobile-nav")
const mobileBody = document.querySelector(".mobile-body")


// Event Listeners

button1.addEventListener('mouseover', () => {
    dropMenu1.classList.add('active')
});

button1.addEventListener('mouseleave', () => {
    dropMenu1.classList.remove('active')
});

button2.addEventListener('mouseover', () => {
    dropMenu2.classList.add('active')
});

button2.addEventListener('mouseleave', () => {
    dropMenu2.classList.remove('active')
});

// Mobile menu toggle

burger.addEventListener('click',()=>{
    mobileMenu.classList.add('menu-on')
})

mobileBody.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-on')
})

// Footer toggle at 500px devie width
togglers.forEach((item,index)=> {
    item.addEventListener('click',() => {
        if(item.innerHTML=== '+') {
            item.innerHTML = '-'
        } else {
            item.innerHTML = '+'
        }
        siteLinks[index].classList.toggle('activated')
    })
})
