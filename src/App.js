import {useReducer} from 'react'
import todoReducer from './Context/reducer'
import myContext from './Context/context'
import TodoForm from './Components/TodoForm'
import { Container } from 'reactstrap'; 
import Todolist from './Components/Todolist';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


const App = () =>{
   const [todos, dispatch] = useReducer(todoReducer, []);

   return(
     <myContext.Provider value={{todos, dispatch}}>
       <Container fluid>
         <h1>Todo App using Context API</h1>
          <Todolist />
         <TodoForm />
       </Container>
     </myContext.Provider>
   )
}
export default App;
