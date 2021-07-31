$(document).ready(function(){
    $("#fordelivery").click(function(){
        $("#deldetails").show();

    })
    $("#forpickup").click(function(){
        $("#deldetails").hide();
        
    })
    $("#checkdetails").click(function(){
        $('#submit-btn').show()
        $('#reset-order').show()

    })

})