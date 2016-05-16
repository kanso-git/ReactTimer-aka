var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {

    it('should exist', () => {
      expect(Countdown).toExist();
    });

   describe('handleCountdown', () => {

    it('should set state to started|stopped and seconds never go below zero ', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);

      countdown.handleCountdown(3);
      expect(countdown.state.countdownState).toBe('started');
      expect(countdown.state.totalSeconds).toBe(3);

      setTimeout(()=>{
        expect(countdown.state.countdownState).toBe('started');
        expect(countdown.state.totalSeconds).toBe(2);
      },1001);

      setTimeout(()=>{
        expect(countdown.state.countdownState).toBe('stopped');
        expect(countdown.state.totalSeconds).toBe(0);
        done();
      },4001);
    });


    it('should puase countdown timer when timer is paused ', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleCountdown(3);
      expect(countdown.state.countdownState).toBe('started');
      expect(countdown.state.totalSeconds).toBe(3);

      setTimeout(()=>{
        countdown.setState({countdownState:'paused'})
      },1001);

      setTimeout(()=>{
        expect(countdown.state.countdownState).toBe('paused');
        expect(countdown.state.totalSeconds).toBe(2);
        done();
      },4001);
    });


 });
}); // end describe formatSeconds
