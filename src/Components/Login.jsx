import { useContext ,useState } from "react"
import UserContext from "../Context/UserContext"


export const Login = () =>{
    const [username , setUsername]  = useState("");
    const [password , setPassword] = useState("");

    let {setUser} = useContext(UserContext)

    const login = (e) =>{
        e.preventDefault()
        setUser({username ,password})
    }

   
    return(
        <div>
            <h1>Login Page</h1>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
            <br />
            <input
             type="text"
              placeholder="Password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              />
            <br />
            <br />
            <button onClick={login}>Submit</button>
            <br />
        </div>
         

        )
}