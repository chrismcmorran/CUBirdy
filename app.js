var request = require('request');
var tableScraper = require('table-scraper');
var fs = require('fs');
var S = require('string');
var colors = require('colors');
var data;
console.log(colors.yellow('Searching for bird courses...'));
tableScraper.get('https://central.carleton.ca/prod/bwysched.p_course_search?wsea_code=EXT&term_code=201720&session_id=0&ws_numb=&sel_aud=dummy&sel_subj=dummy&sel_camp=dummy&sel_sess=dummy&sel_attr=dummy&sel_levl=dummy&sel_schd=dummy&sel_insm=dummy&sel_link=dummy&sel_wait=dummy&sel_day=dummy&sel_begin_hh=dummy&sel_begin_mi=dummy&sel_begin_am_pm=dummy&sel_end_hh=dummy&sel_end_mi=dummy&sel_end_am_pm=dummy&sel_instruct=dummy&sel_special=dummy&sel_resd=dummy&sel_breadth=dummy&sel_levl=UG&sel_subj=&sel_number=&sel_crn=&sel_special=OL&sel_sess=&sel_schd=&sel_instruct=&sel_begin_hh=0&sel_begin_mi=0&sel_begin_am_pm=a&sel_end_hh=0&sel_end_mi=0&sel_end_am_pm=a&sel_day=m&sel_day=t&sel_day=w&sel_day=r&sel_day=f&sel_day=s&sel_day=u&block_button=').then(function(tableData){
    data = tableData;
    var courses = data[0];
    console.log(colors.magenta('Bird Courses for Summer 2017'));
    for (var i = 0; i < courses.length; i++){
        var course = courses[i];
        if (course[3] && course[4] === 'R'){
            console.log(colors.cyan(course[3]));
        }
    }


});
