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
