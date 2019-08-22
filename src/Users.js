import React, {Component} from 'react'
export class Users extends Component{
    state ={
        userList: ['Samuel Bicalho', 'Elon Musk', 'Steve Jobs'],
        givenPropIsAndUser: undefined,
        userFound: ``
    };
    componentDidUpdate(prevProps) {
        if(prevProps.searchFor !== this.props.searchFor){
            console.log(`prop is changed`);
            if(this.state.userList.includes(this.props.searchFor)){
                this.setState({
                    givenPropIsAndUser: true,
                    userFound: this.props.searchFor
                })
            }  else{
                this.setState({
                    givenPropIsAndUser: false
                })
            }
        }
    }
    render() {
        if( this.state.givenPropIsAndUser === true){
            return(
                <h3>User, {this.state.userFound}, is found</h3>

            )
        }
        if( this.state.givenPropIsAndUser === false){
            return(
                <h3>don't have user yest</h3>
            )
        }
        /*Se indefinido fica do jeito que está*/
        return(
            <h3>don't have user yest</h3>
        )
    }
}