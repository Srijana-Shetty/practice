import React, { useReducer } from 'react';

const ReducerTutorial = () => {

    const[state, dispatch] = useReducer(reducer,{count: 0, showText:true}){

    }
   // const [count, setCount] = useState(0)
    //const [showText,setShowText] = useState(true)

    return (
        <div>
            <h1>{count}</h1>
            <button
            onClick={() =>{
                setCount(count +1);
                setShowText(!showText);
            }}
            >
                click here
            </button>

            {showText && <p>This is a text</p>}
            
        </div>
    )
}

export default ReducerTutorial