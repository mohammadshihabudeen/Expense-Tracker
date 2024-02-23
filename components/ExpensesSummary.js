import { Text, View , StyleSheet } from "react-native"
import { GlobalStyles } from "../constants/styles";

export default ExpensesSummary = ({data,days}) =>{

    const amount = data.reduce((sum, expense) => {
        return sum + expense.amount;
      }, 0);

    return (
       <View style={styles.container}>
        <Text style={styles.text}>
            Total Amount:
        </Text>
        <Text style={styles.text}>
            ${amount.toFixed(2)}
        </Text>
       </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 10,
            padding: 20,
            backgroundColor: GlobalStyles.colors.primary50,
            borderRadius: 5,
            elevation:19,
            //in IOS only
            shadowColor: 'rgb(92, 92, 92)',  
            shadowOffset: { width: 0, height: 8 },    
            shadowOpacity: 0.16,    
            shadowRadius: 16
        },
        text :{
            color: GlobalStyles.colors.primary400,
            fontWeight: "bold",
            fontSize: 20

        }
    }
)