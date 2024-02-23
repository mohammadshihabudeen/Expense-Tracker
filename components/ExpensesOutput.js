import { StyleSheet, View } from "react-native"
import ExpensesList from "./ExpensesList"
import ExpensesSummary from "./ExpensesSummary"
import { GlobalStyles } from "../constants/styles"
const DUMMY_TABLE = [
    {
        id : "e1",
        description : "crock shoes",
        amount : 60,
        date : new Date('2021-12-19')
    },
    {
        id : "e2",
        description : "linen shirt",
        amount : 70,
        date : new Date('2021-12-17')
    },
    {
        id : "e3",
        description : "wool socks",
        amount : 15,
        date : new Date('2022-01-05')
    },
    {
        id : "e4",
        description : "leather belt",
        amount : 25,
        date : new Date('2022-01-08')
    },
    {
        id : "e5",
        description : "denim jeans",
        amount : 90,
        date : new Date('2022-01-15')
    },
    {
        id : "e6",
        description : "cotton t-shirt",
        amount : 30,
        date : new Date('2022-01-22')
    },
    {
        id : "e7",
        description : "wool sweater",
        amount : 80,
        date : new Date('2022-01-25')
    },
    {
        id : "e8",
        description : "canvas backpack",
        amount : 50,
        date : new Date('2022-02-02')
    },
    {
        id : "e9",
        description : "silk scarf",
        amount : 40,
        date : new Date('2022-02-05')
    },
    {
        id : "e10",
        description : "fleece jacket",
        amount : 120,
        date : new Date('2022-02-10')
    }
];


export default ExpensesOutput = () =>{
    return (
        <View style={styles.container}>
        <ExpensesSummary data={DUMMY_TABLE} days="7" />
        <ExpensesList expenseData={DUMMY_TABLE} />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingHorizontal: 24,
            paddingTop: 24,
            paddingBottom: 0,
            backgroundColor: GlobalStyles.colors.primary700
          }
    }
)