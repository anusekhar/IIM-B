var slide = [];
var i = 0;
$(function() {
    $.getJSON('js/slides.json').done(function(data) {
        console.log(data);
        slide = data;
        $('#slider').html('<div class="slider_img"><img src="' + slide[i].image_url + '" alt="Image" class="roller-slot"></div><div class="slider_content"><h2>' + slide[i].title + '</h2><p>' + slide[i].desc + '</p>' + '<a href="#">Read More</a><div class="banner"><div id="prev"></div><div id="next"><div></div></div>');
    }).error(function() {
        console.log('something is wrong with the json call');
    }).success(function() {
        dostuff(slide);
    });
});

function dostuff(obj) {
    document.getElementById('next').onclick = function() {
        nextSlide(obj);
    };

    document.getElementById('prev').onclick = function() {
        prevSlide(obj);
    };
}

function nextSlide(obj) {
    console.log('in next');
    if (i < 3) {
        i++;
        $('#slider').html('<div class="slider_img"><img src="' + obj[i].image_url + '" alt="Image" class="roller-slot"></div><div class="slider_content"><h2>' + obj[i].title + '</h2><p>' + obj[i].desc + '</p>' + '<a href="#">Read More</a><div class="banner"><div id="prev"></div><div id="next"><div></div></div>');
        if (i === 2) {
            document.getElementById('prev').onclick = function() {
                prevSlide(obj);
            };
        } else {
            document.getElementById('next').onclick = function() {
                nextSlide(obj);
            };
            document.getElementById('prev').onclick = function() {
                prevSlide(obj);
            };
        }
    }
}


function prevSlide(obj) {
    if (i > 0) {
        i--;
        $('#slider').html('<div class="slider_img"><img src="' + obj[i].image_url + '" alt="Image" class="roller-slot"></div><div class="slider_content"><h2>' + obj[i].title + '</h2><p>' + obj[i].desc + '</p>' + '<a href="#">Read More</a><div class="banner"><div id="prev"></div><div id="next"><div></div></div>');
        if (i === 0) {
            document.getElementById('next').onclick = function() {
                nextSlide(obj);
            };
        } else {
            document.getElementById('next').onclick = function() {
                prevSlide(obj);
            };
            document.getElementById('prev').onclick = function() {
                prevSlide(obj);
            };
        }
    }
}
