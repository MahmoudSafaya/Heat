
let pageImgs = Array.from(document.querySelectorAll('.img-container img'));
const result = document.getElementById('zoom-result');

let lens, cx, cy;

/*create lens:*/
lens = document.createElement("DIV");
lens.setAttribute("class", "img-zoom-lens");

pageImgs.forEach(img => {

   img.addEventListener('mouseover', (e) => {
      /*insert lens:*/
      img.parentElement.insertBefore(lens, img);
      /*calculate the ratio between result DIV and lens:*/
      cx = result.offsetWidth / lens.offsetWidth;
      cy = result.offsetHeight / lens.offsetHeight;

      /*set background properties for the result DIV:*/
      result.style.backgroundImage = "url('" + img.src + "')";
      result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
      result.style.inset = 'auto';

      if(e.clientX >= (document.body.offsetWidth / 2)){
         result.style.left = 100 + 'px';
      } else {
         result.style.right = 100 + 'px';
      }
      // Y coordinats
      if(e.clientY >= (screen.height / 2)){
         result.style.top = 100 + 'px';
      } else {
         result.style.bottom = 100 + 'px';
      }

      /*execute a function when someone moves the cursor over the image, or the lens:*/
      lens.addEventListener("mousemove", moveLens);
      img.addEventListener("mousemove", moveLens);
      /*and also for touch screens:*/
      lens.addEventListener("touchmove", moveLens);
      img.addEventListener("touchmove", moveLens);
   })

   function moveLens(e) {
      let x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/

      /*calculate the position of the lens:*/
      let zoomer = e.currentTarget;
      e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
      e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX

      x = offsetX / zoomer.offsetWidth * 100
      y = offsetY / zoomer.offsetHeight * 100
      result.style.backgroundPosition = x + '% ' + y + '%';
   }


})
