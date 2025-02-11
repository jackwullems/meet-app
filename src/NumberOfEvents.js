import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    eventCount: 5,
  };

  handleEventInputChanged = (event) => {
    const eventCount = event.target.value;
    this.setState({
      eventCount,
    });
    this.props.updateCount(eventCount);
  };

  render() {
    return (
      <div className="event-number">
        <label htmlFor="numberOfEvent"></label>
        <input
            defaultValue={this.props.eventCount}
          type="number"
          name="numberOfEvent"
          className="event-number-input"
          placeholder="Enter Number of Events"
          value={this.state.eventCount}
          onChange={this.handleEventInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
