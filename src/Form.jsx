import { useState } from "react"

export default function Form(){
    let [formData, setFormData] = useState({
        fullname: " ",
        username: " ",
    })


    let handleInputChange = (event) => {
        setFormData((currData) => {
            return{...currData, [event.target.name]: event.target.value};
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
        fullname: " ",
        username: " ",
        });
    }

    return(
        <form>
            <label htmlFor="fullname">Full Name:</label>
            &nbsp; &nbsp;
            <input 
            placeholder="Enter your name" 
            type="text" 
            value={formData.fullname} 
            onChange={handleInputChange}
            id="fullname"
           name="fullname"/>

            <br /> <br />

            <label htmlFor="username">Username:</label>
            &nbsp; &nbsp;
            <input 
            placeholder="Enter username" 
            type="text" 
            onChange={handleInputChange}
            value={formData.username} 
            id="username"
            name="username"/>

            <br /> <br />

            <button onClick={handleSubmit}>Submit</button>

        </form>
    )
}