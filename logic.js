let bColor = document.querySelector('.main');
let button = document.querySelector("#button");
bColor.style.backgroundColor = 'black'
let val = 0
let switchMode = ()=>{
    if (val === 0) {
        bColor.style.backgroundColor = '#fff';
        bColor.style.color = "#212121";
        val = 1
      } else {
        bColor.style.backgroundColor = '#212121';
        bColor.style.color = '#fff';
        val = 0
      }
    }
button.addEventListener('click',switchMode);
