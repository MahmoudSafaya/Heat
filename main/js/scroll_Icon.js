
// Add controls to videos and set more attributes
const videos = Array.from(document.querySelectorAll('video'));

videos.forEach(video => {
  video.setAttribute('controls', '')
  video.setAttribute('playsinline', '')
  video.setAttribute('loop', '')
})

const modalCloseIcon = Array.from(document.querySelectorAll('.video-close-icon'));

for(let i=0; i<modalCloseIcon.length; i++) {
    modalCloseIcon[i].addEventListener('click', () => {
        videos[i].pause();
    })
}


// Scroll-Down Button Code
let arrScrollIcons = Array.from(document.getElementsByClassName('scroll-down-img'));

arrScrollIcons.forEach(elem => {
  elem.innerHTML = `
<?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 945.92705 869.8125515475">
    <defs>
        <linearGradient id="linear-gradient" x1="5366.917264891" y1="455.0692024009"
            x2="5367.2881560454" y2="-114.6491568477"
            gradientTransform="translate(5839.6185474026 543.4318055954) rotate(-180)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fff" />
            <stop offset=".652421" stop-color="#000" />
        </linearGradient>
    </defs>
    <g id="Layer_1-2" data-name="Layer 1">
        <g>
            <g>
                <path class="scroll-cls-1"
                    d="m522.32975,849.372v-.0125l403.1619-403.1729c27.2472-27.2585,27.2472-71.4656,0-98.7179-27.2227-27.2713-71.4472-27.2713-98.7183,0l-353.7839,353.79L119.14435,347.4687c-27.2474-27.2713-71.4717-27.2713-98.7181,0-27.235,27.2523-27.235,71.4768,0,98.7179l403.1854,403.1729c27.2352,27.2599,71.4831,27.2774,98.7181.0125Z" />
                <path class="scroll-cls-3"
                    d="m522.32975,522.0938v-.0125l214.6571-214.6755c27.2836-27.2403,27.2836-71.4595,0-98.7183-27.2102-27.2711-71.4345-27.2711-98.7182,0l-165.2792,165.2919-166.0584-166.021c-27.2837-27.2774-71.4706-27.2774-98.7181,0-27.3072,27.2536-27.3072,71.4842,0,98.7069l215.3987,215.416c27.2352,27.2897,71.4831,27.2897,98.7181.0125Z" />
            </g>
            <circle class="scroll-cls-2" cx="472.32975" cy="94" r="94" />
        </g>
    </g>
</svg>

`

});