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







    // form


    let validate = ()=>{
    let nameval= document.querySelector('#name').value.trim()

     let errname =document.querySelector("#errname")

     if(nameval==''){
        errname.innerHTML= "Please enter Name"

        return false
     }

    
        let num1 =document.querySelector("#num").value.trim()
        let errnum=document.querySelector("#errnum")

        if (num1== ''){
            errnum.innerHTML= "Please enter number"

            return false
        }

        let mail=document.querySelector("#email").value.trim()
        let erremail =document.querySelector("#erremail")

        if (mail== ''){
            erremail.innerHTML= "Please enter email"

            return false
        }

        let pass= document.querySelector("#pass").value.trim()
        let errpass =document.querySelector("#errpass")

        if (pass== ''){
            errpass.innerHTML= "Please enter password"

            return false
        }

        let pasword =document.querySelector("#cpass").value.trim()
        let errcpass= document.querySelector("#errcpass")

        if(pasword==''){
            errcpass.innerHTML= "Please enter confirm password"
            return false
        }



        if (num.length !=10){

            errnum.innerHTML= "Please enter 10 digits only"
            return false 
        }

        else if ( isNaN(num))     // alphabates true
        {
            errnum.innerHTML="Please enter valid number"
            return false
        }
        if (!(email.includes("@") && email.includes('.com'))){
            erremail.innerHTML="Please enter valid eamil"
            return false
        }

        if( ! (pass.match(/[1234567890]/) && 
        pass.match(/[!@$%$#^*&]/) &&
        pass.match(/[A-Z]/) &&
        pass.match(/[a-z]/)) ){
            errpass.innerHTML="Please enter strong pass"
            return false
        }
    

    }


    
    