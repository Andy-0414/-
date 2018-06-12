var topBar = document.getElementById('topBar');
addEventListener('scroll', () => {
    if (scrollY > 0) {
        topBar.style.top = '0px';
        topBar.style.opacity = '1';
    }
    else {
        topBar.style.opacity = '0';
    }
    var userH = window.innerHeight * 0.9
    if (scrollY > userH) {
        topBar.style.height = '100px';
        topBar.style.boxShadow = '0px 0px 40px #416275';
    }
    else {
        topBar.style.boxShadow = '0px 0px 0px #416275';
        topBar.style.height = (window.innerHeight - scrollY) + 'px';
    }
})

var menu = document.getElementById('menu');
var menuBar = document.getElementById('menuBar');
var body = document.body;
var toggle = 0;
menu.addEventListener('click', () => {
    if (scrollY > 0) {
        if (toggle) {
            toggle = 0;
            menuBar.style.right = '-40%';
        }
        else {
            toggle = 1;
            menuBar.style.right = '0';
        }
    }
})
menuBar.addEventListener('click', () => {
    toggle = 0;
    menuBar.style.right = '-40%';
})

var jumpList = document.getElementsByClassName('jump');

jumpList[0].addEventListener('click', () => {
    document.querySelector("#imgBar").scrollIntoView({
        behavior: 'smooth'
    });
})
jumpList[1].addEventListener('click', () => {
    document.querySelector("#schoolBar").scrollIntoView({
        behavior: 'smooth'
    });
})
jumpList[2].addEventListener('click', () => {
    document.querySelector("#clubBar").scrollIntoView({
        behavior: 'smooth'
    });
})
jumpList[3].addEventListener('click', () => {
    document.querySelector("#likeBar").scrollIntoView({
        behavior: 'smooth'
    });
})