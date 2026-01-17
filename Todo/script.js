document.addEventListener('DOMContentLoaded', () => {

const todoInput= document.getElementById("todo-input")
const addTaskButton = document.getElementById("add-task-btn")
const todoList= document.getElementById("todo-list")

let tasks= JSON.parse(localStorage.getItem("task")) || [];
tasks.forEach((task) => {
	renderTask(task)
})

addTaskButton.addEventListener('click', () => 
{
  const taskText= todoInput.value.trim();
  if (taskText == '') return ;
  
  const details = {
    id : Date.now(),
    task: taskText,
    completed: false
  }

  tasks.push(details);
  saveTask();
  renderTask(details);
  todoInput.value='';
   
})

function saveTask() {
	localStorage.setItem("task", JSON.stringify(tasks))
}

function renderTask(task){                                        //it can be used for both like for first time opening and new task inserting
		const li = document.createElement('li');
		li.setAttribute("data-id", task.id);
		if (task.completed) li.classList.add('completed');
		li.innerHTML= `<span>${task.task}</span>
		<button>delete</button>`
		todoList.appendChild(li)

		li.addEventListener('click', (e) => {
			if(e.target.tagName === 'BUTTON') return ;
			task.completed= !task.completed;
			li.classList.toggle('completed');
			saveTask();
		});


		li.querySelector('button').addEventListener('click', (e)=> {
			e.stopPropagation();
			tasks=tasks.filter((t) => {
					t.id !== task.id;
			})
			li.remove();
			saveTask();
		})


}
});