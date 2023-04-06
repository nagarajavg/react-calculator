import { Component } from "react";

import cal from './cal.svg';
class Heading extends Component{
    render(){
        return (
            <div className="header">
                <h1>Calculator </h1>
                 <img src={cal} className="App-logo" alt="logo" />
                
            </div>
        )
    
    }
}
export default Heading;