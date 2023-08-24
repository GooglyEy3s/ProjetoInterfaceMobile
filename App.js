import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './components/Experimentos/01HelloWorld';
import Hello2 from './components/Experimentos/02Hello2';
import HelloGift from './components/Experimentos/02HelloGift';
import MyCat from './components/Experimentos/03MyCat';


// export default function App() {
//   return (
//     <View style={styles.container}>
//        <HelloWorld />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//        <HelloGift />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//        <MyCat />
//     </View>
//   );
// }

// import Parent from './components/05Nested/05Parent';

// export default function App() {
//     return (
//       <View style={styles.container}>
//          <Parent />
//       </View>
//     );
// }

// import State from './components/Experimentos/06State';

// export default function App() {
//     return (
//       <View style={styles.container}>
//          <State />
//       </View>
//     );
// }

import Questao01 from './components/Tarefas/Tarefa01/Questao01';

export default function App() {
    return (
      <View style={styles.container}>
         <Questao01 />
      </View>
    );
}

// import Questao03 from './components/Tarefas/Tarefa01/Questao03';

// export default function App() {
//     return (
//       <View style={styles.container}>
//          <Questao03 cor1={"blue"} cor2={"yellow"} cor3={"green"} cor4={"purple"}/>
//       </View>
//     );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
});
