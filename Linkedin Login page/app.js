// Author Robera Insarmu
// Date Jun 24, 2022
// Address: Jimma, Ethiopia
const showBtn = document.querySelector(".show-btn")
const pwd = document.querySelector(".pwd")
const email = document.querySelector(".email")
const label1 = document.querySelector(".label1")

const label2 = document.querySelector(".label2")

const body = document.querySelector("body")
// console.log(pwd)
// 

showBtn.addEventListener("click", show)
// email.addEventListener("click", activeLabel1)
// pwd.addEventListener("click", activeLabel2)
body.addEventListener("click", activeLabel)
function show(e){
    if(pwd.type === "password"){
    pwd.type = "text"
    showBtn.textContent="Hide"
    console.log(pwd)}
    else{
        pwd.type = "password" 
        showBtn.textContent="Show" 
        console.log(pwd)
    }
    console.log(e)
}
function activeLabel(e){
  console.log(e.target)
  if(e.target.classList.contains("email")){
    console.log("Email")
    activeLabel1()
  }
  if(e.target.classList.contains("pwd")){
    console.log("pwd")
    activeLabel2()
  }
  else{

  }
}

function activeLabel1(){
        // console.log(label)
  
      if(email.value !== ""&&pwd.value!== ""){
            label1.classList.add("active-label")
            label2.classList.add("active-label")
      }
      else if(email.value !== ""&&pwd.value== ""){
        label2.classList.remove("active-label")
        label1.classList.add("active-label")
      }
      else if(pwd.value !== ""&&email.value== ""){
        label2.classList.add("active-label")
        label1.classList.add("active-label")
      }
      else{
        label2.classList.remove("active-label")
        label1.classList.add("active-label")
      }
        
}

function activeLabel2(){
  if(email.value !== ""&&pwd.value!== ""){
    label1.classList.add("active-label")
    label2.classList.add("active-label")
    }
  else if(pwd.value !== ""&&email.value== ""){
  label1.classList.remove("active-label")
  label2.classList.add("active-label")
  }
  else if(email.value !== ""&&pwd.value== ""){
      label1.classList.add("active-label")
      label2.classList.add("active-label")
      }
  else{
  label1.classList.remove("active-label")
  label2.classList.add("active-label")
  }
}

