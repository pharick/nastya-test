var questions = [
  {
    questionText: 'Сколько раз в\u00A0день ты\u00A0говоришь \u00ABмяу\u00BB?',
    answers: ['Ни\u00A0одного', 'Всего один', 'Максимум два-три', 'Около 100 раз'],
    rightAnswer: 3
  },

  {
    questionText: 'Что ты\u00A0делаешь, когда видишь кота?',
    answers: ['Прохожу мимо', 'Гавкаю', 'Кричу \u00ABкися!\u00BB и\u00A0тискаю его', 'Начинаю чесаться'],
    rightAnswer: 2
  },

  {
    questionText: 'Как тебя зовут?',
    answers: ['Матильда', 'Настя', 'Пётр', 'Зульфия', 'Ибрагим вам о чем-нибудь говорит?'],
    rightAnswer: 1
  },

  {
    questionText: 'Что ты хочешь сейчас?',
    answers: ['Делать уроки', 'Смотреть Newsroom', 'Мыть посуду', 'Жамкай мою ногу!'],
    rightAnswer: 3
  },
];

$(document).ready(function() {
  var questionNumber = 0;
  sessionStorage['questionAmount'] = questions.length;
  sessionStorage['result'] = 0;

  function showQuestion(number) {
    $('.text').text(questions[number].questionText);
    $('.answers').empty();

    for (var i = 0; i < questions[number].answers.length; i++) {
      $('.answers').append('<li><input type="radio" name="answer" id="a' + i + '" value="' + i + '"><label for="a' + i + '"></label></li>');
      $('.answers').children('li').last().find('label').text(questions[number].answers[i]);
    };

    $('.button').hide();

    $("input[name='answer']").on('click', function() {
      if (questionNumber == questions.length - 1)
        $('#finish').show();
      else
        $('#next').show();
    });
  }

  function getAnswer() {
    if ($("input[name='answer']:checked").val() == questions[questionNumber].rightAnswer)
      sessionStorage['result']++;
  }

  showQuestion(questionNumber);

  $('#next').on('click', function() {
    getAnswer();
    questionNumber++;
    showQuestion(questionNumber);
  });

  $('#finish').on('click', function() {
    getAnswer();
    window.location.href = 'result.html';
  });
});
