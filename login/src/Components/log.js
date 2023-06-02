import { useState } from "react";
import './log.css'
 export function LogForm() {
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
                <h2>Log in</h2>
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
                    <label>Password:<br/>
                    <input 
                        type="text" 
                        name="password" 
                        value={inputs.password || ""} 
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