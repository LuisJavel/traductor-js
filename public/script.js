const voiceSellect = document.querySelector('#voiceSelect');
const playButton = document.querySelector('#playButton');
const textInput = document.querySelector('textarea')
const languageSelect = document.querySelector('#languageSelect')

//matrin de idimas ISO 
const langueges = [
  {code: 'en', name: 'Engles'},
  {code: 'es', name: 'Spanish'},
  {code: 'fr', name: 'French'},
  {code: 'de', name: 'German'},
  {code: 'it', name: 'Italia'},
  {code: 'ja', name: 'Japanese'},
  {code: 'zh-CN', name: 'Chinese (Simplified)'},
]
//rellenar en cuado de selcciona de idioma
langueges.forEach(({code, name}) => {
  const option = document.createElement('option')
  option.value = code;
  option.textContent = name;
  languageSelect.appendChild(option)
})

//elegir voces
let voices = []
function loadVoices(){
  voices = speechSynthesis.getVoices();
  voiceSellect.innerHTML = voices.map((voice, index) => `<option value="${index}">${voice.name}(${voice.lang})</option>`)
  .join('')
}


//ativar voces
speechSynthesis.onvoiceschanged = loadVoices
loadVoices()

//play TTS
playButton.addEventListener('click', () =>{
  const utterance = new SpeechSynthesisUtterance(textInput.value);
  const selectedVoince = voices[voiceSellect.value];
  if(selectedVoince) utterance.voice = selectedVoince
  speechSynthesis.speak(utterance)
})