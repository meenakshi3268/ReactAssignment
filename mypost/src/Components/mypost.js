import React from "react"; 
import './mypost.css'
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
export function Apps() {  
    return (  
    <div className="form">
        <h2>My Post</h2>
        <div className="form-body">
            <table className="">  
                <thead>  
                <tr>  
                    <th>SI No</th>  
                    <th>Title</th>  
                    <th>Content</th>  
                    <th>Action</th>  
                </tr>  
                </thead>  
                <tbody>  
                <tr>  
                    <td>1</td>  
                    <td>Post 1</td>  
                    <td></td> 
                    <td><button className="btn" type="button">Update</button><br/><br/>
                    <button className="btn" type="button">Delete</button></td>
                </tr>  
                </tbody>  
            </table> 
        </div> 
      </div>
    );  
  }  
export default Navbar 