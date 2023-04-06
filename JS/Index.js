document.getElementById("mainTitle").innerText = "Point and click adventure"

const ofsetcharacterX = 11
const ofsetcharactery = 15

const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

const counterSpeech = document.getElementById("counterSpeech");
const counterCharacter = document.getElementById("counterCharacter");

let key = false;
let stick = false;



gameWindow.onclick = function(e){
    if(mainCharacterSpeech.style.opacity == 0){
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        mainCharacter.style.left = x - ofsetcharacterX + "px";
        mainCharacter.style.top = y - ofsetcharactery + "px";

        console.log(e.target.id);

        switch(e.target.id){
            case "door1":
                showMessage(mainCharacterSpeech, "The door seems te be locked");
                break;
            case "door2":

                if (key == true){
                    showMessage(mainCharacterSpeech, "I have already obtained a key from this door!");
                    }
                if (key == false && stick == false){
                    showMessage(mainCharacterSpeech, "The door seems te be locked");
                    }
                if (key == false && stick == true){
                    showMessage(mainCharacterSpeech, "I have opened the door and found a key!");
                    key = true
                    }

                break;
            case "door3":
                if(key == false)
                {
                    showMessage(mainCharacterSpeech, "This door is closed, it can be opened with a key");
                } 
                else if (key == true)
                {
                    showMessage(mainCharacterSpeech, "yAy I'm back with my family");
                }
                break;
            
            case "tree":
                if (stick == true)
                {
                    showMessage(mainCharacterSpeech, "I have obtained a stick from this tree")
                }

                if(stick == false)
                {
                    setTimeout(function () { counterCharacter.style.opacity = 1; }, 0);
                    setTimeout(showMessage, 0, counterSpeech, "Hello i am tree");
                    setTimeout(showMessage, 4000, mainCharacterSpeech, "what?? trees can talk now, who are you?");
                    setTimeout(showMessage, 8000, counterSpeech, "i am tree and i give you stick")
                    setTimeout(showMessage, 12000, mainCharacterSpeech, "thank you. I have a stick now")
                    setTimeout(function () { counterCharacter.style.opacity = 0; }, 16000);
                    stick = true
                }


                break;
            default:
                hideMessage();
                break;
        }
    }
}

function showMessage(targetBubble, message){
    targetBubble.innerHTML = message
    targetBubble.style.opacity = 1;
    setTimeout(hideMessage, 4000);

    setTimeout(hideMessage, 4000, targetBubble);
}

function hideMessage(targetBubble) {
    targetBubble.style.opacity = 0;
    targetBubble.innerHTML = "";
}