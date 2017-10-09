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
