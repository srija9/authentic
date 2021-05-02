import {useState, useEffect} from 'react';
import axios from 'axios';
import User from './user';
const PrivateScreen = ({history}) => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState([]);
    
    useEffect(() => {
        if(!localStorage.getItem("authToken")) {
            history.push("/login");
        }

        const fetchPrivateData = async() => {
            const config = {
                headers: {
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                }
            }

            

            try{
                 await axios.get("/api/private", config)
                 .then(res => setPrivateData(res.data))
                 .catch((err) => {
                     setError(err)
                 });
                 
            }catch(error){
                localStorage.removeItem("authToken");
                setError("You are not authorized please login")
            }
        }
        fetchPrivateData();

    }, [history]);

    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        history.push("/login");
    };
    

     return error ? (
          <span className="error-message">{error}</span>
     ) : (
         <>
            <User privateData={privateData}/>
            <button onClick={logoutHandler}>Logout</button>
         </>
     );

};

export default PrivateScreen;