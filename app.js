
//input variables
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const messageInput = document.getElementById('message');

//button variables
const sendButton = document.getElementById('send-button');
const resetButton = document.getElementById('reset-button');
const clearStorage = document.getElementById('clear-storage');

// object for local storage
const storageObject={};

//add eventListener for form submit
sendButton.addEventListener('click', ()=>{
    storageObject.name=nameInput.value;
    storageObject.email=emailInput.value;
    storageObject.message=messageInput.value;

    // set inputs into local storage
    localStorage.setItem('name',(storageObject.name));
    localStorage.setItem('email',(storageObject.email));
    localStorage.setItem('message',(storageObject.message));
});

//add eventListener to reset form inputs   
resetButton.addEventListener('click', ()=>{
    nameInput.value="";
    emailInput.value="";
    messageInput.value="";    
});

//add eventListener to clear local storage
clearStorage.addEventListener('click', ()=>{
    localStorage.clear();
});

//add eventListener to recall local storage when page refreshes
window.addEventListener('load', ()=>{
    nameInput.value = localStorage.getItem('name');
    emailInput.value = localStorage.getItem('email');
    messageInput.value = localStorage.getItem('message');
});