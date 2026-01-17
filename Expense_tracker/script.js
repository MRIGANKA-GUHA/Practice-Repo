document.addEventListener('DOMContentLoaded', () => {
  const expenseform = document.getElementById('expense-form')
  const expensename = document.getElementById('expense-name')
  const expenseamount = document.getElementById('expense-amount')
  const submitbtn = document.getElementById('submit-btn')
  const expenselist = document.getElementById('expense-list')
  const totalamount = document.getElementById('total-amount')

  let expenses= JSON.parse(localStorage.getItem("expense")) || [];
  let total= calculateTotal();

  renderExpenses();
  updateTotal();

  submitbtn.addEventListener('click', () => {
    const name= expensename.value.trim();
    const amount= parseFloat(expenseamount.value.trim());
    if (name!== "" && !isNaN(amount) && amount > 0){
      const details= {
        id : Date.now(),
        name: name,
        amount: amount
      };
      expenses.push(details);
    }
    addExpenses();
    renderExpenses();
    updateTotal();
})

function addExpenses(){
  localStorage.setItem("expense", JSON.stringify(expenses));
    }
function calculateTotal(){
  return expenses.reduce((sum, details) => sum+ details.amount, 0);

}

function renderExpenses(){
  expenselist.innerHTML="";
  expenses.forEach((expense) => {
    const li= document.createElement("li");
    li.innerHTML= `${expense.name} - $${expense.amount}
    <button data-id="${expense.id}">Delete</button>`;
    expenselist.appendChild(li);
  })
}

function updateTotal(){
  total= calculateTotal();
  totalamount.textContent= total.toFixed(2);
}

 expenselist.addEventListener('click', (e) => {
 if(e.target.tagName === 'BUTTON')
 {
  const expenseid= parseInt(e.target.getAttribute("data-id"));
  expenses= expenses.filter((expense) => expense.id !== expenseid);
 
  addExpenses();
  renderExpenses();
  updateTotal();

 }

 })




})