$(document).ready(function(){
  //  Creating objects for pizza
    function pOrder(Name,Size,Selectedcrust,selecttopping1,selecttopping2,slctdelivery,slctpickup){
        this.uName=Name;
        this.pSize=Size;
        this.crust=Selectedcrust;
        this.topping1=selecttopping1;
        this.topping2=selecttopping2;
        this.forDelivery=slctdelivery;
        this.forPickup=slctpickup;
    }
    
//     //Getting user input
//     var inputUname=$('#userName').val();
//     var inputPizzaSize=$('#pizzaSize').val();
//     var inputcrust=$('#crust').val();

//    // var inputUname=$('#userName').val();
    

   
//     //Equating input values to pOrder constructor
//     var

    
    
    //declaring variables   
    var uName= document.getElementById('userName');
    var pSize= document.getElementById('pizzaSize');
    var crust= document.getElementById('crust');
    var chicHawaii= document.getElementById('topping1').checked;
    var peperoni= document.getElementById('topping2').checked;
    var forDelivery= document.getElementById('fordelivery').checked;
    var forPickup= document.getElementById('forpickup').checked;
    var crust_price,price,total
    

    //Showing Delivery form
    $("#fordelivery").click(function(){
        $("#deldetails").show();
        //$('.order-details').css('height','770px')

    })

    $("#forpickup").click(function(){
        $("#deldetails").hide();
       // $('.order-details').css('height','440px')
        
    })
    //Showing confirm order button
    $('#checkdetails').click(function(){
        
        

        $("#confirm-order").show()
        $('#forName').html('Dear '+uName.value+' You ordered')
        $('#forPsize').html(pSize.value+' pizza')
        $('#forCrust').html(crust.value+' As crust for your order costing '+ crust_price)
        $('#forPrice').html("Total due  is: Ksh."+price+500)
        $('#forDelivery').html(forDelivery.value+' As delivery option')
        
        //price determining
        
        switch(pSize.value){
            
            case "large":
                price = 1200;
             break;
             case "medium":
                price = 850;
             break;
             case "small":
                price = 600;
                
            
           } 
        // Crust price determination
        switch(crust.value){
            case "Crispy":
              crust_price = 200;
            break;
            case "Stuffed":
              crust_price = 250;
            break;
            case "Gluten-free":
              crust_price = 180;
            break;
            default:
              crust_price=0;
        }
        switch(forDelivery.value){

        }
        
        
    })
    
    //cost calculator
    
    //show submit button
    $("#confirm-order").click(function(){
        //check if fields are empty
        
        $('#error1').hide();
        $('#submit-btn').show();
        $('#reset-order').show();

    })
    $('#submit-btn').click(function(){
        alert("Dear "+uName.value+' Your order has \n been submitted successfully')
    })


})
