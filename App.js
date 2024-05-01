import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnterGoalText] = useState('')
  const [goals,setGoals] = useState([])

  function handleInputGoal(enteredText){
    console.log(enteredText)
    setEnterGoalText(enteredText)
  }

  function handleAddGoal() {
    console.log(enteresGoalText)
    setGoals(() => [...goals, {text: enteredGoalText, key: Math.random().toString()}])
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.texInput}
        placeholder='Your Goal'
        onChangeText={handleInputGoal}
        />
        <Button
        title='Add Goal'
        color={'#A3FFD6'}
        onPress={handleAddGoal}
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
        data={goals}
        renderItem={(itemData) =>{
          <View style={styles.goalsItem}>
            <Text style={styles.goalText}>
              {itemData.item.text}
            </Text>
            </View>
        }}
        >
        </FlatList>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7BC9FF',
  },
  btnGoal:{
    borderRadius: 20,
    backgroundColor: '#cccccc'
  },
  texInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 3,
    padding: 8,
    borderRadius: 5, 
  },
  goalsContainer:{
    flex: 5
  },
  goalsItem:{
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#8576FF',
    color: 'white'
  },
  goalText:{
    color: 'white'
  }
});
