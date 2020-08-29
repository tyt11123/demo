// Add a Update Contacts list section 
let update = $('<section>', {id:'update-contact'});
update.append($('<h1>').append('Update Contacts'));
let form2 = $('<form>', {id: 'form2'});
form2.append($('<div>', {id: 'update-name'}).append($('<input>',{type: 'text', name:'name', placeholder:'Name'})));
form2.append($('<div>', {id: 'update-phone'}).append($('<input>',{type:'text', name:'phone', placeholder:'Telephone Number'})));
form2.append($('<div>', {id: 'update-email'}).append($('<input>',{type:'text', name:'email', placeholder:'Email'})));
form2.append($('<div>', {id: 'update-submit'}).append($('<input>',{type:'submit', value:'submit'})));
update.append(form2);
$('#content').append(update);

// create function to validate name
function nameCheck(elem) {
    if (elem.val().length >= 50) {
        elem.attr('style','border: 2px solid #FF0000'); //change border to red
        return false;
    } else {
        elem.attr('style','border: 2px inset');  // recover border
        return true;
    }
}

// create function to validate phone
function phoneCheck(elem) {
    let x = elem.val().length;
    if ( (x > 16) || (x < 6)) {
        elem.attr('style','border: 2px solid #FF0000');
        return false;
    } else {
        elem.attr('style','border: 2px inset');
        return true;
    };
}

//function to validate email
function isEmail(elem) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let ans = regex.test(elem.val());
    if (ans) {
        elem.attr('style','border: 2px inset');
    } else {
        elem.attr('style','border: 2px solid #FF0000');
    }
    return ans;
}

//set event for blur
$('input[name="name"]').each( function(index) {
    $(this).blur( function() {
        nameCheck($(this));
    });
});

$('input[name="phone"]').each( function(index) {
    $(this).blur( function() {
        phoneCheck($(this));
    });
});

$('input[name="email"]').each( function(index) {
    $(this).blur( function() {
        isEmail($(this));
    });
});

// append new contact to table for form 1
$("#form1").submit(function(event){
    event.preventDefault();
    let a = $('#form1 div input[name="name"]');
    let b = $('#form1 div input[name="phone"]');
    let c = $('#form1 div input[name="email"]');
    if( nameCheck(a) && phoneCheck(b) && isEmail(c) ) {
        let tr = $('<tr>',{class:"row"});
        tr.append('<td>'+a.val()+'</td>');
        tr.append('<td>'+b.val()+'</td>');
        tr.append('<td>'+c.val()+'</td>');
        $('tbody').append(tr);
    };
    // run the script in the bonus exercise once more
    // to make sure new contact can be populated
    // to form 2 once it is clicked
    $('tbody tr').each( function(index) {
        $(this).click( function() {
            let a = $(this).children('td:eq(0)').text();
            let b = $(this).children('td:eq(1)').text();
            let c = $(this).children('td:eq(2)').text();
            $('#form2 div input[name="name"]').val(a);
            $('#form2 div input[name="phone"]').val(b);
            $('#form2 div input[name="email"]').val(c);
        });
    });
});

//update contact to table for form 2
$("#form2").submit(function(event){
    event.preventDefault();
    let a = $('#form2 div input[name="name"]');
    let b = $('#form2 div input[name="phone"]');
    let c = $('#form2 div input[name="email"]');
    if( nameCheck(a) && phoneCheck(b) && isEmail(c) ) {
        $('tbody tr').each( function(index) {
            if ( $(this).children('td:eq(0)').text().localeCompare(a.val()) === 0 ) {
                $(this).children('td:eq(0)').text(a.val());
                $(this).children('td:eq(1)').text(b.val());
                $(this).children('td:eq(2)').text(c.val());
            }
        });
    };
});

//bonus: populate values of the contact list to form 2
$('tbody tr').each( function(index) {
    $(this).click( function() {
        let a = $(this).children('td:eq(0)').text();
        let b = $(this).children('td:eq(1)').text();
        let c = $(this).children('td:eq(2)').text();
        $('#form2 div input[name="name"]').val(a);
        $('#form2 div input[name="phone"]').val(b);
        $('#form2 div input[name="email"]').val(c);
    });
});