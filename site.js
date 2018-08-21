/* TO DO:
    - Tag li links to actual positions on page
    - Add real blog link
*/

var init_load = 0;
var last_element_id;

var skrollrobj = skrollr.init({
    forceHeight: true,
    keyframe: function(element, name, direction) {
        if (name == "data0") {
            // JUST IN CASE I NEED TO HANDLE THIS
        } else { // NEED TO THINK OF A WAY TO MAP THESE DYNAMICALLY (COULD ADD ANOTHER ATTRIBUTE TO THE DATASET)
            if (element.id == "9") {
                if (direction == "down") {
                    $("#about_me_li").css('color', '#ffe699');
                    //$("#about_me_li").text('--> about_me <--');
                    //console.log("NOT INITIAL LOZD");
                    last_element_id = element.id;
                } else {
                    $("#about_me_li").css('color', 'white');
                    //$("#about_me_li").text('about_me');
                    //console.log("NOT INITIAL LOZD");
                    last_element_id = element.id;
                }
            }
            if (element.id == "12") {
                if (direction == "down") {
                    $("#my_work_li").css('color', '#ffe699');
                    //console.log("NOT INITIAL LOZD");
                    last_element_id = element.id;
                } else {
                    $("#my_work_li").css('color', 'white');
                    //console.log("NOT INITIAL LOZD");
                    last_element_id = element.id;
                }
            }
            if (element.id == "16") {
                if (direction == "down") {
                    $("#my_blog_li").css('color', '#ffe699');
                    //console.log("NOT INITIAL LOZD");
                    last_element_id = element.id;
                } else {
                    $("#my_blog_li").css('color', 'white');
                    //console.log("NOT INITIAL LOZD");
                    last_element_id = element.id;
                }
            }
            if (element.id == "19") {
                if (direction == "down") {
                    $("#contact_me_li").css('color', '#ffe699');
                    //console.log("NOT INITIAL LOZD");
                    last_element_id = element.id;
                } else {
                    $("#contact_me_li").css('color', 'white');
                    //console.log("NOT INITIAL LOZD");
                    last_element_id = element.id;
                }
            }

        }
    }
});

//var scroll_speed_in = 100;

var console_data = [{
    "id": "1",
    "order": "1",
    "class": "prompt",
    "text": "<span style='color:#ace600'>welcome to my new portfolio website. please scroll down to learn more about me. you can scroll back up at any point. thanks for stopping by! <br /><br />[&copy; nick wilson all rights reserved.]</span><br /><br />nickw@localhost ~ "
}, {
    "id": "2",
    "order": "2",
    "class": "typing",
    "text": "main menu"
}, {
    "id": "3",
    "order": "3",
    "class": "output",
    "text": "-rw-r----- 1 nick developer 1564 Jan 19 2016 <span style='color:#ffe699'>about_me</span>"
}, {
    "id": "4",
    "order": "4",
    "class": "output",
    "text": "-rw-r----- 1 nick developer 1564 Jan 19 2016 <span style='color:#ffe699'>my_work</span>"
}, {
    "id": "5",
    "order": "5",
    "class": "output",
    "text": "-rw-r----- 1 nick developer 1564 Jan 19 2016 <span style='color:#ffe699'>my_blog</span>"
}, {
    "id": "6",
    "order": "6",
    "class": "output",
    "text": "-rw-r----- 1 nick developer 1564 Jan 19 2016 <span style='color:#ffe699'>contact_me</span>"
}, {
    "id": "7",
    "order": "7",
    "class": "prompt",
    "text": "nickw@localhost ~ "
}, {
    "id": "8",
    "order": "8",
    "class": "typing",
    "text": "open about_me"
}, {
    "id": "9",
    "order": "9",
    "class": "output",
    "text": "<span style='color:#ace600'>hi! my name is nick and i like to code. my latest fascination has been javascript, of which i'm trying to learn more every day. i love the freedom you get with javascript, and how endless the possibilities are. however, i also have plenty of professional experience in database development using SQL (on oracle and microsoft servers), and server-side development using microsoft languages such as C# and VB.<br /><br />i can also help you build an affordable website for yourself or your business, and give you access to a CMS so you can maintain the content yourself. <br /><br />you can learn more about my experience on my linkedin page:</span><br /><br /><a class='btn btn-social btn-linkedin' href='https://www.linkedin.com/in/nicholaswilson05' target='_blank'><span class='fa fa-linkedin'></span>LinkedIn</a>"
}, {
    "id": "10",
    "order": "10",
    "class": "prompt",
    "text": "nickw@localhost ~ "
}, {
    "id": "11",
    "order": "11",
    "class": "typing",
    "text": "open my_work"
}, {
    "id": "12",
    "order": "12",
    "class": "output-break",
    "text": "<span style='color:#ace600'>i promise to have some samples of my work here soon. but in the meantime, you can check out my profile on <a href='https://codepen.io/nicholaswilson/' target='_blank'>codepen</a> </span>"
}, /*{
  "id": "13",
  "order": "13",
  "class": "output-break",
  "text": "<div class='row'><div class='col-xs-6 col-sm-3 col-md-2 col-lg-4'><a href='#' class='thumbnail'><img src='http://placehold.it/400x300/ffffff' alt='...'></a></div><div class='col-xs-6 col-sm-3 col-md-2 col-lg-4'><a href='#' class='thumbnail'><img src='http://placehold.it/400x300/ffffff' alt='...'></a></div><div class='col-xs-6 col-sm-3 col-md-2 col-lg-4'><a href='#' class='thumbnail'><img src='http://placehold.it/400x300/ffffff' alt='...'></a></div><div class='col-xs-6 col-sm-3 col-md-2 col-lg-4'><a href='#' class='thumbnail'><img src='http://placehold.it/400x300/ffffff' alt='...'></a></div><div class='col-xs-6 col-sm-3 col-md-2 col-lg-4'><a href='#' class='thumbnail'><img src='http://placehold.it/400x300/ffffff' alt='...'></a></div><div class='col-xs-6 col-sm-3 col-md-2 col-lg-4'><a href='#' class='thumbnail'><img src='http://placehold.it/400x300/ffffff' alt='...'></a></div><div>"
},*/ {
    "id": "14",
    "order": "14",
    "class": "prompt",
    "text": "nickw@localhost ~ "
}, {
    "id": "15",
    "order": "15",
    "class": "typing",
    "text": "open my_blog"
}, {
    "id": "16",
    "order": "16",
    "class": "output",
    "text": "<span style='color:#ace600'>for now, you can check out my blog <a href='https://nickwxyz.wordpress.com/' target='_blank'>here</a></span>"
}, {
    "id": "17",
    "order": "17",
    "class": "prompt",
    "text": "nickw@localhost ~ "
}, {
    "id": "18",
    "order": "18",
    "class": "typing",
    "text": "open contact_me"
}, {
    "id": "19",
    "order": "19",
    "class": "output",
    "text": "<span style='color:#ace600'>contact form coming soon. in the meantime, please find me on the following networks:<br/><br/><a class='btn btn-social btn-google' href='https://plus.google.com/u/0/110590451502875372279' target='_blank'><span class='fa fa-google'></span>Google</a> <a class='btn btn-social btn-linkedin' href='https://www.linkedin.com/in/nicholaswilson05' target='_blank'><span class='fa fa-linkedin'></span>LinkedIn</a> <a class='btn btn-social btn-github' href='https://github.com/the-nick-wilson' target='_blank'><span class='fa fa-github'></span>GitHub</a> <a class='btn btn-social btn-twitter' href='https://twitter.com/the1nickwilson' target='_blank'><span class='fa fa-twitter'></span>Twitter</a></span>"
}, {
    "id": "20",
    "order": "20",
    "class": "prompt",
    "text": "nickw@localhost ~ "
}];

