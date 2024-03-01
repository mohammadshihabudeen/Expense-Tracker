import { View ,Text} from "react-native"
import { useContext, useState ,useEffect} from "react";
import { getDateMinusDays } from "../util/date";
import { ExpensesContext } from "../store/expenses-context";
import ErrorOverlay from "../components/ui/ErrorOverLay";
export default RecentExpenses = () =>{
  const [isFetching,setIsFetching] = useState(true)
  const [error,setError] = useState('')
  const expensesCtx = useContext(ExpensesContext);
  useEffect(()=>{
      async function fetchExpenses(){
        try{
          const expenses = await getExpenses()
          expensesCtx.setExpense(expenses)
        }
        catch(error)
        {
          setError('Could not fetch expenses!');
        }
        setIsFetching(false)
      } 
      fetchExpenses()
  },[])

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }
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