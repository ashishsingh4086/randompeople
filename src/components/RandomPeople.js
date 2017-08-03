import React, { Component } from 'react';


class RandomPeople extends Component {


    render() {
        return (
          

                <div className=" jumbotron mainPage" >
                       <p> {this.props.value.registered}</p>
                    <p> {this.props.value.cell} </p>
                    <p> {this.props.value.dob} </p>   
                 
                       {
                            Object.keys(this.props.value).map((key)=>{
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