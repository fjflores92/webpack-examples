import '../css/index.css'
import $ from 'jquery'

$(function(){
    var name = prompt("What's your name?");
    $("body").append($("<h1>").text("Hello, " + name + "!"));
});