var React = require('react');
var TimerClock = require('TimerClock');

var Countdown = ()=>{
  return (
        <div >
         <TimerClock totalSeconds={62}/>
        </div>
      );
}
module.exports = Countdown;
