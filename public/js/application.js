var choice = 2;
var question = 1;

$(document).ready(function() {
  $('form.add-choice').on('submit', function(e) {
    choice ++;
    console.log("click heard");
    e.preventDefault();
    console.log(this.action);
    $.ajax({
      type: this.method,
      url: this.action,
      data:{question_value: question, choice_value: choice}
    }).done(function(server_data) {
      $('.add-survey-content').append(server_data);
      // console.log("success " + server_data);
    });

  });

  $('form.add-question').on('submit', function(e) {
    choice = 2;
    question +=1;
    e.preventDefault();
    $.ajax({
      type: this.method,
      url: this.action,
      data:{question_value: question, choice_value: choice}
    }).done(function(server_data) {
      $('.add-survey-content').append(server_data);
    });
  });
  $('#survey-name-modal').on('click', function(){
    $('div#show-modal-btn').hide();
    var surveyName = $('input').val();
    $("#hidden-survey-title").val(surveyName);
    $(".new-survey-title h3").append(surveyName);

  });

});
