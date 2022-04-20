import React,{useState, useContext} from 'react';
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

import {v4} from 'uuid'
import myContext from '../Context/context'
import {ADD_TODO} from '../Context/action.types'


const TodoForm = () => {
    const [todoString, setTodoString] = useState(""); 
    const {dispatch} = useContext(myContext);

    // function for handling the submit button after clicked 
    const handleSubmit = e => {
        e.preventDefault();

        //ifEmpty
        if(todoString == "")
        {
            return alert("Kch likh re bhai");
        }

        //todo object create with unique id
        const todo = {
            todoString,
            id: v4()
        }

        //dispatch creation for passing to Context
        dispatch({
            type: ADD_TODO,
            payload: todo
        })

        //empty the form after the submit btn is clicked
        setTodoString("");
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input 
                    type = 'text'
                    name = 'todo' 
                    id = 'todo'
                    placeholder = 'Your next todo'
                    value = {todoString}
                    onChange = {e => setTodoString(e.target.value)}
                />
                    <Button 
                    color='warning'
                    >
                    Add
                    </Button>
                </InputGroup>

            </FormGroup>
        </Form>
    )
}

export default TodoForm;