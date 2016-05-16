var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {

  it('should exist', () => {
    expect(Controls).toExist();
  });


  describe('render', () => {
    it('should render Pause when strated', () => {
      var controls = TestUtils.renderIntoDocument(<Controls screenName="countdown" countdownState="started"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var pauseButton = $el.find('button:contains(Pause)');
      expect(pauseButton.length).toBe(1);
    });

    it('should render Start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls screenName="countdown" countdownState="paused"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var startButton = $el.find('button:contains(Start)');
      expect(startButton.length).toBe(1);
    });
  }); //end describe render

/*
  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec are less than 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format edge case when seconds is equal to zero', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 0;
      var expected = '00:00';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  }); // end describe formatSeconds
  */
});
