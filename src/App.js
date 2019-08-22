import React, {Component} from 'react';
import {TodoList} from "./TodoList";
import './App.css';
import {Users} from "./Users";
import {Clock} from "./Clock";

class App extends Component {
    state ={
        searchForUser: ``,
        isClockHidden: false
    };
    hideClock = ()=>{
        this.setState({isClockHidden: true});
    };

    render (){
        const handleFormSubmit = (event)=>{
            event.preventDefault();
            const inputValue = document.getElementById('search-input').value;
            this.setState({
                searchForUser: inputValue
            })
        };
        if(this.state.isClockHidden){
            return(
                <div>
                    <div>
                        <TodoList />
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <input id="search-input" placeholder="Search for user"/>
                        <button>Search</button>
                    </form>
                    <Users searchFor={this.state.searchForUser}/>
                </div>

            )
        }
        return(
            <div>
                <div>
                    <TodoList />
                </div>
                <form onSubmit={handleFormSubmit}>
                    <input id="search-input" placeholder="Search for user"/>
                    <button>Search</button>
                </form>
                <Users searchFor={this.state.searchForUser}/>

                <div id="clock">
                    <p>Clock Example</p>
                    <Clock/>
                    <button onClick={this.hideClock}>Hide Clock</button>
                </div>
            </div>

        )
    }
    }
export default App;
