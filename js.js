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
        topBar.style.height = (window.innerHeight-scrollY)+'px';
    }
})