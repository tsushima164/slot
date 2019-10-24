let interval;

function startSugoroku() {
  let sugorokuNumber = document.getElementById('sugoroku-number');
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  interval = setInterval(function() {
    sugorokuNumber.innerHTML = array[Math.floor(Math.random() * array.length)];
  }, 10);
}

function stopSugoroku() {
  clearInterval(interval);
}

let intervalTwo;

function startSugorokuTwo() {
  let sugorokuNumber = document.getElementById('sugoroku-number-two');
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  intervalTwo = setInterval(function() {
    sugorokuNumber.innerHTML = array[Math.floor(Math.random() * array.length)];
  }, 10);
}

function stopSugorokuTwo() {
  clearInterval(intervalTwo);
}

let intervalThree;

function startSugorokuThree() {
  let sugorokuNumber = document.getElementById('sugoroku-number-three');
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  intervalThree = setInterval(function() {
    sugorokuNumber.innerHTML = array[Math.floor(Math.random() * array.length)];
  }, 10);
}

function stopSugorokuThree() {
  clearInterval(intervalThree);
}
