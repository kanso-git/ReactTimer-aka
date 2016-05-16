var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');


var Timer = React.createClass({

  getInitialState: function(){
    return {
      totalSeconds:0,
      countdownState:'stopped',
      timerState :'paused'
    };
  },


  componentDidUpdate: function(prevProps,prevState){
    //console.log(JSON.stringify(prevProps,null,5));
    //console.log(JSON.stringify(prevState,null,5));

    if(this.state.timerState != prevState.timerState){
    switch (this.state.timerState) {
      case 'started':
        this.startCountTimer();
        //console.log("started counting dwon.. ");
        break;
      case 'stopped':
       this.setState({totalSeconds:0});
        this.setState({timerState:'paused'});
       case 'paused':
       clearInterval(this.clockTimer);
       this.clockTimer = undefined;
       break;
    }
   }
  },

  startCountTimer: function(){
      this.clockTimer = setInterval(()=>{
        var timerMax =15;
      //console.log("inside the startCountDownTimer ...");
      var aTotalSeconds = this.state.totalSeconds + 1;
      if(aTotalSeconds<timerMax){
       this.setState({totalSeconds:aTotalSeconds});
      }else{
       this.setState({totalSeconds:timerMax,timerState:'stopped'});
       //this.setState({totalSeconds:0});
     }
    },1000);
  },

 handleStatusChange: function(aNewState, myName){
   this.setState({countdownState :aNewState});
 },


 componentWillMount:function(){
    //console.log("componentWillMount  ");
 },

 componentDidMount:function(){
    //console.log("componentDidMount ");
 },
 componentWillUnmount:function(){
    //console.log("componentWillUnmount clearInterval clockTimer ");
    if(this.clockTimer){
      clearInterval(this.clockTimer);
      this.clockTimer = undefined;
    }
 },




  handleStatusChange: function(aNewState, myName){
    this.setState({timerState :aNewState});
  },


 render:function(){
   var {totalSeconds,countdownState,timerState} = this.state;
   return (
     <div>
       <h1 className="page-title">Timer App</h1>
       <Clock totalSeconds={parseInt(totalSeconds)}/>
       <Controls countdownState={countdownState} screenName="timer" onStatusChange={this.handleStatusChange} timerState={timerState}/>
     </div>
   )
 }

});
module.exports = Timer;
