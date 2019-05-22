import React,{useState} from 'react';

export function Counter() {
    const [count,setCount] = useState(0);
    return(
        <div>
            <p> You clicked {count} times</p>
            <button onClick={()=> setCount(Math.sqrt(count))}>
                SquareRoot
            </button>
            <button onClick={()=>setCount(count + 1)}>
                Increment
            </button>
            <button onClick={()=> setCount(count - 1)}>
                Decrement
            </button>
            <button onClick={()=>setCount(count*count)}>
                Square
            </button>
            <div>
                <button onClick={()=> setCount(0)}>
                    RESET
                </button>
            </div>
        </div>
    );

}


export function UserLogin() {
    const [ username, setUsername] = useState('');
    const [password, setPassword] = useState( "");
    const handleUsername = event =>{
      setUsername(event.target.value);
    };
    const handlePassword = event =>{
        setPassword(event.target.value);
    };
    const handleSubmit =()=>{
        const user ={};
        user.name = username;
        user.password = password;
        console.log(user );
    };
    return(
        <div>
            <p> Your username is {username}</p>
            <p>Your password is {password} </p>
            <input placeholder={"Username"} name = "username" onChange={ event=>handleUsername(event) }/>
            <input placeholder={"Password"} name= "password" onChange={event => handlePassword(event)}/>
            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );

}
