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
          switch(crust.value){
            case "cripsy":
              cPrice=155;
              break;
            case "stuffed":
              cPrice=89;
              break;
            case "glutten-free":
                cPrice=185;
                break;
            default:
                cPrice=0
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
    
    
      
     
        

     

        var tCost=((price*inputNumber.value)+cPrice)
        $('#deliveryQ').show()
        $("#confirm-order").show()
        $('#forName').html('Dear '+newOrder.uName.value+' You ordered')
        $('#forPsize').html(inputNumber.value+' '+newOrder.pSize.value+' pizza(s)')
        $('#forCrust').html(crust.value +' As crust for your order costing: '+cPrice)
        $('#forPrice').html("Total due  is: Ksh."+((price*inputNumber.value)+cPrice))

       // $('#forDelivery').html(forDelivery.value+' As delivery option')        
    })    
    //show submit button
    $("#confirm-order").click(function(){
        $('#submit-btn').show();
        $('#reset-order').show();
        

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
      alert("Dear "+newOrder.uName.value+', Your order of Ksh: '+((price*inputNumber.value)+cPrice)+ ' pizza is being proccessed ')

    })
    $('#deliveryQ').click(function(){
        $('#deldetails').toggle();
        $('#forDelivery').html("Shipping fees Ksh: "+150)
    })

})
