(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Diary(title,body) {
  this.title = title;
  this.body = body;
}

Diary.prototype.countWords = function(body) {
  return body.split(' ').length;
};

Diary.prototype.countVowels = function(body) {
  vowelCount = body.match(/[aeiou]/ig).length;
  return vowelCount;
};

Diary.prototype.countConsonants = function(body) {
  consonantCount = body.match(/[bcdfghjklmnpqrstvwxyz]/ig).length;
  return consonantCount;
};

Diary.prototype.getTeaser = function(body) {
  firstSentance = body.split('.')[0] + '.';
  if (firstSentance.split(' ').length > 8) {
    return (firstSentance.split(' ').splice(0,8)).join(" ") + '...';
  } else {
    return firstSentance;
  }
};

exports.diaryModule = Diary;

},{}],2:[function(require,module,exports){
var Diary = require('./../js/journal.js').diaryModule;

$(document).ready(function() {
  $('form#entry').submit(function() {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var newEntry = new Diary(title,body);
    $('#outputWords').text(newEntry.countWords($("#body").val()));
    $('#outputVowels').text(newEntry.countVowels($("#body").val()));
    $('#outputConsonants').text(newEntry.countConsonants($("#body").val()));
    $('#outputTeaser').text(newEntry.getTeaser($("#body").val()));
    $('#outputBody').text(newEntry.body);
  });
});

},{"./../js/journal.js":1}]},{},[2]);
