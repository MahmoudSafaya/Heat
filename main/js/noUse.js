

// Disable right click
document.addEventListener('contextmenu', event => event.preventDefault());
// Disable ctrl + c
document.addEventListener('copy', event => event.preventDefault());
// Disable words selection
document.addEventListener('selectstart', event => event.preventDefault());

// Also Disable Selection
var bod = document.getElementsByTagName('body')[0];
if (bod) {
  bod.setAttribute('unselectable', "on");
}

// Disable print
document.addEventListener('keyup', (e) => {
  if (e.key == 'PrintScreen' || e.keyCode == 44) {
    navigator.clipboard.writeText('');
    alert('Screenshots disabled!');
  }
});

// Disable ctrl+p - print
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key == 'p') {
    alert('This section is not allowed to print or export to PDF');
    // e.cancelBubble = true;   -   Deprecated
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
});


// Disable ScreenShot win+shift+s
document.addEventListener('keydown', (e) => {
  if (e.metaKey && e.shiftKey && (e.key == 's' || e.key == 'S')) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
})


// Disable Print with different code
document.addEventListener("keyup", function (e) {
  if (e.key == "PrintScreen" || e.keyCode == 44 || e.which == 44) {
    stopPrntScr();
  }
});
function stopPrntScr() {
  var inpFld = document.createElement("input");
  inpFld.setAttribute("value", ".");
  inpFld.setAttribute("width", "0");
  inpFld.style.height = "0px";
  inpFld.style.width = "0px";
  inpFld.style.border = "0px";
  document.body.appendChild(inpFld);
  inpFld.select();
  document.execCommand("copy");
  inpFld.remove(inpFld);
}
function AccessClipboardData() {
  try {
    window.clipboardData.setData('text', "Access   Restricted");
  } catch (err) {
  }
}
setInterval("AccessClipboardData()", 300);



const imgs = document.querySelectorAll('img')
imgs.forEach(item => {
  item.ondragstart = () => {
    return false;
  };
  item.setAttribute("draggable", false);
});


// Disable Multiple Keys
function disableEnterKey(e) {
  var elemtype = e.target.tagName;

  elemtype = elemtype.toUpperCase();

  if (elemtype == "TEXT" || elemtype == "TEXTAREA" || elemtype == "INPUT" || elemtype == "PASSWORD" || elemtype == "SELECT" || elemtype == "OPTION" || elemtype == "EMBED") {
    elemtype = 'TEXT';
  }

  if (e.ctrlKey) {
    var key;
    if (window.event)
      key = window.event.keyCode;     //IE
    else
      key = e.which || e.key;     //firefox (97)
    //if (key != 17) alert(key);
    if (elemtype != 'TEXT' && (key == 97 || key == 65 || key == 67 || key == 99 || key == 88 || key == 120 || key == 26 || key == 85 || key == 86 || key == 83 || key == 43 || key == 73)) {
      return false;
    } else
      return true;
  }
}

document.onkeydown = disableEnterKey;
