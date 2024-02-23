import { FlatList } from "react-native-gesture-handler"
import ListItem from "./ListItem"
function renderExpenseItem(itemData) {
    return <ListItem {...itemData.item} />;
  }

export default ExpensesList = ({expenseData}) =>{
    return (
        <FlatList data={expenseData} 
        keyExtractor={(itemData)=>{
          return  itemData.id
        }}
        renderItem={renderExpenseItem}

        />
    )
}