 import React from 'react'
import { StyleSheet, Text, View, Pressable} from 'react-native';

 
 export default function GoalItem(props) {
    return (
        <Pressable  
        onPress={props.onDeleteItem.bind(this, props.id)}
        style = {({pressed})=>pressed && styles.pressed }
        >
            <View style = {styles.goalItem}>
                <Text style = {styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    )
 }


 const styles = StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius: 6,
        backgroundColor:'#5e0acc'
      },
      pressedItem:{
            opacity: 0.5,
      },
      goalText:{
        color:'white',
        margin:8,
        borderRadius: 6,
        backgroundColor:'#5e0acc'
      },
});
 