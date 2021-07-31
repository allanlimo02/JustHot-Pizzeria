$(document).ready(function(){
    var uName= document.getElementById('userName');
    


    //form Validation
    $('#checkdetails').click(function(){
        // if(uName==''){
        //     $("#error1").show()
        //     return false;
        // }
        //alert(uName.value)
    })

    //Showing Delivery form
    $("#fordelivery").click(function(){
        $("#deldetails").show();
        $('.order-details').css('height','770px')

    })

    $("#forpickup").click(function(){
        $("#deldetails").hide();
        $('.order-details').css('height','440px')
        
    })
    //Showing confirm order button
    $('#checkdetails').click(function(){
        $("#confirm-order").show()
        $('#forName').append('Dear '+uName.value+' You ordered')    
    })
    //show submit button
    $("#confirm-order").click(function(){
        
        
        $('#submit-btn').show()
        $('#reset-order').show()

    })
    $('#submit-btn').click(function(){
        alert('Order submitted successfully')
    })


})