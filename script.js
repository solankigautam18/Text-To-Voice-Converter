let speech = new SpeechSynthesisUtterance();
let addVoices = [];
const text = document.querySelector("#trans");

let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () =>{
    // getvoices() will provide all the voices on the device
    addVoices = window.speechSynthesis.getVoices();
    speech.voice = addVoices[0];

    // to display each voice in dropdown/select:
    addVoices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name, i)));

};

voiceSelect.addEventListener("change", () => {
    speech.voice = addVoices[voiceSelect.value];
});
document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Converter.";
    },0);
    setTimeout(() => {
        text.textContent = "Tester.";
    },3000); 
}
textLoad();
setInterval(textLoad,6000);

