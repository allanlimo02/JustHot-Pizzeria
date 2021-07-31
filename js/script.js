$(document).ready(function(){
    $("#fordelivery").click(function(){
        $("#deldetails").show();

    })
    $("#forpickup").click(function(){
        $("#deldetails").hide();
        
    })
    $('#checkdetails').click(function(){
        $("#confirm-order").show()    
    })
    $("#confirm-order").click(function(){
        $('#submit-btn').show()
        $('#reset-order').show()

    })
    $('#submit-btn').click(function(){
        alert('Order submitted successfully')
    })


})