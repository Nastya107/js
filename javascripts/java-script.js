$(function($) {
	$("#draggable").draggable($);
});

$(function($) {
	$(".tree").draggable($);
});

$(function($) {
	$(".bush").draggable($);
});

$(document).ready(function($) {
	$('.darkostrov-open').click(function() {
		$('.darkostrov-fade').fadeIn();
		return false;
	});

	$('.darkostrov-close').click(function() {
		$(this).parents('.darkostrov-fade').fadeOut();
		return false;
	});

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.darkostrov-fade').fadeOut();
		}
	});

	$('.darkostrov-fade').click(function(e) {
		if ($(e.target).closest('.darkostrov').length == 0) {
			$(this).fadeOut();
		}
	});
});




$(document).ready(function(){
    $("button").click(function(){
        $("p5").addClass("hide");
				$("#ostrovtima").addClass("hide");
				$("#button").addClass("hide");
        $("#candle").addClass("appear");
    });
});

$(document).ready(function(){
    $(".candle").click(function(){
		$("#candlebefore").attr("src", "images/candle1.svg");
    });
});

$(document).ready(function(){
    $("#candlebefore").click(function(){
		$("#ostrovtima").removeClass("hide");
		$("#candlebefore").addClass("hide");
		$("p7").addClass("appear");
		$(".button2").addClass("appear1");
    });
});

$(document).ready(function($) {
$('.button2').click(function() {
		$(this).parents('.darkostrov-fade').fadeOut();
		return false;
	});
});



$(document).ready(function($) {
	$('.shadesc-open').click(function() {
		$('.shadesc-fade').fadeIn();
		return false;
	});

	$('.shadesc-close').click(function() {
		$(this).parents('.shadesc-fade').fadeOut();
		return false;
	});

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.shadesc-fade').fadeOut();
		}
	});

	$('.shadesc-fade').click(function(e) {
		if ($(e.target).closest('.shadesc').length == 0) {
			$(this).fadeOut();
		}
	});
});



$(document).ready(function(){
    $("#button3").click(function(){
        $("p10").addClass("hide");
				$("#shades").addClass("hide");
				$("#button3").addClass("hide");
				$(".sun").addClass("appear1");
			});
	});

	$(document).ready(function(){
	    $(".sun").click(function(){
					$(".sun").removeClass("appear1");
					$(".wings").addClass("hide");
				  $("p12").addClass("appear");
					$("#shades").removeClass("hide");
          $(".button2").addClass("appear1");
				});
		});






$(document).ready(function(){
    $(".ship").click(function(){
		$("#ship").attr("src", "images/ship1.svg");
    });
});


$(document).ready(function(){
    $(".Os-Alta").click(function(){
		$("#OsAlta").attr("src", "images/OsAlta1.png");
    });
});

$(document).ready(function(){
    $(".Ketterdam").click(function(){
		$("#Ketterdambefore").attr("src", "images/Ketterdam1.svg");
    });
});


$(function(){
    $('#Rose').on('click', function(){
        $(this).toggleClass('transform');
    });
});


$(document).ready(function($) {
	$('.cracken-open').click(function() {
		$('.cracken-fade').fadeIn();
		return false;
	});

	$('.cracken-close').click(function() {
		$(this).parents('.cracken-fade').fadeOut();
		return false;
	});

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.cracken-fade').fadeOut();
		}
	});

	$('.cracken-fade').click(function(e) {
		if ($(e.target).closest('.cracken').length == 0) {
			$(this).fadeOut();
		}
	});
});

$(document).ready(function(){
    $("#button4").click(function(){
        $("#tentacles").addClass("hide");
				$("#button4").addClass("hide");
				$("#shades").addClass("hide");
				$("p10").addClass("hide");
				$(".swords").addClass("appear1");
			});
	});
