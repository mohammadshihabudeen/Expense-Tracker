import { View ,Text} from "react-native"
import ExpensesOutput from "../components/ExpensesOutput"
import { useContext } from "react"
import { ExpensesContext } from "../store/expenses-context"
export default AllExpenses = () =>{
    const expensesCtx = useContext(ExpensesContext);

    return (
            <ExpensesOutput 
            expenses={expensesCtx.expenses}
            expensesPeriod="Total"
            fallbackText="No registered expenses found!"
            />
    )
}