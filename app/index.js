
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '844f473ed76c40749968291ddca2600a'
var sentryApp = '93211'
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp

var _APP_INFO = {
    name: 'Github Battle',
    branch: 'video4',
    version: '1.0'
}
Raven.config(sentryURL,{
release:  _APP_INFO.version,
tags: {
    branch: _APP_INFO.branch,
    }
}).install();
ReactDOM.render(
    routes,
    document.getElementById('app'));
