var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({

/*
  getDefaultProps: function() {
    return {
      totalSeconds: 0,
      countdownState:'stopped'
    };
  },
  */

  getInitialState: function(){
    return {
      totalSeconds:0,
      countdownState:'stopped'
    };
  },
 componentWillUpdate:function(nextProps, nextState){
    //console.log(JSON.stringify(nextProps,null,5));
    //console.log(JSON.stringify(nextState,null,5));
 },
  componentDidUpdate: function(prevProps,prevState){
    //console.log(JSON.stringify(prevProps,null,5));
    //console.log(JSON.stringify(prevState,null,5));

    if(this.state.countdownState != prevState.countdownState){
    switch (this.state.countdownState) {
      case 'started':
        this.startCountDownTimer();
        //console.log("started counting dwon.. ");
        break;
      case 'stopped':
        this.setState({totalSeconds:0});
       case 'paused':
       clearInterval(this.clockTimer);
       this.clockTimer = undefined;
       break;
    }
   }
  },
  handleCountdown: function(aTotalSeconds){
      this.setState({
        totalSeconds:aTotalSeconds,
        countdownState:'started'
      });
  },
  startCountDownTimer: function(){
      this.clockTimer = setInterval(()=>{
      //console.log("inside the startCountDownTimer ...");
      var aTotalSeconds = this.state.totalSeconds - 1;
      if(aTotalSeconds>0){
       this.setState({totalSeconds:aTotalSeconds});
      }else{
       this.setState({totalSeconds:0,countdownState:'stopped'});
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
  render: function(){
  var {totalSeconds, countdownState} = this.state;
  var renderControlArea= ()=>{
    if(countdownState !=='stopped'){
      return <Controls screenName="countdown"  countdownState={countdownState} onStatusChange={this.handleStatusChange}/>;
    }else{
      return <CountdownForm onNewCountDown={this.handleCountdown}/>;
    }
  };
    return (
          <div>
            <h1 className="page-title">Countdown</h1>
           <Clock totalSeconds={totalSeconds}/>
           {renderControlArea()}
          </div>
        );
      }
});

module.exports = Countdown;