$(document).ready(function() {
    initializeScroller($("#scroll-div"), console_data, 100);

})

function getSpansFromString(input_string) {
    var retVal = [];
    var split_string = input_string.split('');

    for (var i = 0; i < split_string.length; i++) {
        //retVal = retVal + "<span>" + split_string[i] + "</span>";
        var this_element = $("<span>" + split_string[i] + "</span>");
        //this_element.attr("data-100", "display:inline");
        //this_element.attr('data-' + scroll_line * scroll_speed, 'display:inline');
        retVal[i] = this_element;
        //retVal[i] = "<span>" + split_string[i] + "</span>";
    }

    //var element = $(retVal[0]);
    //element.attr('data-info', '222');
    //console.log(element);

    return retVal;
}

function initializeScroller(element, data, scroll_speed) {
    var scroll_line = 0;
    var last_class;

    for (var i = 0; i < data.length; i++) {
        if (i == 0) {
            element.append('<span data-0="display:inline" ' + 'data-' + i * scroll_speed + '="display:inline"' + '>' + data[i].text + '</span>');
        } else {
            if (data[i].class == "prompt" && data[i].order != 1) {
                element.append('<br data-0="display:none" data-' + scroll_line * scroll_speed + '="display:inline" />');
                element.append('<br data-0="display:none" data-' + scroll_line * scroll_speed + '="display:inline" />');
            }
            if (data[i].class == "output" || data[i].class == "output-break") {

                if (last_class == "output" || last_class == "output-break") {
                    element.append('<br data-0="display:none" data-' + scroll_line * scroll_speed + '="display:inline" />');
                } else {
                    //console.log("LAST CLASS: " + last_class);
                    //console.log("THIS TEXT: " + data[i].text);

                    element.append('<br data-0="display:none" data-' + scroll_line * scroll_speed + '="display:inline" />');
                    element.append('<br data-0="display:none" data-' + scroll_line * scroll_speed + '="display:inline" />');
                }
            }
            if (data[i].class == "typing") {
                var spans = getSpansFromString(data[i].text);
                for (var s = 0; s < spans.length; s++) {
                    var this_element = $(spans[s][0]);
                    this_element.attr("data-0", "display:none");
                    this_element.attr("data-" + scroll_line * scroll_speed, "display:inline");
                    element.append(this_element[0].outerHTML);
                    scroll_line++;
                }
            } else {
                element.append('<span id="' + data[i].id + '" data-emit-events data-0="display:none" ' + 'data-' + scroll_line * scroll_speed + '="display:inline"' + '>' + data[i].text + '</span>');
            }
        }
        skrollrobj.refresh();
        last_class = data[i].class;
        if (data[i].class != "output") {
            scroll_line++;
        }
    }

    var elem = $("#scroll-div");
    //var elem = document.getElementById('sroll-div');
    //console.log(elem.scrollTop);
    //console.log(elem.scrollHeight);
    elem.scrollTop = elem.scrollHeight;
}