var React = require('react');

var CountdownForm = React.createClass({

  getDefaultProps: function(){
    seconds: 0;
  },

  updateCLock: function(e){
    e.preventDefault();
    var seconds = this.refs.seconds.value;
    if(seconds.match(/^[0-9]*$/)){
        this.refs.seconds.value ='';
        this.props.onNewCountDown(parseInt(seconds));
    }else{
      this.refs.seconds.value ='';
    }
  },

  render: function(){

    var {seconds} = this.props;
    return (
      <div >
        <form onSubmit={this.updateCLock} className="countdown-form">
          <div>
            <input type="text" ref="seconds"  placeholder="Enter your countdown seconds ! "></input>
          </div>
          <div>
            <button className="button expanded">Start</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports =CountdownForm;
