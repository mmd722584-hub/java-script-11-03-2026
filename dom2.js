//==========Arrow Function==========

// murshid() =()=>{

// }

// let app=(a,b)=>{

//     return a*b
// }

// console.log( app(8,6)+1)
// console.log( app(8,6)+2)
// console.log( app(8,6)+3)
// console.log( app(8,6)+4)




    let add = () =>{
        let num1= document.querySelector('#num1').value 
        let num2 = document.querySelector('#num2').value 

        document.querySelector('#show').innerHTML = Number(num1)+ Number(num2)
    }
    add()

    let sub = () =>{
        let num1= document.querySelector('#num1').value 
        let num2 = document.querySelector('#num2').value 

        document.querySelector('#show').innerHTML = Number(num1)- Number(num2)
    }

    let mul = () =>{
        let num1= document.querySelector('#num1').value 
        let num2 = document.querySelector('#num2').value 

        document.querySelector('#show').innerHTML = Number(num1) * Number(num2)
    }
    let div = () =>{
        let num1= document.querySelector('#num1').value 
        let num2 = document.querySelector('#num2').value 

        document.querySelector('#show').innerHTML = Number(num1)/ Number(num2)
    }

    let per = () =>{
        let num1= document.querySelector('#num1').value 
        let num2 = document.querySelector('#num2').value 

        document.querySelector('#show').innerHTML = Number(num1) / Number(num2) *100
    }


