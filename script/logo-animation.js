var whiteBoxList = document.body.querySelectorAll('.white-box');
for(var i = 0; i < whiteBoxList.length; i++){
    whiteBoxList[i].style.left = '22px';
}
document.body.onmouseover = function(event){
    var target = event.target;
    if(target.hasAttribute('data-anim-move') != true) return;
    target.parentElement.children[1].style.left = '40px';
    target.parentElement.children[2].style.color = '#7bb515';
    target.onmouseout = function(){
        target.parentElement.children[1].style.left = '22px';
        target.parentElement.children[2].style.color = '#fff';
    }
}