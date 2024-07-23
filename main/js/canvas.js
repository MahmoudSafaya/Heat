const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = document.body.scrollHeight;
ctx.strokeStyle = '#2196F3';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;

//where to start a line from and then where to end it
let drawingMode = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(clientX, clientY) {
  if (!drawingMode)
    return; //only run in click and drag

  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); //start from
  ctx.lineTo(clientX, clientY); //go to
  ctx.stroke(); //to actually draw the path on canvas
  [lastX, lastY] = [clientX, clientY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
}

canvas.addEventListener('mousemove', (e) => {
  clientX = e.offsetX;
  clientY = e.offsetY;
  // [lastX, lastY] = [clientX, clientY];   // cancel comment to make dotted line
  draw(clientX, clientY);
});
canvas.addEventListener('mousedown', (e) => {
  drawingMode = true;
  [lastX, lastY] = [clientX, clientY]; //on mousedown initiate coordinates for X and Y
});
canvas.addEventListener('mouseup', () => drawingMode = false);
canvas.addEventListener('mouseout', () => drawingMode = false);



// canvas on MOBILE, TABLET
document.body.addEventListener("touchstart", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
    [lastX, lastY] = [clientX, clientY];
    drawingMode = true;
    draw(clientX, clientY)
    document.body.classList.add('stop-scrolling');
  }
}, false);

document.body.addEventListener("touchend", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
    drawingMode = false;
  }
  document.body.classList.remove('stop-scrolling');
}, false);

document.body.addEventListener("touchmove", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
    draw(clientX, clientY)
  }
}, false);


// manage DOM elements and adding event handlers
const controler = document.getElementById('canvas-controls');

controler.innerHTML = `
<div class="icon icon-zoom" id="canvas-zoom">
    <img src="main/assets/icons-images/zoom.svg" alt="page icon">
</div>
<div class="icon icon-draw canvas_icon" id="canvas-draw">
    <img src="main/assets/icons-images/edit.svg" alt="page icon">
</div>
<div class="icon icon-eraser canvas_icon" id="canvas-erase">
    <img src="main/assets/icons-images/eraser.svg" alt="page icon">
</div>
<div class="icon icon-clear canvas_icon" id="canvas-clear">
    <img src="main/assets/icons-images/magicpen.svg" alt="page icon">
</div>
<div class="icon icon-minus canvas_icon" id="canvas-minus">
    <img src="main/assets/icons-images/font-minus.svg" alt="page icon">
</div>
<div class="icon icon-plus canvas_icon" id="canvas-plus">
    <img src="main/assets/icons-images/font-plus.svg" alt="page icon">
</div>
<div class="icon icon-font canvas_icon" id="canvas-font">
    <img src="main/assets/icons-images/font-size.svg" alt="page icon">
</div>
<div class="icon icon-main" id="canvas-display">
    <img src="main/assets/icons-images/main.svg" alt="page icon">
    <p class="tools-txt" id="tools-txt">Tools</p>
</div>
`

/*////////////////////////////////////////////////////////////////////////////////////////////*/
// Big_Icon_(display)  -  Zoom_Icon  -  Draw_Icon  -  Erase_Icon  -  Clear_Icon  -  Font_Icons
/*////////////////////////////////////////////////////////////////////////////////////////////*/

const canvasIcons = Array.from(document.getElementsByClassName('canvas_icon'));
const plusIcon = document.getElementById('canvas-plus');
const minusIcon = document.getElementById('canvas-minus');

// result image and the overlay background
const zoomedImg = document.getElementById('zoom-result');
const zoomedImgOverlay = document.getElementById('img-zoom-overlay');
// DOM body element
const pageBody = document.getElementsByTagName("body")[0];


canvasIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    zoomedImgOverlay.classList.remove('start-zoom');
    zoomedImg.classList.remove('start-zoom');
    active = false;

    // set the cursor to default
    pageBody.style.cursor = "default";
  })
})

