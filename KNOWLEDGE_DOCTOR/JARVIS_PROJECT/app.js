const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    let day = new Date();
    let hour = day.getHours();
    
    if (hour >= 0 && hour < 12 ){
        speak("Good Morning Sir...");
    }

    else if (hour >= 12 && hour < 17 ){
        speak("Good Afternoon Sir...");
    }

    else {
        speak("Good Evening Sir...");
    }

}


window.addEventListener('load', () => {
    speak("Initializing JARVIS..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;

    takeCommand(transcript.toLowerCase());
}

btn.addEventListener('click', () => {
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Sir, How May I Help You?");
    }

    if (message.includes("Open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }

    if (message.includes("Open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }

    if (message.includes("Open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
}