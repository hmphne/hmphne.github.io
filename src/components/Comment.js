import React from 'react'
import { useEffect, useState, useRef } from 'react';

const Comment = () => {

const [comment,setComment] = useState('')

const inputElement = useRef();

    const submit = (e) => {
        e.preventDefault();
        const inputValue = inputElement.current.value;
        setComment(inputElement.current.value);
        return console.log('Submit', inputValue)

    }
  return (
    <div>
        <form onSubmit={submit}>
            <input type='text' placeholder='Leave a comment' ref={inputElement}></input>
            <div>{comment}</div>
        </form>
    </div>
  )
}

export default Comment