import React, { Component } from 'react';

export const App = React.createClass({
    componentDidMount(){
      setInterval(() => {
        let now = new Date();
        if(now.getFullYear() < this.state.countdownTo.getFullYear()) {
            this.setState({now});
        } else {
            let countdownTo = new Date("01/01/" + (now.getFullYear()+1));
            this.setState({now, countdownTo});
        }
      }, 1000);
    },
    getInitialState(){
        let now = new Date();
        let year = now.getFullYear();
        let countdownTo = new Date("01/01/" + (year+1));
        return { countdownTo, now };
    },
    render() {
        const distance = this.state.countdownTo - this.state.now;

        const days = Math.floor(distance / (3600000*24));
        const hours = Math.floor((distance % (3600000*24)) / 3600000);
        let minutes = Math.floor((distance % 3600000) / 60000);
        let seconds = Math.floor((distance % 60000) / 1000);

        if(minutes < 10) minutes = "0" + minutes;
        if(seconds < 10) seconds = "0" + seconds;

        return (
          <div className="container">
            <div className="header">
              <h1>New Year Countdown</h1>
            </div>

            <div className="main">
              <h1 className="countdown">{days} days {hours}:{minutes}:{seconds}</h1>
            </div>

            <div className="footer">
              <h3>For Web Dashboard</h3>
              <a href="https://play.google.com/store/apps/details?id=uk.amimetic.webdashboard">Use with Web Dashboard (Android App)</a>

            </div>

          </div>
        );
    }
});
