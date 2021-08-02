function pOrder(name,Size,Selectedcrust,selecttopping1,selecttopping2,slctdelivery,noofpizza){
    this.uName=name;
    this.pSize=Size;
    this.crust=Selectedcrust;
    this.topping1=selecttopping1;
    this.topping2=selecttopping2;
    this.forDelivery=slctdelivery;
    this.numofpizza=noofpizza;
}

$(document).ready(function(){
  //  Creating objects for pizza 
    var inputName= document.getElementById('userName');
    var pSize= document.getElementById('pizzaSize');
    var crust= document.getElementById('crust');
    var chicHawaii= document.getElementById('topping1').checked;
    var peperoni= document.getElementById('topping2').checked;
    var forDelivery= document.getElementById('fordelivery').checked;
    var inputNumber=document.getElementById('no-of-pizza')
    var delreq=document.getElementById('delreq').checked
    var shipping=50;
    
    //Constructor to create a new order
    var newOrder= new pOrder(inputName,pSize,crust,chicHawaii,peperoni,forDelivery)

    //Showing Delivery form
    $("#fordelivery").click(function(){
        $("#deldetails").show();
    })
    $("#forpickup").click(function(){
        $("#deldetails").hide();
      
        
    })
    //Showing confirm order button
    $('#checkdetails').click(function(){
        
        
        
        
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
        if(chicHawaii.value==="chicken" && peperoni.value==="beef"){
            $('#forToppings').html(' Chicken hawaii as toppings ');
        }else
        if(chicHawaii.value==='chicken'){
            $('#forToppings').html(' Chicken hawaii as toppings ');
        }else
        if(peperoni.value==='beef'){
            $('#forToppings').html(' Beef periperi as toppings ');
        }else
        $('#forToppings').html(' With no toppings ');
        //Crust price determination
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
        var delPrice=0
        if(delreq==true){
          delPrice=150;
        }else
        delPrice=0

        $('#deliveryQ').show()
        $("#confirm-order").show()
        $('#forName').html('Dear '+newOrder.uName.value+' You ordered')
        $('#forPsize').html(inputNumber.value+' '+newOrder.pSize.value+' pizza')
        $('#forCrust').html(crust.value +' As crust for your order costing ')
        $('#forPrice').html("Total due  is: Ksh."+(price*inputNumber.value))
       // $('#forDelivery').html(forDelivery.value+' As delivery option')        
    })    
    //show submit button
    $("#confirm-order").click(function(){
        $('#submit-btn').show();
        $('#reset-order').show();
        $('#formMain').hide

    })
    $('#submit-btn').click(function(){
      if(newOrder.uName.value=='') {
        $('#error1').toggle()
        return false
      } else
      if(newOrder.pSize.value==''){
        $('#error2').show()
        return false;
      }else
      if(newOrder.crust.value==''){
        $('#error3').show()
        return false;
      }else      
      alert("Dear "+newOrder.uName.value+', Your order has of '+newOrder.pSize.value+ ' pizza is being proccessed \n')

    })
    $('#deliveryQ').click(function(){
        $('#deldetails').toggle();
        $('#forDelivery').html("Shipping fees Ksh: "+shipping)
    })

})
