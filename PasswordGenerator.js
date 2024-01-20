function StrongPassword(){
    let Schar = "abcdefghijklmnopqrstuvwxyz"
    let Bchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let number = "1234567890"
    let SPchar = "!@#$%^&*()_+><.,[]|?"

    let length = 10
    let newPassword = null;
    for(let i = 0; i < length; i++){
        let rand1 = Number.parseInt(Math.random() * 4)
        let list = [SPchar, Schar, number, Bchar]

        let randvar = list[rand1]

        let rand2 = Number.parseInt(Math.random() * randvar.length)
        newPassword = newPassword + randvar.charAt(rand2)
    }
    let newStrongPassword  = newPassword.substring(4)
    
    let password = document.getElementById("Password")
    password.innerHTML = newStrongPassword

}

function SuperStrongPassword(){

    let Schar = "abcdefghijklmnopqrstuvwxyz"
    let Bchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let number = "1234567890"
    let SPchar = "!@#$%^&*()_+><.,[]|?"

    let length = 13
    let newPassword = null;
    for(let i = 0; i < length; i++){
        let rand1 = Number.parseInt(Math.random() * 4)
        let list = [SPchar, Schar, number, Bchar]

        let randvar = list[rand1]

        let rand2 = Number.parseInt(Math.random() * randvar.length)
        newPassword = newPassword + randvar.charAt(rand2)
    }
    let newSuperStrongPassword  = newPassword.substring(4)
    
    let password = document.getElementById("Password")
    password.innerHTML = newSuperStrongPassword
}

function WeekPassword(){
    let Schar = "abcdefghijklmnopqrstuvwxyz"
    let Bchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let number = "1234567890"
    let SPchar = "!@#$%^&*()_+><.,[]|?"

    let length = 7
    let newPassword = null;
    for(let i = 0; i < length; i++){
        let rand1 = Number.parseInt(Math.random() * 4)
        let list = [SPchar, Schar, number, Bchar]

        let randvar = list[rand1]

        let rand2 = Number.parseInt(Math.random() * randvar.length)
        newPassword = newPassword + randvar.charAt(rand2)
    }
    let newWeekPassword  = newPassword.substring(4)
    
    let password = document.getElementById("Password")
    password.innerHTML = newWeekPassword
}


function check_strength(){

let Schar = "abcdefghijklmnopqrstuvwxyz"
let Bchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let number = "1234567890"
let SPchar = "!@#$%^&*()_+><.,[]|?"

let list = [Schar, number, Bchar]

let password1 = document.getElementById("CheckPassword")
let password = password1.value

let score = 0

for(let i = 0; i < password.length-3; i++){

    list.forEach((ele) => {
        for(let j = 0; j < ele.length; j++){
            if(password.charAt(i) == ele.charAt(j)){
                for(let k = 0; k < ele.length; k++){
                    if(password.charAt(i+1) == ele.charAt(k)){
                        for(let l = 0; l < ele.length; l++){
                            if(password.charAt(i+2) == ele.charAt(l)){
                                score = score-2
                            }
                        }
                    }
                }
            }
        }
    })
    
}

for(let i = 0; i < password.length-3; i++){

    
        for(let j = 0; j < SPchar.length; j++){
            if(password.charAt(i) == SPchar.charAt(j)){
                score = score+2
                for(let k = 0; k < SPchar.length; k++){
                    if(password.charAt(i+1) == SPchar.charAt(j)){
                        score = score+2
                        for(let l = 0; l < SPchar.length; l++){
                            if(password.charAt(i+2) == SPchar.charAt(j)){
                                score = score+2
                            }
                        }
                    }
                }
            }
        }
    
    
}


for(let i = 0; i < password.length; i++){

    list.forEach((ele) => {
        for(let j = 0; j < ele.length; j++){
            if(password.charAt(i) == ele.charAt(j)){
                
                    if(password.charAt(i+1) == ele.charAt(j+1)){
                        score = score-2
                        
                            if(password.charAt(i+2) == ele.charAt(j+1)){
                                score = score-2
                                break;
                            }
                        
                    }
                
            }
        }
    })
    
}

if(password.length <= 7){
    score = score - 2
}

if(score < 0){
    let res = document.getElementById("result")
    res.style.width = "200px"
    res.style.height = "50px"
    res.style.background = "#c1121f"
    let text = document.getElementById("status")
    text.innerHTML = "WEEK"
    text.style.color = "white" 
    text.style.textAlign = "center"
}
else if(score == 0){
    let res = document.getElementById("result")
    res.style.width = "200px"
    res.style.height = "50px"
    res.style.background = "#ff9f1c"
    //res.appendChild(document.createTextNode("Medium"))
    let text = document.getElementById("status")
    text.innerHTML = "MEDIUM"
    text.style.color = "white" 
    text.style.textAlign = "center"

}
else{
    let res = document.getElementById("result")
    res.style.width = "200px"
    res.style.height = "50px"
    res.style.background = "#7ae582"
    //res.appendChild(document.createTextNode("Strong"))
    let text = document.getElementById("status")
    text.innerHTML = "STRONG"
    text.style.color = "white" 
    text.style.textAlign = "center"

}



}
