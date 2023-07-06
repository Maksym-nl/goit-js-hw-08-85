import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form')

form.addEventListener('input', throttle(onInput, 500))
form.addEventListener('submit', onSubmit)

const STORAGE_KEY = "feedback-form-state"

const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}

onLoad()

function onInput(event){
data[event.target.name] = event.target.value
localStorage.setItem(STORAGE_KEY,JSON.stringify(data))
}


function onSubmit(event){
    event.preventDefault()
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    localStorage.removeItem(STORAGE_KEY)
    form.reset()
    }

function onLoad(){
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if(!storageData){
        return
    }
    const {email, message} = form.elements
    email.value = storageData.email
    message.value = storageData.message
}
