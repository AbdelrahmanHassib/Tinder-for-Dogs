import {getNewDog} from "./index.js"
export default class Dog {
    constructor(data) {
        Object.assign(this, data)
        this.likes = this.likes.bind(this)
        this.swipes = this.swipes.bind(this)
    }
    
    render() {
        const {name, avatar, age, bio} = this
        document.getElementById("main-img-container").innerHTML = `
        <img class="main-img" src="${avatar}"/>
        <p class="first-floating-para">${name}, ${age}</p>
        <p class="second-floating-para">${bio}</p>
`
    }
    likes() {
        const {name, avatar, age, bio} = this 
        document.getElementById("main-img-container").innerHTML = 
        `
        <img class="main-img" src="${avatar}"/>
        <img class="badge-img" src="./images/badge-like.png"/>
        <p class="first-floating-para">${name}, ${age}</p>
        <p class="second-floating-para">${bio}</p>
        `
        this.hasBeenSwiped = true
        this.hasBeenLiked = true
        getNewDog()
    }
    swipes() {
        const {name, avatar, age, bio} = this         
        document.getElementById("main-img-container").innerHTML = 
        `
        <img class="main-img" src="${avatar}"/>
        <img class="badge-img" src="./images/badge-nope.png"/>
        <p class="first-floating-para">${name}, ${age}</p>
        <p class="second-floating-para">${bio}</p>
        `
        this.hasBeenSwiped = true
        getNewDog() 
    }
}