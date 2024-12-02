const body = document.getElementsByTagName('body')[0]

function changeColor(color){
    body.style.backgroundColor = color;
}

changeColor('red');

function getRandomColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;}


function changeRandomColor(){
    const randomColor = getRandomColor();
    changeColor(randomColor);
}

changeRandomColor();
