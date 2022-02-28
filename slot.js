function getRandomNumber(){
    return Math.floor(Math.random() * 9)+1;
}

function getElement(id){
    return document.getElementById(id);
}

function spin(){
    var item1 = getElement('item1');
    var item2 = getElement('item2');
    var item3 = getElement('item3');

    var num1 = getRandomNumber();
    var num2 = getRandomNumber();
    var num3 = getRandomNumber();

    item1.innerHTML = `${num1}`;
    item2.innerHTML = `${num2}`;
    item3.innerHTML = `${num3}`;

    if (num1 === num2 && num1 === num3){
        playTada();
        showMessage();
        showImage();
    }
    else{
        hideMessage();
    }
}

function playTada(){
    var tada = document.getElementById("tada");
    tada.play();
}
function showMessage(){
    var msg= document.getElementById("message");
    msg.style.display = "block";
    msg.classList.add('animated' , 'pulse');
}

function hideMessage(){
    var msg= document.getElementById("message");
    msg.style.display = "none";

    var img= document.getElementById("image");
    img.style.display = "none";

}

function showImage() {
    // var img= document.getElementById("image");
    // img.style.visibility = (visible ? 'visible' : 'hidden');
    // document.getElementById("image").style.visibility = "visible";
    var x = document.getElementById("image");
    x.style.display= "flex";
    
}

