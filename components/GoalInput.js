import { View, Text, StyleSheet, TextInput, Button, Modal, Image } from 'react-native'
import React, { useState } from 'react'

export default function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('')
    const [courseGoals, setCourseGoals] = useState([])
    
    const GoalInputHandler = (enteredText)=>{
      setEnteredGoalText(enteredText)
    }   

    const addGoalHandler = ()=>{
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
  
  return (
    <Modal visible = {props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <Image style = {styles.image} source = {require('../assets/images/goal.png')}/>
            <TextInput
            style={styles.textInput} 
            placeholder='your main card comes here'
            onChangeText={GoalInputHandler}
            value = {enteredGoalText}
            />     
            <View style = {styles.buttonContainer}>
                <View>
                  <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
                </View>
                <View>
                 <Button title = "Cancel" onPress = {props.onCancel} color="#f31282"/> 
                </View>

            </View>   
        </View>
     </Modal>
  )
}

const styles = StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius: 6,
        backgroundColor:'#5e0acc'
      },
      inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor:'#311b6b'
      },
      image:{
            width: 100,
            height: 100,
            margin:20
      },
      goalText:{
        color:'white',
        margin:8,
        borderRadius: 6,
        backgroundColor:'#5e0acc'
      },
      textInput :{
        borderWidth:1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        color: '#120438',
        width: '100%',
        marginRight:8,
        padding:16,
        borderRadius:6,
      },
      goalsContainer:{
        flex:5
      },
      buttonContainer:{
        marginTop:16,
        flexDirection:'row',
      },
      button :{
        width: 100,
        marginHorizontal:8
      }
    
});