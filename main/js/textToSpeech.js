const speechBtn = document.getElementById("speech-btn");

let synth = speechSynthesis,
  isSpeaking = true,
  count = 0;

function textToSpeech(text) {
  let utterance = new SpeechSynthesisUtterance(text);
  for (let voice of synth.getVoices()) {
    if (voice.name === "Microsoft Zira - English (United States)") {
      utterance.voice = voice;
    }
  }

  // For Arabic use this voice
  // Microsoft Hoda - Arabic (Egypt)

  synth.speak(utterance);
}

speechBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (count === 0) {
    synth.cancel();
    count += 1;
  }

  const speechText = document.getElementById("speech-text");

  if (speechText.textContent !== "") {
    if (!synth.speaking) {
      textToSpeech(speechText.textContent);
    }
    if (speechText.textContent.length > 80) {
      setInterval(() => {
        if (!synth.speaking && !isSpeaking) {
          isSpeaking = true;
          speechBtn.classList.remove("speaking");
        }
      }, 500);

      if (isSpeaking) {
        synth.resume();
        isSpeaking = false;
        speechBtn.classList.add("speaking");

      } else {
        synth.pause();
        isSpeaking = true;
        speechBtn.classList.remove("speaking");
      }

    } else {
      speechBtn.classList.remove("speaking");
    }
  }
});

window.onbeforeunload = function () {
  // This runs before the page refresh or close
  synth.pause();
  synth.cancel();
};

window.onunload = function () {
  // This runs before the page refresh or close
  synth.pause();
  synth.cancel();
};
