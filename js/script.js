$(document).ready(function(){
    $("#fordelivery").click(function(){
        $("#deldetails").show();
        $('.order-details').css('height','770px')

    })
    $("#forpickup").click(function(){
        $("#deldetails").hide();
        $('.order-details').css('height','440px')
        
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