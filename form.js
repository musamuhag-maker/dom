


const formBtn = document.querySelector("button")


formBtn.addEventListener('click', function(){
    const inputs = document.querySelectorAll('input')
    const email = inputs[0].value
    const password = inputs[1].value

    if(!email){
        alert("Email required!")
    }else if(!password){
         alert("Password required!")
    }else if(!email.endsWith("@gmail.com")){
        alert("Invalid Email")
    }else if(password.length < 10){
        alert("Password can not be less than 10 characters")
    }else{
        // alert("Hurray!")
        formBtn.textContent = "please wait..."
        setTimeout(()=>{
             window.location.href = "discount.html"
        }, 5000)
       
    }


})