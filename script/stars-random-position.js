var stars = document.querySelectorAll('.star-around');
for(var i = 0; i < stars.length; i++){
    stars[i].style.top = Math.floor(Math.random() * 180) + 'px';
    stars[i].style.left = Math.floor(Math.random() * 160) + 'px';
}