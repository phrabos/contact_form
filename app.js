//alert("test"



//input variables
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const messageInput = document.getElementById('message');
//const test= storageOject.name;

//button variables
const sendButton = document.getElementById('send-button');
const resetButton = document.getElementById('reset-button');
const clearStorage = document.getElementById('clear-storage');
const recallStorage = document.getElementById('recall-storage');

//add eventListener
const storageObject={};

sendButton.addEventListener('click', ()=>{
    storageObject.name=nameInput.value;
    storageObject.email=emailInput.value;
    storageObject.message=messageInput.value;

    localStorage.setItem('name',JSON.stringify(storageObject.name));
    localStorage.setItem('email',JSON.stringify(storageObject.email));
    localStorage.setItem('message',JSON.stringify(storageObject.message));


});

    
resetButton.addEventListener('click', ()=>{
    nameInput.value="";
    emailInput.value="";
    messageInput.value="";    
});
clearStorage.addEventListener('click', ()=>{
    localStorage.clear();

});
recallStorage.addEventListener('load', ()=>{
    alert('test')
    nameInput.value = JSON.parse(localStorage.name);
    emailInput.value = JSON.parse(localStorage.email);
    messageInput.value = JSON.parse(localStorage.email);
});