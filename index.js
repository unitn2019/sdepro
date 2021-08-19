const express = require('express');
const app = express();
app.use(express.json());
const port=3000;



//READ Request Handlers
app.get('/', (req, res) => {
  res.send('Welcome to DW Track Expense REST API with Node.js Tutorial!!');
});

//Expenses
app.get('/api/expenses', (req, res) => {
  res.send(expenses);
});
/*
app.get('/api/expenses/:_id', (req, res) => {
   const expense =expenses.find(c =>c.id == parseInt(req.params.id));
   if (!expense) res.status(404).send('The expense does not was not found')
  res.send(expense);
});
*/

app.get('/api/expense/:exepnseId', (req, resp) => {
  const expense = Expense.fromId(parseInt(req.params.expenseId))
  if (expense) {
      return resp.send(expense)
  } else {
      resp.status(404).send('expense not found')
  }
})


app.get('/api/expenses/:week/:day', (req, res) => {
  res.send(req.params);
});

app.put('/api/expense/:expenseId/:week/:day', async (req, resp) => {
  const expense = Expense.fromId(parseInt(req.params.expenseId))
  if (expense) {
      const dateTime = DateTime.local(
          parseInt(req.params.week),  parseInt(req.params.day))
      // check if the provided date makes sense
      if (dateTime.isValid) {
          return resp.send(await expense.set(
             dateTime.week, dateTime.day, req.body))
      } else {
          resp.status(400).send(`Provided date not valid: ${dateTime.invalidReason}`)
      }
  } else {
      resp.status(404).send('expense not found')
  }
})

//categories
app.get('/api/categories', (req, res) => {
  res.send(categories);
});

//date
app.get('/api/dates', (req, res) => {
  res.send(dates);
});


//Data
const expenses = [
  {
    "itemAmount": 800,
    "expenseDate": "22.05.2021",
    "itemName": "Harry Potter Book 1",
    "category": "Education",
    "Day":"Monday",
    "Week":"1",
    "_id": "01"
  },
  {
    "itemAmount": 3000,
    "expenseDate": "02.04.2021",
    "itemName": "School Fee",
    "category": "Bills",
    "_id": "02"
  },
  {
    "itemAmount": 800,
    "expenseDate": "02.04.2021",
    "itemName": "Harry Potter Book 1",
    "category": "Education",
    "_id": "03"
  },
  {
    "itemAmount": 4000,
    "expenseDate": "02.04.2021",
    "itemName": "Bought Many Vegetables",
    "category": "Vegetables",
    "_id": "04",
    "day1": "Monday",
  },
  {
    "itemAmount": 450,
    "expenseDate": "10.01.2021",
    "itemName": "Grocery",
    "category": "Dairy",
    "_id": "05",
    "day1": "Monday",
  }
]

const categories = [
  {
    "value": "fruits",
    "label": "Fruits",
    "_id": "5e8430284b25ad1da893b5e1"
  },
  {
    "value": "vegetables",
    "label": "Vegetables",
    "_id": "5e84302e4b25ad1da893b5e3"
  },
  {
    "value": "electricity",
    "label": "Electricity",
    "_id": "5e84b6acb8ce720944f61fb2"
  },
  {
    "value": "bills",
    "label": "Bills",
    "_id": "5e84b6b2b8ce720944f61fb4"
  },
  {
    "value": "grocery",
    "label": "Grocery",
    "_id": "5e84b6b6b8ce720944f61fb6"
  },
  {
    "value": "diary",
    "label": "Diary",
    "_id": "5e84b6bab8ce720944f61fb8"
  },
  {
    "value": "rent",
    "label": "Rent",
    "_id": "5e84b6bfb8ce720944f61fba"
  },
  {
    "value": "sports",
    "label": "Sports",
    "_id": "5e84b6c8b8ce720944f61fbc"
  },
  {
    "value": "education",
    "label": "Education",
    "_id": "5e84b6ceb8ce720944f61fbe"
  },
  {
    "value": "school",
    "label": "School",
    "_id": "5e85dcbc8dbd303d54611271"
  }
]

const dates = [
  {
    "day1": {
      "name": "Monday",
      "id": "001",
      "week":"01"
           },

    "day2": {
        "name": "Tuesday",
        "id": "002",
        "week":"01"
             },
                 
    "day3": {
          "name": "Wensday",
          "id": "003",
          "week":"03"
          },
                       
    "day4": {
            "name": "Thursday",
            "id": "004",
            "week":"01"
                  },
    "day5": {
            "name": "Friday",
            "id": "005",
            "week":"06"
                 },

    "day6": {
            "name": "saturday",
            "id": "006",
            "week":"01"
                },

     "day7": {
            "name": "sunday",
            "id": "007",
            "week":"03",
                  }
                }
      ]
      

//const port = process.env.PORT || 3000;
app.listen(3000, () => console.log('Listening at port 3000...'));
