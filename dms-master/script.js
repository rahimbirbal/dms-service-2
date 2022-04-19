let counter = 2;
$("#addButton").click(function () {
    if (counter > 10) {
        alert("Only 10 textboxes allow");
        return false;
    }
    $('#cel-table').append('<tr id="cel-tbl"> <td> <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"> </td> <td> <select class="form-select" id="inputGroupSelect01"> <option selected>Choose...</option> <option value="1">One</option> <option value="2">Two</option> <option value="3">Three</option> </select> </td> <td> <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"> </td> <td> <button class="button-delete" id="delete-button"> <img src="images/delete.svg" alt=""> </button> </td> </tr>');
    counter++;
});

$(document).on('click', '#delete-button', function () {
    $(this).closest('#cel-tbl').remove();
});

// $(document).ready(function progressAnimasi() {
//     $("#progress-bar").attr("style", "width:100%").animate({
//             width: "100%" 
//         },10000);
//             $("#progress-bar").attr("style", "width:0%");
//     }
// );



