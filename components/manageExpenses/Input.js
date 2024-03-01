import { Text, TextInput, View, StyleSheet } from "react-native"
import { GlobalStyles } from "../../constants/styles"
const Input = ({ label,innerStyles, inputConfig ,valid}) => {
    input = styles.input
    if(inputConfig && inputConfig.multiline)
    {
        input = [input,styles.inputMultiline]
    }
    return (
        <View style={innerStyles}>
            <Text
                style={[styles.label, valid ? '' : styles.errorLabel]}>
                {label}
            </Text>
            <TextInput
                style={[input,valid ? '' : styles.errorInput ]}
                {...inputConfig}
            />
        </View>
    )
}

export default Input


const styles = StyleSheet.create(
    {
        label: {
            fontSize: 12,
            color: GlobalStyles.colors.primary100,
            marginHorizontal: 10
        },
        input: {
            marginVertical: 10,
            backgroundColor: GlobalStyles.colors.primary100,
            borderRadius: 5,
            padding: 3,
            paddingHorizontal: 10,
            margin: 10
        },
        inputMultiline : {
            minHeight: 100,
            textAlignVertical: 'top'
        },
        errorInput : {
            backgroundColor: GlobalStyles.colors.error50,

        },
        errorLabel : {
            color: GlobalStyles.colors.error500,
        }
    }
)