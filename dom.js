// function sid(){

//     alert("hello murshid")
//     //let text= document.getElementById('text1')

//     //let text= document.getElementsByClassName('text1')

//     let Text= document.querySelector('.text1')

//     Text.innerHTML="this <i> text </i> is from js"


//     Text.style.color="red"
     


// }


// function ajay(){

// }


function sid(){
    let Value= document.querySelector('#murshid1')

    Value.style.display="none"

} 
function showtext (){
    let Value=document.querySelector('#murshid1')
    Value.style.display= "block"
    Value.style.color="white"
    Value.style.backgroundColor="green"
}


let c= 0

function inc(){
    let text= document.querySelector('#text')

    c++  //c+1
    text.innerHTML=c
}

function dec(){
    let text= document.querySelector('#text')

   

    if(c<=0){
        return
    }

    c-- // c-1
    text.innerHTML=c
}

function showImage(){
    let box = document.querySelector('#box');
    box.innerHTML = '<img src="doctor.webp" style="width:100%; height:100%;">';
}























    