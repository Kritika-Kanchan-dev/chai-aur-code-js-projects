const clock = document.querySelector('#clock');
setInterval( function(){
  const newDate = new Date();
  time = newDate.toLocaleTimeString()
  clock.innerHTML = time;
}, 1000);