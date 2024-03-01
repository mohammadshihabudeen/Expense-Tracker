import axios from "axios";
const BACKEND_URL = 'https://expens-tracker-476c6-default-rtdb.firebaseio.com/'
export async function storeExpenses(expenseData)
{
    const response = await axios.post(BACKEND_URL+'expense.json',expenseData)
    return response.data.id
}

export async function getExpenses()
{
    const expenses = []
    const response = await axios.get(BACKEND_URL+"expense.json")
    for (const key in response.data)
    {
        const expenseObj = {
            id : key,
            amount : response.data[key].amount,
            date : new Date(response.data[key].date),
            description: response.data[key].description
        }
        expenses.push(expenseObj)
    }
    return expenses
}

export  function updateExpenses(id,expenseData)
{
    axios.put(BACKEND_URL+`expense/${id}.json`,expenseData)
}

export  function deleteExpenses(id)
{
    axios.delete(BACKEND_URL+`expense/${id}.json`)
}