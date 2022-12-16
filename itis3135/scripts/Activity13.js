$(document).ready(function() 
{
    $.ajax(
    {
        type: "get",
        url: "../itis3135/components/team.json",
        beforeSend: function() 
        {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) 
        {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) 
        {
            $("#team").html("");
            $.each(data, function(key, value) 
            {
                $.each(value, function(key, value) 
                {
                    $("#team").append("<h3>" + value.name + "</h3>" + value.title + "<br>" + value.bio + "<br>");
                });
            });
        }
    })
});
