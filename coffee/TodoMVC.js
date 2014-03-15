// Generated by CoffeeScript 1.7.1
'use strict';
var TodoMVC;

TodoMVC = window.TodoMVC = new Backbone.Marionette.Application();

TodoMVC.addRegions({
  header: '#header',
  main: '#main',
  footer: '#footer'
});

TodoMVC.on('initialize:after', function() {
  return Backbone.history.start();
});
