import React from "react";
import { useState } from "react";
import './post.css'
import { Menu,} from 'semantic-ui-react'
class Navbar extends React.Component {
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    getSearch = (event) => {
      console.log(event.target.value);
    }
    getClicked = (event) => {
      console.log(event);
    }
    render() {
        const { activeItem } = this.state
        return (
            <div className="container-navbar">
                <Menu>
                    <Menu.Item name='Logo'active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item className="space"
                        name='Mypost'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    /> 
                    <Menu.Item className="space"
                        name='Addpost'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item className="spaces"
                        name='logout'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
                
            </div>

        )
    }
}
 
export function Post() {
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
                <h2>Edit Post</h2>
                    <div className="username">
                    <label>Title:<br/>
                    <input 
                        type="text" 
                        name="title" 
                        value={inputs.title || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    </div>
                
                    <div className="username">
                    <label>Content:<br/>
                    <textarea
                        type="text" 
                        name="content" 
                        value={inputs.content || ""} 
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
export default Navbar