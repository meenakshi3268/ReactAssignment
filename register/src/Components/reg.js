import { useState } from "react";
import './reg.css'
 export function RegForm() {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }
  
    return (
        <div className="form">
            <div className="form-body">
                <form onSubmit={handleSubmit}>
                <h2>Registration </h2>
                <div className="username">
                    <label>Email:<br/>
                    <input 
                    type="email" 
                    name="email" 
                    value={inputs.email || ""} 
                    onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div className="username">
                    <label>Name:<br/>
                    <input 
                        type="text" 
                        name="age" 
                        value={inputs.age || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div className="username">
                    <label>Password:<br/>
                    <input 
                        type="text" 
                        name="password" 
                        value={inputs.password || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div className="username">
                    <label>Confirm Password:<br/>
                    <input 
                        type="text" 
                        name="confirmpassword" 
                        value={inputs.confirmpassword || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                    <div className="username"><br/>
                    <input type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
  }