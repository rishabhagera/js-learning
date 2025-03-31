// generate a random color

const randomcolor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  console.log(randomcolor());
  
  const startchangeInColor = function () {
    //intervalId = setInterval(changeInColor, 1000);
    if (!intervalId) {
      intervalId = setInterval(changeInColor, 1000);
    }
    function changeInColor() {
      document.body.style.backgroundColor = randomcolor();
    }
  };
  
  const StopColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  document.querySelector('#start').addEventListener('click', startchangeInColor);
  document.querySelector('#stop').addEventListener('click', StopColor);
  