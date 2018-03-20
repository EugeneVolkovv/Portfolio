import React, { Component } from 'react';

class Formemail extends Component {

    constructor(props) {
        super(props);
        this.state = {email:''};
        this.submitFormEmail = this.submitFormEmail.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
    }
    submitFormEmail (event) {
        event.preventDefault();
        console.log('submit form');
    }
    onChangeEmail (event) {
        this.setState({email:event.target.value}) ;
        console.log(event.target.value);
    }
    render() {
        return(
            <form onSubmit={this.submitFormEmail}>
                <input type="text" onChange={this.onChangeEmail}/>
                <button>save</button>
            </form>
            )
    }

}

export default  Formemail;


