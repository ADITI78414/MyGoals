import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

function GoalInput({onAddGoal}){
    const [enteredGoalText, setEnterGoalText]= useState('')

    function handleInputGoal(enteredText){
        console.log(enteredText)
        setEnterGoalText(enteredText)
    }

    function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnterGoalText('')
        console.log('addGoalHandler')
    }

    return(
        <View style={style.inputContainer}>
            <TextInput
            style={style.textInput}
            placeholder="Your Goal!"
            onChange={handleInputGoal}
            value={enteredGoalText}
            />
            <Button
            title="Add Goal"
            color={'#A3FFD6'}
            onPress={addGoalHandler}
            />
        </View>
    )
}

export default GoalInput

const style = StyleSheet.create({
    inputContainer:{
       flex: 1,
       flexDirection: 'dow',
       justtyfiContent: 'space',
       alignItems: 'center',
       marginBottom: 20,
       borderBottomWidht: 1,
       borderBottomColor: '#7BC9FF' 
    },
    textInput:{
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        marginRight: 3,
        padding: 8,
        borderRadius: 5
    }
})