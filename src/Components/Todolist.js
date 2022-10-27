import React,{useContext} from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import {FaCheckDouble, FaTrash} from 'react-icons/fa'
import myContext from '../Context/context'
import { REMOVE_TODO } from '../Context/action.types'

const Todolist = () => {
    const {todos, dispatch} = useContext(myContext)

    return(
        <ListGroup className='mt-5 mb-2 items'>
            {todos.map(t => (
                <ListGroupItem key={t.id} >
                    {t.todoString}
                    <span 
                    className="float-right" 
                    onClick={() => (
                        dispatch({
                            type: REMOVE_TODO,
                            payload : t.id
                        })
                    )}>
                        <FaTrash />
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todolist;