// Flag for zoom handlers - (icon, result, overlay, canvas)
let active = false;

document.getElementById('canvas-display').addEventListener('click', () => {
  controler.classList.toggle('shown');
  canvas.classList.add('hide-element');

  zoomedImgOverlay.classList.remove('start-zoom');
  zoomedImg.classList.remove('start-zoom');

  if (active) {
    pageBody.style.cursor = "default";
    canvas.classList.add('hide-element');
    active = false;
  }

  // For Font Icons
  document.getElementById('canvas-font').classList.remove('font-hide-pseudo');
  plusIcon.classList.remove('font-icons-show');
  minusIcon.classList.remove('font-icons-show');
})

/* ////////////////////////////////////////////////////////////// */
/* handling Zoom Icon */
/* ////////////////////////////////////////////////////////////// */
document.getElementById('canvas-zoom').addEventListener('click', () => {
  canvas.classList.add('hide-element');
  zoomedImgOverlay.classList.toggle('start-zoom');
  zoomedImg.classList.toggle('start-zoom');

  if (!active) {
    pageBody.style.cursor = "zoom-in";
    active = true;
  } else {
    pageBody.style.cursor = "default";
    active = false;
  }

})
// Hide zoomed image when cursor stand on a different element
window.addEventListener('mouseover', (e) => {
  if (e.target.tagName == 'IMG' && active) {
    if (e.target.src.includes('assets/images')) {
      zoomedImg.style.visibility = 'visible';
    }
  } else {
    zoomedImg.style.visibility = 'hidden';
  }
})
window.addEventListener('touchstart', (e) => {
  if (e.target.tagName == 'IMG' && active) {
    if (e.target.src.includes('assets/images')) {
      zoomedImg.style.visibility = 'visible';
    }
  } else {
    zoomedImg.style.visibility = 'hidden';
  }
})

/* ////////////////////////////////////////////////////////////// */
/* handling Draw Icon */
/* ////////////////////////////////////////////////////////////// */
document.getElementById('canvas-draw').addEventListener('click', () => {
  canvas.classList.remove('hide-element');
  ctx.globalCompositeOperation = 'source-over';
  ctx.lineWidth = 5;
})

/* ////////////////////////////////////////////////////////////// */
/* handling Erase Icon */
/* ////////////////////////////////////////////////////////////// */
document.getElementById('canvas-erase').addEventListener('click', () => {
  canvas.classList.remove('hide-element');
  ctx.lineWidth = 30;
  ctx.globalCompositeOperation = 'destination-out';
})

/* ////////////////////////////////////////////////////////////// */
/* handling Clear Icon */
/* ////////////////////////////////////////////////////////////// */
document.getElementById('canvas-clear').addEventListener('click', () => {
  canvas.classList.remove('hide-element');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})

/* ////////////////////////////////////////////////////////////// */
/* handling Font Icons */
/* ////////////////////////////////////////////////////////////// */
document.getElementById('canvas-font').addEventListener('click', (e) => {
  canvas.classList.add('hide-element');
  e.currentTarget.classList.toggle('font-hide-pseudo');
  plusIcon.classList.toggle('font-icons-show');
  minusIcon.classList.toggle('font-icons-show');
})

// DOM elements to change their Font-Size
const ps = Array.from(document.querySelectorAll('p, h2, h3, h4, h5, li, span, .text'));
// Puls Icon
plusIcon.addEventListener('click', () => {
  ps.forEach(element => {
    const style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    const font_size = parseFloat(style);
    element.style.fontSize = (font_size + 2) + 'px';
  })
  canvas.classList.add('hide-element');
})

// Minus Icon
minusIcon.addEventListener('click', () => {
  ps.forEach(element => {
    const style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    const font_size = parseFloat(style);
    element.style.fontSize = (font_size - 2) + 'px';
  })
  canvas.classList.add('hide-element');
})