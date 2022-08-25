import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {

    const [description, setDescription] = useState(todo.description)
    return (
        <Fragment>

            <button
                type="button"
                class="btn btn-warning"
                data-toggle="modal"
                data-target="#myModal">
                EDIT
            </button>

            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">


                        <div class="modal-header">
                            <h4 class="modal-title">EDIT TODO</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>


                        <div class="modal-body">
                            <input type="text" className="form-control" value={description} />
                        </div>


                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-dismiss="modal">EDIT</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">CLOSE</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditTodo