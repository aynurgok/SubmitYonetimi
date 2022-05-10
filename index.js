let formDOM=document.querySelector("#userForm")
formDOM.addEventListener("submit",formSubmit)

const alertDOM=document.querySelector("#alert")
const alertFunction=( title,message,className="warning")=>`
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`


function formSubmit(event) {
    event.preventDefault()
    let USER_NAME=document.querySelector("#userName")
    let NUMBER=document.querySelector("#number")
   
   console.log("çalıştı")
   if(USER_NAME.value && NUMBER.value){
    addItem(USER_NAME.value , NUMBER.value)
    USER_NAME = ""
    NUMBER = ""
   }else {
      alertDOM.innerHTML=alertFunction(
          "Başlik bilgisi",
          "Eksik bilgi girdiniz",
          "success")
   }
    
}

let userListDOM=document.querySelector("#userList")
const addItem = (username,number) => {
    let liDOM=document.createElement("li")
    liDOM.innerHTML=`${username}
    <span class="badge bg-primary rounded-pill">${number}</span>
    `
    liDOM.classList.add('list-group-item' , 'd-flex', 'justify-content-between' ,'align-items-center')
    userListDOM.append(liDOM)

    
}
























// let formDOM=document.querySelector("#userForm")

// formDOM.addEventListener("submit",formSubmit)

// function formSubmit(event) {
//     event.preventDefault() //default işelmi engelledik. 
//     const USER_NAME=document.querySelector("#userName")
//     const SCORE=document.querySelector("#score")
//     addItem(USER_NAME.value , SCORE,value)
// }



// let userListDOM=document.querySelector("#userList")

// const addItem = (_userName,score) => {
//     let liDOM=document.createElement("li")
//     liDOM.innerHTML=`${username} ${score}`
//     userListDOM.append(liDOM)

// }