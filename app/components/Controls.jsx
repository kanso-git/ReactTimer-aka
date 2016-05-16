var React = require('react');



var Controls = React.createClass({

 propTypes:{
   countdownState:React.PropTypes.string.isRequired,
   onStatusChange:React.PropTypes.func.isRequired,
 },

  onStatusChange:function(aStatus){
    return ()=> this.props.onStatusChange(aStatus,"aka");

  },
 render: function(){
    var {countdownState} = this.props;
   //up
    var renderStartStopButton = ()=>{
       if(countdownState === 'started'){
         return   <button className="button secondary hollow expanded" onClick={this.onStatusChange('paused')}>Pause</button>;
       }else if(countdownState == 'paused'){
         return   <button className="button  expanded" onClick={this.onStatusChange('started')}>Start</button>;
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
