

//Kontouppgift

$(function()
{

    $("#jb").click(function()
    {
        var jnd = $('#jn').val(); //Hämtar värdet för det man skriver in i username.
        var jpd = $('#jp').val(); //Hämtar värdet för det man skriver in i password.
        var jrd = $('#jp2').val(); //Hämtar värdet för det man skriver in i confim password.
        var jed = $('#je').val(); //Hämtar värdet för det man skriver in i email.

        if ( jnd != " " && jnd != null && jpd != " " && jpd != null && jrd == jpd && jed != " " && jed != null && $('#jc').is(':checked')) //Kollar så att alla värden stämmer och är ifyllda.
        {
            window.open("https://kenjisakurai.github.io/Produktsidan/"); //Går till en annan hemsida när man lyckas skapa kontot.

            alert("Created account successfully"); //Skickar alert.

            return true;
        }

        else if (jnd == "" || jnd == null)
        {
            alert("Username is missing.");
        }

        else if ( jpd == "" || jpd == null)
        {
            alert("Password is missing.");
        }

        else if ( jrd != jpd)
        {
            alert("passwords do not match.");
        }

        else if ( jed == "" || jed == null)
        {
            alert("Email missing.");
        }

        else{
            alert("Checkbox not checked.");
        }

        return false;
    });
});





$('#jc').click(function()
{
    if ($('#jb').is(':disabled'))
    {
        $('#jb').removeAttr('disabled');
    }
    else 
    {
        $('#jb').attr('disabled', 'disabled');
    }        
});

