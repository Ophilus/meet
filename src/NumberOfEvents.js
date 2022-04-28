import React, { Component } from 'react';

class NumberOfEvents extends Component {
	state = {
		numberOfEvents: '32',
	}

	handleInputChange = (event) => {
		this.setState({
			numberOfEvents: event.target.value,
		});
		if (this.props.updateNumberOfEvents){
		this.props.updateNumberOfEvents(event.target.value);
	}
	}

    render() {
      return (  
        <div className='NumberOfEvents'>
            <input
						type="number"
						onChange={this.handleInputChange} 
						value={this.state.numberOfEvents} 
						className="numberOfEvents"/>
        </div>
			)	
    }
};    

export default NumberOfEvents;