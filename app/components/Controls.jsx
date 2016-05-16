var React = require('react');



var Controls = React.createClass({
  getDefaultProps: function() {
     return {
       timerState: 'paused',
       screenName: ''
     };
   },
 propTypes:{
   timerState:React.PropTypes.string,
   screenName:React.PropTypes.string.isRequired,
   countdownState:React.PropTypes.string.isRequired,
   onStatusChange:React.PropTypes.func.isRequired,
 },

  onStatusChange:function(aStatus){
    return ()=> this.props.onStatusChange(aStatus,"aka");

  },
 render: function(){
    var {countdownState,timerState,screenName} = this.props;
   //up
    var renderStartStopButton = ()=>{
      switch (screenName) {
        case 'countdown':
        if(countdownState === 'started'){
          return   <button className="button secondary hollow expanded" onClick={this.onStatusChange('paused')}>Pause</button>;
        }else if(countdownState == 'paused'){
          return   <button className="button  expanded" onClick={this.onStatusChange('started')}>Start</button>;
        }
        break;
        case 'timer':
        if(timerState === 'started'){
          return   <button className="button secondary hollow expanded" onClick={this.onStatusChange('paused')}>Pause</button>;
        }else if(timerState == 'paused'){
          return   <button className="button  expanded" onClick={this.onStatusChange('started')}>Start</button>;
        }
        break;
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow expanded" onClick={this.onStatusChange('stopped')}> Clear</button>
      </div>

    )
 }

});

module.exports = Controls;
