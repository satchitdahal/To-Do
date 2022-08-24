import React, { Fragment, useState } from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("")


    return <Fragment>
        <h1 className="text-center mt-5 ">Input Todo</h1>
        <form className="d-flex" mt-5>
            <input type="text" className="form-control" value={description} />

    const onSubmitForm = async (e) => {
                e.preventDefault()
        try {
            const body = {description}
            //by default fetch makes a get request
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
            //what is this?
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(body)
                //what is this?
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
        } catch (err) {
            console.error(err.message)

        }
    }

            return <Fragment>
                <h1 className="text-center mt-5 ">Input Todo</h1>
                {/* after making the onSubmit method, attach it to this form */}
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
                    {/* this button is attached to this form
    return <Fragment>
        <h1 className="text-center mt-5 ">Input Todo</h1>
        <form className="d-flex" mt-5>

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
            <button className="btn btn-success">Add</button>
        </form>
    </Fragment >

};

export default InputTodo;