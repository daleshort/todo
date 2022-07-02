import axios from "axios";
import React from "react";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup"
import {MdCheckBox, MdCheckBoxOutlineBlank, MdEdit, MdDelete} from "react-icons/md"

export default function TodoList({ todos = [], setTodos }) {

    const handleUpdate = async(id,value) =>{
        return axios.patch(`/api/todos/${id}/`,value).then((res)=>{
            const {data} = res;
            const newTodos = todos.map( t =>{
                if (t.id ===id){
                    //if the todo id matches the id of the item sent to the handler
                    return data
                    //set that todos data to the new received data
                }
                return t;
                //otherwise keep the data
            })
            setTodos(newTodos);
        }).catch(() =>{
            alert("something wrong")
        })

    }


    const renderListGroupItem = (t) => {
        return <ListGroupItem key={t.id} className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center">
                <span style={{
                    marginRight: "12px", cursor: "pointer"
                }} onClick={() => handleUpdate(
                    t.id,
                     {completed: !t.completed}) //change the status and send it to the handler
                    }>

                    {t.completed == true ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

                </span>
                <span>
                    {t.name}
                </span>
            </div>
            <div>
                <MdEdit style={{
                    cursor: "pointer",
                    marginRight: "12px"
                }} />
                <MdDelete style={{
                    cursor: "pointer"
                }} />
            </div>
        </ListGroupItem>
    }

    return < ListGroup >
        {todos.map(renderListGroupItem)}
    </ListGroup >

}