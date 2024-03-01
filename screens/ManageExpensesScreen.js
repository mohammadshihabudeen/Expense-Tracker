import { View ,Text ,StyleSheet} from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useEffect, useLayoutEffect, useState } from "react";
import { useContext } from "react";
import IconButton from "../components/ui/IconButton";
import Button from "../components/ui/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/manageExpenses/ExpenseForm";
import { storeExpenses ,getExpenses, updateExpenses, deleteExpenses} from "../util/http";
import LoadingOverLay from "../components/ui/LoadingOverLay";
export default ManageExpenses = ({route, navigation}) =>{
    const [isUpdating,setIsUpdating] = useState(false)
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;
    const expensesCtx = useContext(ExpensesContext);
    const selectedExpense = expensesCtx.expenses.find((expense)=>
    {
      return expense.id == editedExpenseId
    })

    useLayoutEffect(() => {
      navigation.setOptions({
        title: isEditing ? 'Edit Expense' : 'Add Expense',
      });
    }, [navigation, isEditing]);
  
    async function deleteExpenseHandler() {
      expensesCtx.deleteExpense(editedExpenseId);
      setIsUpdating(true)
      await deleteExpenses(editedExpenseId)
      setIsUpdating(false)
      navigation.goBack();
    }
  
    function cancelHandler() {
      navigation.goBack();
    }
  
    async function confirmHandler(expenseData) {
      if (isEditing) {
        expensesCtx.updateExpense(
          editedExpenseId,
          expenseData
        );
        setIsUpdating(true)
        await updateExpenses(editedExpenseId,expenseData)
        setIsUpdating(false)
      } else {
        const id = await storeExpenses(expenseData)
        expensesCtx.addExpense({...expenseData,id:id});
      }
      navigation.goBack();
    }
    if (isUpdating){
      return <LoadingOverLay />
    }
  
    return (
      <View style={styles.container}>
        <ExpenseForm editingLabel={isEditing ? 'Update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        selected={selectedExpense}
        />
        {isEditing && (
          <View style={styles.deleteContainer}>
            <IconButton
              icon="trash"
              color={GlobalStyles.colors.error500}
              size={36}
              onPress={deleteExpenseHandler}
            />
          </View>
        )}
      </View>
    );
  }
  
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: GlobalStyles.colors.primary800,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      minWidth: 120,
      marginHorizontal: 8,
    },
    deleteContainer: {
      marginTop: 16,
      marginHorizontal:10,
      paddingTop: 8,
      borderTopWidth: 2,
      borderTopColor: GlobalStyles.colors.primary200,
      alignItems: 'center',
    },
  });