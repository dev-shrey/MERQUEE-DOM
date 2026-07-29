const container = document.getElementById("container")
const result = document.getElementById("result")


// Update student count 
function updateCount(){
  result.innerText = "Total Students :" + container.children.length
}

updateCount()


// Delete card

const deleteButtons  = document.querySelectorAll(".deleteBtn")

for(let button of deleteButtons){
  button.addEventListener("click",function(){
    this.closest(".card").remove()
    updateCount()
  })
}


// fav card

const favCard = document.querySelectorAll(".favoriteBtn")

for (let button of favCard){
  button.addEventListener("click",function(){
    this.closest(".card").classList.add("fav")
  })
}


// next student 
// nextelementsibling

const nextBtn = document.querySelectorAll(".nextBtn")

for(let button of nextBtn){
  button.addEventListener("click",function(){
    let currCard = this.closest(".card")
    let nextCard = currCard.nextElementSibling
    // console.log(nextCard)

    if(nextCard){
      alert("Next Student : "+ nextCard.children[1].innerText)
    }
    else{
      alert("No next student")
    }
  })
}





const prevBtn = document.querySelectorAll(".prevBtn")

for(let button of prevBtn){
  button.addEventListener("click",function(){
    let currCard = this.closest(".card")
    let prevCard = currCard.previousElementSibling
    // console.log(nextCard)

    if(nextCard){
      alert("Previous Student : "+ prevCard.children[0].innerText)
    }
    else{
      alert("No previous student")
    }
  })
}


const firsBtn = document.getElementById("firstBtn")

firsBtn.addEventListener("click",function(){
  let firstStudent = container.firstElementChild
  alert(firstStudent.children[0].innerText)
})


const lastBtn = document.getElementById("lastBtn")

firsBtn.addEventListener("click",function(){
  let lastStudent = container.lasttElementChild
  alert(lastStudent.children[0].innerText)
})


