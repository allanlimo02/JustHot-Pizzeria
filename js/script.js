$(document).ready(function(){
    var uName= document.getElementById('userName');
    var pSize= document.getElementById('pizzaSize');
    var crust= document.getElementById('crust');
    var chicHawaii= document.getElementById('topping1').checked;
    var peperoni= document.getElementById('topping2').checked;
    var forDelivery= document.getElementById('fordelivery').checked;
    var forPickup= document.getElementById('forpickup').checked;
    //var price=0;

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
        // $('#forName').html('Dear '+uName.value+' You ordered')
        // $('#forPsize').html(pSize.value+' pizza')
        // $('#forCrust').html(crust.value+' As crust for your order')
        // if(chicHawaii!==true){
        //     alert(('hawaii chicken selected'))
        // }else 
        // alert('none')
        
        //$('#forDelivery').html(forDelivery.value+' As delivery option')
    })
     //Showing toppings option
    $('#checkdetails').click(function(){
        if(chicHawaii===true && peperoni===true){
            $('#forToppings').html('Chicken hawaiian and Beef periperi As crust for your order')
            return false
        }
        if(chicHawaii===true){
            $('#forToppings').html('Chicken hawaiian As crust for your order')
            return false
        }else
        if(peperoni===true){
            $('#forToppings').html('Beef Peperoni As crust for your order')
            return false
        }else
        $('#forToppings').html('You have not selected any crust for your order')
    })
    //cost calculator
    $('#checkdetails').click(function(){
        if(pSize.value==('Small Pizza @ Ksh 600')){
            var pizzaPrice=600;
        }else
        if(pSize.value==('Medium Pizza @ Ksh. 850')){
            var pizzaPrice=850;
        }else
        if(pSize=='Mega Pizza @ Ksh. 1200'){
            var pizzaPrice=1200
        }else
        var pizzaPrice=0
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
