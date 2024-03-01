import { View, Text, StyleSheet, Pressable } from "react-native"
import {getFormattedDate} from "../util/date"
import { GlobalStyles } from "../constants/styles"
import { useNavigation } from "@react-navigation/native"

export default ListItem = ({ id ,description, amount, date }) => {
    const navigation = useNavigation();
    function expensePressHandler() {
        navigation.navigate('Manage Expenses', {
          expenseId: id
        });
      }
  
    return (
        <Pressable style={styles.container} android_ripple={{color:"#D9D9D9"}} onPress={expensePressHandler}>
            <View style={styles.details}>
                <Text style={styles.text}>
                    {description}
                </Text>
                <View>
                    <Text style={{color:"white"}}>
                        {getFormattedDate(date)}
                    </Text>
                </View>

            </View>
            <View style={styles.amountView}>
            <Text style={styles.amountText}>
                ${amount}
            </Text>
            </View>
        
        </Pressable >

    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            margin: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 10,
            paddingVertical: 10,
            paddingHorizontal: 15,
            backgroundColor: GlobalStyles.colors.primary500,
            borderRadius: 5
        },
        text: {
            color: "white",
            fontWeight: "bold",
            fontSize: 20
        },
        amountView:{
            paddingHorizontal: 15,
            paddingVertical: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: GlobalStyles.colors.primary50,
            borderRadius: 8,
            minWidth: 90
        },
        amountText :{
            color: GlobalStyles.colors.primary500,
            fontSize: 18,
            fontWeight: "bold"
        }
    }
)