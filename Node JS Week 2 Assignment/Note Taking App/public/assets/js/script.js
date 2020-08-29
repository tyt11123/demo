document.getElementById("addtext").focus()

$(document).ready( () => {

    $('.note').autoResize();                 // auto resize textarea according to the text inside
    $('.note').trigger('change.dynSiz');     // https://stackoverflow.com/questions/8267528/jquery-autoresize-pre-filled-textarea-on-load

    $("#add").click( () => {
        console.log("test");
        $.post("/", { note: $("#addtext").val() })
        .done(() => {
            window.location.reload();
        });
    });

    for (let i = 0; i < $(".note").length; i++) {
        $(".note").eq(i).change( () => {
            let correctedIndex = Math.floor((i - 1) / 2);   // difficult to explain this "correctedIndex"
            let obj = {};                                   // but it relates to the textarea auto resize library
            obj[correctedIndex] = $(".note").eq(i).val();   // as seen in Chrome developer tools,
            $.ajax({                                        // the auto resize library added 1 more textarea
                method: 'PUT',                              // making note[0] to become $(".note").eq(1)
                url: '/',                                   // note[1] to become $(".note").eq(3)
                data: obj                                   // note[2] to become $(".note").eq(5)
            }).done(() => {                                 // and so on
                window.location.reload();
            });
        });
        $(".delete").eq(i).click( () => {
            $.ajax({
                method: 'DELETE',
                url: '/',
                data: { index: i }
            }).done(() => {
                window.location.reload();
            });;
        });
    }
});