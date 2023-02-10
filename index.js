import dogs from "./data"
import Dog from "./Dog"

export function getNewDog() {
    if (dogs.length > 0) {
        const rex = new Dog(dogs.shift())
        if (dogs.length === 2) {
            rex.render()
        } else {
            setTimeout(function(){
                rex.render()
            },1500) 
        }
        
        document.getElementById("heart-icon-div").addEventListener("click", rex.likes)
        document.getElementById("cross-icon-div").addEventListener("click", rex.swipes)
    }
    
}

getNewDog()
