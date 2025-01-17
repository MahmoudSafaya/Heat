
document.title = 'Managing Heat as You age';


const loader = document.getElementById('site-loader');

document.addEventListener('DOMContentLoaded', () => {
    loader.classList.add('hidden');
})


// Speech Button Code
const speakerBtn = document.getElementById('speech-btn');

if(speakerBtn) {
     speakerBtn.innerHTML = `

      <span class="icon px-1 d-flex">
          <?xml version="1.0" encoding="UTF-8"?>
          <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48.3705891958 49.2590717759">
              <g id="Layer_1-2" data-name="Layer 1">
                  <path class="cls-1-play"
                      d="m39.5502894186,42.1925168361c-.6757999829,0-1.3515999659-.2559-1.8651999529-.7715-1.0312999739-1.0313-1.0312999739-2.7012,0-3.7305,7.2001998181-7.2012,7.2001998181-18.918,0-26.1191-1.0312999739-1.0313-1.0312999739-2.7012,0-3.7325,1.029299974-1.0292,2.7001999318-1.0292,3.7294999058,0,4.4862998867,4.4864,6.9559998243,10.4493,6.9559998243,16.7911,0,6.3437-2.4696999376,12.3066-6.9559998243,16.791-.513699987.5156-1.18949997.7715-1.8642999529.7715Zm-9.3729997632-4.9746c-.674799983,0-1.3496999659-.2579-1.8652896554-.7735-1.0302102714-1.0293-1.0302102714-2.6992,0-3.7305,4.458-4.457,4.458-11.7109,0-16.1679-1.0302102714-1.0313-1.0302102714-2.7012,0-3.7324,1.0302896765-1.0293,2.7011896343-1.0293,3.7314896083,0,6.5145998354,6.5156,6.5145998354,17.1171,0,23.6308-.515699987.5156-1.1904896083.7735-1.8661999529.7735ZM22.0600898605.8116168361c1.4100999644-1.4121,2.5653999352-.9336,2.5653999352,1.0625v45.5114859366c0,1.9952925488-1.1544299708,2.4735138773-2.5653999352,1.0627140634l-12.7298951378-12.7283600259c-.3427519572-.3427106244-.8075985642-.5352399741-1.2922938048-.5352399741H1.8276896368c-1.0094051138,0-1.8276896368-.818284523-1.8276896368-1.8276896368V15.9049064729c0-1.0094051138.818284523-1.8276896368,1.8276896368-1.8276896368h6.2101305681c.4847429867,0,.9496313563-.1925671769,1.2923912371-.535337402L22.0600898605.8116168361Z" />
              </g>
          </svg>
      </span>
      <span class="icon px-1 d-flex">
          <?xml version="1.0" encoding="UTF-8"?>
          <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50.3993987268 50.3994">
              <g id="Layer_1-2" data-name="Layer 1">
                  <path class="cls-1-play"
                      d="m25.2001993634,0C11.282699715,0,0,11.2832,0,25.2001c0,13.9151,11.282699715,25.1993,25.2001993634,25.1993,13.9164996484,0,25.1991993634-11.2842,25.1991993634-25.1993C50.3993987268,11.2832,39.1166990118,0,25.2001993634,0Zm-3.6985119233,37.7988h-5.2020710752c-.3032661852,0-.5491120029-.2458458178-.5491120029-.5491120029V13.1487120029c0-.3032661852.2458458178-.5491120029.5491120029-.5491120029h5.2020710752c.3032661852,0,.5491120029.2458458178.5491120029.5491120029v24.1009759942c0,.3032661852-.2458458178.5491120029-.5491120029.5491120029Zm12.5980996817,0h-5.202075835c-.3032661852,0-.5491120029-.2458458178-.5491120029-.5491120029V13.1487120029c0-.3032661852.2458458178-.5491120029.5491120029-.5491120029h5.202075835c.3032661852,0,.5491120029.2458458178.5491120029.5491120029v24.1009759942c0,.3032661852-.2458458178.5491120029-.5491120029.5491120029Z" />
              </g>
          </svg>
      </span>

    `
}


// Show / Hide Disclaimer
const disclaimerBtn = document.querySelector(".disclaimer-icon");
const disclaimerContainer = document.querySelector(".disclaimer-container");

disclaimerBtn && disclaimerBtn.addEventListener("click", toggledisclaimer);

function toggledisclaimer() {
  disclaimerBtn.classList.toggle('close-disclaimer');
  disclaimerContainer.classList.toggle('open');
}



// Detect device orientation
function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        document.getElementById('rotate-message').style.display = 'flex';
    } else {
        document.getElementById('rotate-message').style.display = 'none';
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);

// Initial check
checkOrientation();