$(document).ready(function() {
  var questions = [
    {
      questionText: 'Сколько раз в\u00A0день ты\u00A0говоришь \u00ABмяу\u00BB?',
      answers: ['Ни\u00A0одного', 'Всего один', 'Максимум два-три', 'Около 100 раз']
    },

    {
      questionText: 'Что ты\u00A0делаешь, когда видишь кота?',
      answers: ['Прохожу мимо', 'Гавкаю', 'Кричу \u00ABкиса!\u00BB и\u00A0тискаю его', 'Начинаю чесаться']
    },
  ];

  var questionNumber = 0;

  showQuestion = function(number) {
    $('.text').text(questions[number].questionText);
    $('.answers').empty();

    for (var i = 0; i < questions[number].answers.length; i++) {
      $('.answers').append('<li><input type="radio" name="answer" id="answer-' + i + '"><label for="answer-' + i + '"></label></li>');
      $('.answers').children('li').last().find('label').text(questions[number].answers[i]);
    };
  };

  showQuestion(questionNumber);

  $('.next').on('click', function() {
    questionNumber += 1;
    if (questionNumber < questions.length)
      showQuestion(questionNumber);
    else {
      alert('That\'s it!');
    }
  });
});
