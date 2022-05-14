let title = document.getElementById("changing-text");
let image = document.getElementById("changing-img");
// const btn = document.getElementById("addimage");

let keyspressed = []

// let codeArray = ["e","g","y","u","h","j"];
let interval = setInterval(changeBackground, 1000);

// btn.addEventListener('click', function(){
//     let img2 = document.createElement("img");
//     img2.className = "imagesadded";
//     img2.src = "earth.png";
//     document.body.appendChild(img2);
// })

document.addEventListener('keydown', function(evt){
    // console.log(evt.code, evt.key);
    if(evt.metaKey == false){
        //clearInterval(interval);
        title.innerHTML += evt.key;
        setImage(title.innerHTML);
        keyspressed.push(evt.key);

        if(evt.key == 'p'){
            clearInterval(interval);
        }
    }

});

function setImage(word){
    switch(word){
        case 'cat':
            image.src = "cat.png";
            break;
        case 'moon':
            image.src = "moon.png";
            break;
        case 'sun':
            image.src = "sun.png";
            break;
        default:
            image.src = "";
    }
}

document.addEventListener('keyup', function(evt){

    if(evt.key === "Backspace"){
        console.log(evt.code);
        title.innerHTML = ""
    }

    if(evt.key === "Alt"){
        title.classList.toggle("change");
    }

    if(evt.key === "Control"){
        title.classList.toggle("before-change");
    }

    // switch(evt.key){
    //     case 'e':
    //         //title.innerHTML = codeArray[5];
    //         image.src = "earth.png";
    //         break;
    //     case 'm':
    //         //title.innerHTML = codeArray[0];
    //         image.src = "moon.png";
    //         break;
    //     case 's':
    //         //title.innerHTML = codeArray[1];
    //         image.src = "sun.png";
    //         break;
    //     default:
    //         image.src = "";
    // }
})


function changeBackground(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    document.body.style.background ="#" + randomColor;
}



// 
// ----------------------------------------------------
function setup() {
  createCanvas(2000, 900);
  stroke(300);
  strokeWeight(5);
}

function draw() {

  point(mouseX,mouseY);

    // if (mouseIsPressed) {
    // stroke(random(255),random(255),random(255));
  // }

}

function keyTyped() {
  if ( key == 'a') {
     stroke(255,0,0)
  } else if ( key == 'b') {
     stroke(0,255,0)
  } else if ( key == 'c') {
    stroke(0,0,255)
  } else if ( key == 'd') {
     stroke(237,245,0)
  } else if ( key == 'e') {
    stroke(0,0,0)
  } else if ( key == 'f') {
     stroke(255,0,230)
  } else if ( key == 'g') {
    stroke(0,255,204)
  } 
}



// const el = document.getElementById('container');

// const hiddenDiv = document.getElementById('cat');

// // ✅ Show hidden DIV on hover
// el.addEventListener('mouseover', function handleMouseOver() {
//   hiddenDiv.style.display = 'block';

//   // 👇️ if you used visibility property to hide div
//   // hiddenDiv.style.visibility = 'visible';
// });

// // ✅ (optionally) Hide DIV on mouse out
// el.addEventListener('mouseout', function handleMouseOut() {
//   hiddenDiv.style.display = 'none';

//   // 👇️ if you used visibility property to hide div
//   // hiddenDiv.style.visibility = 'hidden';
// });


