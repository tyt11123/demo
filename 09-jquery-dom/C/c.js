// Add Peter
let tr = $('<tr>',{class:"row"});
tr.append('<td>Peter</td>');
tr.append('<td>123456789</td>');
tr.append('<td>peter@gmail.com</td>');
$('tbody').append(tr);

// Add clear button
let clear = $('<div>',{id:"row-clear"});
clear.append($('<input>',{type:"submit",value:'clear'}));
$('#form1').append(clear);

// Change title
let title = $('#header h1');
title.html("Alex's contact list application");
$('#header').append(title);

// Change color
$('.row').attr('style','color: #00FF00');