var Links = {
    setColor:function(color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
      }
    }
  }
var Body = {
    setColor:function (color){
      document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color){
      document.querySelector('body').style.backgroundColor = color;
    }
  }
function nightdayhandler(self){
var target = document.querySelector('body');
if(self.value === 'night'){
  target.style.backgroundColor = 'black';
  target.style.color = 'white';
  self.value = 'day'

  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length){
    alist[i].style.color = 'yellow';
    i = i + 1;
  }
} else {
  target.style.backgroundColor = 'white';
  target.style.color = 'black';
  self.value = 'night'

  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length){
    alist[i].style.color = 'orange';
    i = i + 1;
  }
}
}
