  var _ = function(x){
    return document.getElementById(x);
  }
  _('play-button').onclick = function(){
    _('popup-background').style.display = 'block';
    _('popup-video').style.display = 'block';
    _('popup-youtube').src = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
  }
  window.onclick = function(event){
    if(!event.target.hasAttribute('data-hold')){
      _('popup-background').style.display = 'none';
      _('popup-video').style.display = 'none';
      _('popup-youtube').src = '';
    }
  }
      