import React, { useState } from 'react'
import InputText from './inputText'
import InputNumber from './inputNumber'
import { ButtonOrange } from './button'
import TextArea from './textArea'

const Form = () => {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Имя: ${name}\n Телефон: ${number}\n Сообщение: ${message}`);
        setName("")
        setNumber("")
        setMessage("")
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputText
                className="input size-18 weight-400 text-hover"
                value={name}
                onChange={setName}
            />
            <InputNumber
                className="input size-18 weight-400 text-hover"
                value={number}
                onChange={setNumber}
            />
            <TextArea
                className="textarea text-hover"
                value={message}
                onChange={setMessage}
            />
            <ButtonOrange className="button-footer weight-500 size-18">Заказать консультацию</ButtonOrange>
        </form>
    )
}

export default Form