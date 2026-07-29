const form = document.getElementById('studentForm')
const studentList = document.getElementById('studentList')


const users = []


form.addEventListener('submit',function(e){
  e.preventDefault();

    const user = {
    name : document.getElementById('name').value,
    age : document.getElementById('age').value,
    email : document.getElementById('email').value
  }


  users.push(user)
  console.log(users)

  studentList.innerHTML = ""

  users.forEach(function(student){
    studentList.innerHTML += `
    <li>
      ${student.name} | 
      ${student.age} |
      ${student.email}
    </li>
    `
  })

  form.reset()
})



<ul id="studentList">
  <li></li>
</ul>

// John | 20 | john@mail.com 

// John | 20 | john@mail.com 
// Emma | 22 |

[
  {

  },
  {

  },
  {

  },
  {

  },
  {

  }
]
