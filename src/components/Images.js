import React, {Component} from 'react';


class Images extends Component {
    render(){
        return(
            <div className="mainPage">
            <img src={this.props.value.large} alt="person" />
            </div>
        )
    }
}

export default Images;