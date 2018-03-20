import React, { Component } from 'react';

class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {isOpened: false};
    }
    toggleState () {
        this.setState ({isOpened: !this.state.isOpened});
    }
    render() {
        let dropDownText;
        if (this.state.isOpened) {
            dropDownText = <div> ну ахуеть блять смотрите</div>
        }
        return (
            <div onClick={this.toggleState.bind(this)}>
                its Dropdown
                {dropDownText}
            </div>
            );
    }

}
 export default  Dropdown;


