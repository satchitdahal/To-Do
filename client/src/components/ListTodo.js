import e from "cors";
import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {

    const [todos, setTodos] = useState([])

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"

            })
            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (err) {
            console.error(err.message)
        }
    }

    const getTodo = async () => {
        try {

            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()

            setTodos(jsonData)
        } catch (err) {
            console.error(err.message)

        }
    }
    useEffect(() => {
        getTodo()
    }, [])
    return (
        <Fragment>
            {" "}
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>items</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (

                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td><EditTodo todo={todo} /></td>
                            <td><button className="btn btn-danger " onClick={() => deleteTodo(todo.todo_id)}>remove</button></td>
                        </tr>

                    ))}

                </tbody>
            </table>


        </Fragment >
    )
}

export default ListTodos