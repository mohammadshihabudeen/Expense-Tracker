import { useEffect ,useState} from "react"
import { View ,Text} from "react-native"
import ExpensesOutput from "../components/ExpensesOutput"
import { useContext } from "react"
import { ExpensesContext } from "../store/expenses-context"
import { getExpenses } from "../util/http"
import LoadingOverLay from "../components/ui/LoadingOverLay"
export default AllExpenses = () =>{
    const [isFetching,setIsFetching] = useState(true)
    const expensesCtx = useContext(ExpensesContext);
    useEffect(()=>{
        async function fetchExpenses(){
          const expenses = await getExpenses()
          setIsFetching(false)
          expensesCtx.setExpense(expenses)
        } 
        fetchExpenses()
    },[])
    if (isFetching)
    {
        return <LoadingOverLay />
    }
    return (
            <ExpensesOutput 
            expenses={expensesCtx.expenses}
            expensesPeriod="Total"
            fallbackText="No registered expenses found!"
            />
    )
}