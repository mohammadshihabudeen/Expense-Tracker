import { View ,Text} from "react-native"
import { useContext } from "react";
import { getDateMinusDays } from "../util/date";
import { ExpensesContext } from "../store/expenses-context";
export default RecentExpenses = () =>{
    const expensesCtx = useContext(ExpensesContext);

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
      const today = new Date();
      const date7DaysAgo = getDateMinusDays(today, 7);
  
      return expense.date >= date7DaysAgo && expense.date <= today;
    });
    return (
            <ExpensesOutput 
            expenses={recentExpenses}
            expensesPeriod="Last 7 Days"
            fallbackText="No expenses registered for the last 7 days."
            />
    )
}