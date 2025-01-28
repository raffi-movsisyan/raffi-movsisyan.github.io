let seconds = document.getElementById(`seconds`);
let mins = document.getElementById('mins')
let hours = document.getElementById('hours')
let clock = document.getElementById('clock')

let secondInt = setInterval(function () {
  clock.style.display = 'flex'
  let time = new Date().toLocaleTimeString();  
  let mysec =  time.slice(5,7)
  let mymin = time.slice(2,4)
  seconds.style.transform = `rotate(${mysec * 6}deg)`;
  mins.style.transform = `rotate(${mymin *60 * 0.1}deg)`;
  mins.style.transition = 1 + 's'
  seconds.style.transition =  1 + 's'
  let myhours;
  if(time.length === 10){
  myhours = time.slice(0,1)
  }
  else{
    myhours = time.slice(0,2)
  }
  hours.style.transform = `rotate(${myhours * 3600 *  0.008333333333333333}deg)`
}, 1000);

let time = document.getElementById('time');

let ti = setInterval(function() {
  let tim = new Date().toLocaleTimeString();
  time.innerText = tim;
}, 1000);
  clock.style.display = 'none';