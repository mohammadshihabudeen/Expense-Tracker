import { StyleSheet, View, Text } from "react-native"
import Button from "../ui/Button"
import Input from "./Input"
import { GlobalStyles } from "../../constants/styles"
import { useState } from "react"
import { getFormattedDate } from "../../util/date"
const ExpenseForm = ({editingLabel,onCancel,onSubmit,selected}) => {
    
    const [inputValues, setInputValues] = useState({
        amount:
        {
            value : selected ? selected.amount.toString() : '',
            isValid : !!selected
        } ,
        date: {
            value : selected ? getFormattedDate(selected.date) : '',
            isValid : !!selected
        },
        description: {
            value : selected ? selected.description : '',
            isValid : !!selected
        }
    })
    const inputChangeHandler = (inputIdentifier, enteredText) => {
        setInputValues((currValues) => {
            return {
                ...currValues,
                [inputIdentifier]: {value: enteredText , isValid : true}
            }
        })
    }

    const confirmHandler = () =>
    {
        const expenseData = {
            description: inputValues.description.value,
            amount: +inputValues.amount.value,
            date: new Date(inputValues.date.value),
        }
        amountIsValid = expenseData.amount > 0 && !isNaN(expenseData.amount)
        dateIsValid = expenseData.date.toString() !== "Invalid Date"
        descriptionIsValid = expenseData.description.trim().length > 0
        if(!amountIsValid || !dateIsValid|| !descriptionIsValid)
        {
            setInputValues((curInputs) => {
                return {
                  amount: { value: curInputs.amount.value, isValid: amountIsValid },
                  date: { value: curInputs.date.value, isValid: dateIsValid },
                  description: {
                    value: curInputs.description.value,
                    isValid: descriptionIsValid,
                  },
                };
              });
            return}
        else{
            onSubmit(expenseData)
        }
    }
    const formInvalid = !inputValues.amount.isValid || !inputValues.date.isValid || !inputValues.description.isValid

    return (
        <View style={styles.outerContainer}>
            <Text style={styles.header}>
                Your Expense
            </Text>
            <View style={styles.innerContainer}>
                <Input
                    label={"Amount"}
                    inputConfig={{
                        keyboardType: "numeric",
                        onChangeText: inputChangeHandler.bind(this, 'amount'),
                        value: inputValues.amount.value
                    }}
                    innerStyles={styles.rowInput}
                    valid= {
                        inputValues.amount.isValid
                    }
                />
                <Input
                    label={"Date"}
                    inputConfig={{
                        keyboardType: "numeric",
                        placeholder: "YYYY-MM-DD",
                        onChangeText: inputChangeHandler.bind(this, 'date'),
                        value: inputValues.date.value
                    }}
                    innerStyles={styles.rowInput}
                    valid= {
                        inputValues.date.isValid
                    }

                />
            </View>
            <Input
                label={"Description"}
                inputConfig={{
                    multiline: true,
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: inputValues.description.value
                }}
                valid= {
                    inputValues.description.isValid
                }
            />
                        {formInvalid && <Text style={styles.errortext}>Enter the correct values</Text>}
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={confirmHandler}>
                    {editingLabel}
                </Button>
            </View>
            
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create(
    {
        header: {
            marginVertical: 20,
            marginTop: 40,
            textAlign: "center",
            fontSize: 24,
            color: "white",
            fontWeight: "bold",
        },
        innerContainer: {
            flexDirection: "row",
            justifyContent: "space-between"
        },
        rowInput: {
            flex: 1
        },
        outerContainer: {
            marginBottom: 10
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
          errortext: {
            color: GlobalStyles.colors.error500,
            textAlign: 'center',
            margin: 20
          }
    }
)
