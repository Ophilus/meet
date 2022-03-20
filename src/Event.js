import React, { Component } from "react";

class Event extends Component {

    state = {
        collapsed: true
    }

    handleClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

  render() {
    const { collapsed } = this.state;
    const { event } = this.props;

    return <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <p className="start-date">
            {event.start.dateTime} 
            ({event.start.timeZone})
        </p>
        <p className="location">
            {event.location}
        </p>
        <button className={`${collapsed ? "show" : "hide"}-details`} onClick={this.handleClick}>{collapsed ? "Show Details" : "Hide Details"}</button>
    </div>;
  }
}
export default Event;