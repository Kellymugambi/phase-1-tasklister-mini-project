document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit",function(e){
    e.preventDefault()
    handletasks(e.target.new_task_description.value)
    form.reset()
  })
  
});
function handletasks(new_task_description){
 let p = document.createElement('p')
 let btn = document.createElement('button')
 btn.addEventListener("click", handledelete)
 btn.textContent = 'x'
 p.textContent = `${new_task_description} `
 p.appendChild(btn)
 console.log(p)
 document.querySelector('#tasks').appendChild(p)

}

function handledelete(e){
  e.target.parentNode.remove()
}