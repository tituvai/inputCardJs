// 1st Part 
let inputValue = document.getElementById("inputValue")
let inputPage = document.getElementById("inputPage")
let pustAll = document.getElementById("pustAll")
let submitBtn = document.getElementById("submitBtn")
let inputError = document.getElementById("inputError")

// 2nd Part 

let arr = []


// 3rd Part 
function display(){
    pustAll.innerHTML = ""
    arr.map((item, index)=>{
        pustAll.innerHTML += `<div class="col-lg-3">
            <div class="card mt-5" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <a href="#" class="btn btn-primary">Edit</a>
                <a href="#" class="btn btn-danger" onclick = "deleteItem(${index})">Delete</a>
            </div>
            </div> 
        </div>` 
    })
}



// 4th Part 

submitBtn.addEventListener("click", function(){
    if(inputValue.value === "" && inputPage.value === ""){
        inputError.innerHTML = "places enter your name & description"
    }
    else{
         arr.push({
        name:inputValue.value ,
        description:inputPage.value
    })
    display()
    }
   

    inputValue.value =""
    inputPage.value =""
})


function deleteItem(index){
    arr.splice(index, 1)
    display()
}


