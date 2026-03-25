function changecolor(color){
    let text= document.querySelector('#box')
    text.style.backgroundColor= color;
}

   let num = 0;
function increase(){
    num++;
    let text= document.querySelector('#count');
    text.innerHTML= num

}
function decrease() {
    num--;
    let Text= document.querySelector('#count');
    Text.innerHTML= num
}

function reset(){
    num = 0
    let text1= document.querySelector('#count')

    text1.innerHTML= num
}
