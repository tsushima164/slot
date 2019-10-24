let interval;

function startSlot() {
  let slotNumber = document.getElementById('slot-number');
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  interval = setInterval(function() {
    slotNumber.innerHTML = array[Math.floor(Math.random() * array.length)];
  }, 10);
}

function stopSlot() {
  clearInterval(interval);
}

let intervalTwo;

function startSlotTwo() {
  let slotNumber = document.getElementById('slot-number-two');
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  intervalTwo = setInterval(function() {
    slotNumber.innerHTML = array[Math.floor(Math.random() * array.length)];
  }, 10);
}

function stopSlotTwo() {
  clearInterval(intervalTwo);
}

let intervalThree;

function startSlotThree() {
  let slotNumber = document.getElementById('slot-number-three');
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  intervalThree = setInterval(function() {
    slotNumber.innerHTML = array[Math.floor(Math.random() * array.length)];
  }, 10);
}

function stopSlotThree() {
  clearInterval(intervalThree);
}
