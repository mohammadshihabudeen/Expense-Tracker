import { View, Text, StyleSheet, Pressable } from "react-native"
import date1 from "../util/date"
import { GlobalStyles } from "../constants/styles"
export default ListItem = ({ description, amount, date }) => {
    return (
        <Pressable style={styles.container} android_ripple={{color:"#9009c1"}}>
            <View style={styles.details}>
                <Text style={styles.text}>
                    {description}
                </Text>
                <View>
                    <Text style={{color:"white"}}>
                        {date1(date)}
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
            borderRadius: 8
        },
        amountText :{
            color: GlobalStyles.colors.primary500,
            fontSize: 18,
            fontWeight: "bold"
        }
    }
)