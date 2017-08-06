import React, { Component } from 'react';

class RandomPeople extends Component {
     /*
    * This class does not require constructor or super because it is not initializing or changing state
    * Passes the user details  to the parent component
    * Since this.props.value is an object and contains values mapping is done using Object.Key
    */
    render() {
        return (
            <div className=" jumbotron mainPage" >
                <p> {this.props.value.registered}</p>
                <p> {this.props.value.cell} </p>
                <p> {this.props.value.dob} </p>
                {
                    Object.keys(this.props.value).map((key) => {
                        return (
                            <div>
                                {this.props.value[key].first}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default RandomPeople;