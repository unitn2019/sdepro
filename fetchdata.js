const allExpenses = () => {
    fetch('/http://localhost:3000/api/expenses/')
    .then(res => res.json())
   .then(expenses =>console.log(expenses))
}

 const allExpenses = async () => {
      console.log(await (await fetch('/http://localhost:3000/api/expenses/')).json())
      

}