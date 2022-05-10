import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
	state = {
		numberOfEvents: '32'
	}

	handleInputChange = (event) => {
		const value = event.target.value
		if (value >= 1 && value <= 32) {
			this.setState({
				numberOfEvents: value,
				errorText: ''
			});
		}else{
			this.setState({
				numberOfEvents: '',
				errorText: 'Select number from 1 to 32'
			});
		}
		if (this.props.updateNumberOfEvents){
		this.props.updateNumberOfEvents(event.target.value);
	}
	
	}

    render() {
      return (  
        <div className='NumberOfEvents'>
			<ErrorAlert text={this.state.errorText} />
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