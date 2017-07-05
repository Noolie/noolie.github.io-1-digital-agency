var triangle = document.querySelector('.triangle-button');
var playButton = document.querySelector('.play-button')
var isRotating = function(){
    triangle.classList.add('rotate');
    this.classList.add('opacityDown');
    this.onmouseout = function(){
        triangle.classList.remove('rotate');
        this.classList.remove('opacityDown');
    }
}

playButton.addEventListener('mouseover', isRotating);