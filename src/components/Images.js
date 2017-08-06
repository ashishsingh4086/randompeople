import React, { Component } from 'react';


class Images extends Component {
    /*
    * This class does not require constructor or super because it is not initializing or changing state
    * Passes the new image to the parent component
    */
    render() {
        return (
            <div className="mainPage">
                <img src={this.props.value.large} alt="person" />  
            </div>
        )
    }
}

export default Images;