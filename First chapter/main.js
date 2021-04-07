$(document).ready(function () { // What jQuery is doing for us here is making sure that 
    'use strict';             // the browser has loaded all of the HTML before executing our JavaScript  

    paper.install(window);                              // Boilerplate: repetitive code 
    paper.setup(document.getElementById('mainCanvas')); // that is required before you do something

    var tool = new Tool();

    var c = Shape.Circle(200, 200, 80); 
    c.fillColor = 'black';
    var text = new PointText(200, 200); 
    text.justification = 'center'; 
    text.fillColor = 'white'; 
    text.fontSize = 20;
    text.content = 'Hello world!';

    tool.onMouseDown = function (event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20); 
        c.fillColor = 'green';
    };

    paper.view.draw();
})


// An asynchronous event is an event whose timing you don’t have any control over