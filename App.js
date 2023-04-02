import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';
export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [isModal, setIsModal] = useState(false)

  // const GoalInputHandler = (enteredText)=>{
  //   setEnteredGoalText(enteredText)
  // } 

  function startAddGoalHandler(){
    setIsModal(true)
  }

  function endAddGoalHandler(){
    setIsModal(false);
  }

  const AddGoalInputHandler = (enteredGoalText)=>{
    setCourseGoals((preVal)=> [
      ...preVal,
      {text: enteredGoalText, id:Math.random().toString()}
    ])
    endAddGoalHandler();

  } 



  function deleteGoalHandler(id){ 
    setCourseGoals((currentCourseGoals)=>{
      return currentCourseGoals.filter((coursegoal)=> coursegoal.id !== id)
    })
  }

  
  return (
  <>
  <StatusBar style='light'/>
    <View style={styles.container}>
      <Button 
       title = 'add new goal'
       color="#a065ec" 
       onPress = {startAddGoalHandler}
       />
      
       {isModal && <GoalInput visible={isModal} onAddGoal = {AddGoalInputHandler} onCancel= {endAddGoalHandler}/>}
        <View style ={styles.goalsContainer}>
          <FlatList
          data= {courseGoals}
          renderItem={(itemData)=>{
            return <GoalItem 
            text = {itemData.item.text}
            id={itemData.item.id}
            onDeleteItem = {deleteGoalHandler}
            />
            
          }}
          
          keyExtractor = {(item, index)=>{
            return item.id;
          }}
          alwaysBounceHorizontal={false}  
          
          
          />
   
      </View>
      
     
    </View>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal:16,
  backgroundColor:'#1e085a'
    
  }, 
  goalsContainer:{
    flex:5
  },


});




// import { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

// export default function App() {
//   const [enteredGoalText, setEnteredGoalText] = useState('');
//   const [courseGoals, setCourseGoals] = useState([]);

//   const goalInputHandler = (enteredText) => {
//     setEnteredGoalText(enteredText);
//   };

//   const addGoalHandler = () => {
//     setCourseGoals((prevGoals) => [...prevGoals, enteredGoalText]);
//     setEnteredGoalText('');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Enter your goal"
//           onChangeText={goalInputHandler}
//           value={enteredGoalText}
//         />
//         <Button title="ADD" onPress={addGoalHandler} />
//       </View>
//       <View style={styles.goalsContainer}>
//         <ScrollView>
//           <View>
//             {courseGoals.map((goal) => (
//               <View style={styles.goalItem} key={goal}>
//                 <Text style={styles.goalText}>{goal}</Text>
//               </View>
//             ))}
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingVertical: 50,
//     paddingHorizontal: 16,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingBottom: 24,
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: '#cccccc',
//     width: '70%',
//     marginRight: 8,
//     padding: 8,
//   },
//   goalsContainer: {
//     flex: 5,
//   },
//   goalItem: {
//     margin: 8,
//     borderRadius: 6,
//     backgroundColor: '#5e0acc',
//   },
//   goalText: {
//     color: 'white',
//     margin: 8,
//     borderRadius: 6,
//     backgroundColor: '#5e0acc',
//   },
// });
