import React, {useState} from "react"; 
import Bottom from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";

export default function TodoForm(){
    return <Form>
        <InputGroup classname = "mb-4">
            <FormControl placeholder="New Todo" />
                <Button type="submit">
                    Add
                </Button>
        </InputGroup>
    </Form>

}
