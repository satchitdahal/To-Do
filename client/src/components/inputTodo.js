import e from "cors";
import React, { Fragment, useState } from "react";

const InputTodo = () => {

    //this is a react hook 
    //the description is the current state 
    //the setDescription is a method that will be used to update the state
    //whatever is in the "" in the useState, will be the default value 
    //to be displayed 
    const [description, setDescription] = useState("")

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = { description }
            //by default fetch makes a get request
            const response = fetch("http://localhost:5000/todos", {
                method: "POST",
                //what is this?
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            //refreshes after the Submit 
            window.location = "/"
        } catch (err) {
            console.error(err.message)

        }
    }

    return <Fragment>
        <h1 className="text-center mt-5 ">TODO</h1>
        <form className="d-flex" mt-5 onSubmit={onSubmitForm}>

            <input
                type="text"
                className="form-control"
                //we are setting the value of the input to the description
                //note that the description is the current state
                //this cannot be changed unless we have an onChange method
                value={description}
                //now the onChange will call the setDescription method 
                //which will target the input and get the value
                //e is the event
                onChange={e => setDescription(e.target.value)} />
            {/*add button is attached to form so it will submit the form
                when pressed  */}
            <button className="btn btn-success">Add</button>
        </form>
    </Fragment >

};

export default InputTodo;