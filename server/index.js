const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')



//displays the details of a request
//what type of request
//the code sent back
app.use(cors())

//need this middleware to recieve the json back
app.use(express.json())

//creating a post request 
//it sends a request and a response object 
//it is done async 

//add notes
app.post("/todos", async (req, res) => {
    //*NEED TO LOOK AT HOW REQ AND RES WORK 
    //*NEED TO LOOK AT HOW POOL.QUERY WORKS
    try {
        //what were doing here is adding to the database
        //{description} it is the body that is entered
        const { description } = req.body
        //new varibale that stores the response
        //it queries the database and inserts the {description}
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );
        //what we right here is what we get on the webpage
        //this is the response
        res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message)

    }
})

//get all notes
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows)

    } catch (error) {
        console.error(err.message)
    }
})


//get id specific note
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
        res.json(todo.rows[0])
    } catch (err) {
        console.error(err.message)

    }
})


//update or edit notes
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { description } = req.body
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
        res.json("Todo was updated")
    } catch (err) {
        console.error(err.message)
    }
})


//delete the note specific to id
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deleteId = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
        res.json("todo was deleted")
    } catch (error) {

    }
})
app.listen(5000, () => {
    console.log("server has started on port 5000")
})
