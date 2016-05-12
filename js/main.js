var pi_mp3 = document.createElement("audio");
pi_mp3.src = 'sound/pi.mp3';
pi_mp3.preload=true;

var numbness_mp3 = document.createElement("audio");
numbness_mp3.src = 'sound/numbness.mp3';
numbness_mp3.preload=true;

var cat_mp3 = document.createElement("audio");
cat_mp3.src = 'sound/cat.mp3';
cat_mp3.preload=true;

var chime_mp3 = document.createElement("audio");
chime_mp3.src = 'sound/chime.mp3';
chime_mp3.preload=true;


$(function() {
    $( "#draggable1" ).draggable();
    $( "#draggable2" ).draggable();
    $( "#draggable3" ).draggable();
    $( "#draggable4" ).draggable();
    $( "#draggable5" ).draggable();
    $( "#droppable1" ).droppable({
        accept: "#draggable1",
        drop: function (event, ui) {
            $(this).css("font-size", "220px");
            $("#info").html("Good Job!");
            cat_mp3.play();

        },
        over: function (event, ui) {
            $(this).css("font-size", "250px");
            $("#info").html("Almost there!");
            chime_mp3.play();
        },
        out: function (event, ui) {
            $(this).css("font-size", "200px");
            $("#info").html("Moving away...");
            numbness_mp3.play();
        }

    });
});