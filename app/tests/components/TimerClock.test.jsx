var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TimerClock = require('TimerClock');

describe('TimerClock', () => {
  it('should exist', () => {
    expect(TimerClock).toExist();
  });


  describe('render', () => {
    it('should render timerClock to output', () => {
      var timerClock = TestUtils.renderIntoDocument(<TimerClock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(timerClock));
      var actualText = $el.find('.clock-text').text();
      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var timerClock = TestUtils.renderIntoDocument(<TimerClock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = timerClock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec are less than 10', () => {
      var timerClock = TestUtils.renderIntoDocument(<TimerClock/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = timerClock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
