<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul id="list">
    <li id="htm">HTML</li>
    <li id="js">JS</li>
    <!-- <li>R prog.</li> -->
    
  </ul>
  <script>
    const list = document.getElementById("list")
    // const l1 =  document.createElement("li")
    // const l2 =  document.createElement("li")

    // // <li>JS</li>
    // l1.innerText = "JS"

    // // appendChild -> Last m add krta hai !!
    // // syntax 
    // // parent.appendChild(ele)
    // list.appendChild(l1)
    // l2.innerText = "R prog."
    // list.appendChild(l2)


    // const l3 = document.createElement("li")
    // l3.innerText = "MERN"
    // const l4 = document.createElement("li")
    // l4.innerText = "Node"
    // const l5 = document.createElement("li")
    // l5.innerText = "React"
    // const l6 = document.createElement("li")
    // l6.innerText = "DOM"

    // list.append(l3,l4,l5,l6)
    // list.appendChild(l3,l4,l5,l6)

    // insertBefore
    // parent.insertBefore(newEle, referenceEle)
    const li = document.createElement("li")
    li.innerText = "CSS"

    const js = document.getElementById("js")
    const htm = document.getElementById("htm")

    // const random = list.children[0]

    // list.insertBefore(li,random)

  </script>
</body>
</html>

