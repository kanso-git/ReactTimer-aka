var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({

  getDefaultProps: function() {
    return {
      totalSeconds: 0
    };
  },

  getInitialState: function(){
    return {
      totalSeconds:0

    };
  },
  handleCountdown: function(aTotalSeconds){
      var self =this;
      self.setState({totalSeconds:aTotalSeconds});
      var refreshIntervalId =setInterval(function(){
        if(aTotalSeconds>0){
         aTotalSeconds = aTotalSeconds -1;
         self.setState({totalSeconds:aTotalSeconds});
       }else{
         self.setState({totalSeconds:0});
         clearInterval(refreshIntervalId);
       }
      },1000);
  },

  render: function(){
  var {totalSeconds } = this.state;
    return (
          <div >
           <Clock totalSeconds={totalSeconds}/>
           <CountdownForm onNewCountDown={this.handleCountdown} />
          </div>
        );
      }
});

module.exports = Countdown;
