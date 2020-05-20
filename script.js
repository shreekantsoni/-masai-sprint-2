var count = 80 ;
        var result = 0;
        function insert_Row()
          {
         var name = document.getElementById("name").value;
         var rate = document.getElementById("rate").value;
         var quantity = document.getElementById("quantity").value;
          result = Number(rate) * Number(quantity);
          
          count = count + result;
          
          var bill = count;
          var disc = 5;
          var t =  disc * 100 / bill;
          var tax = bill + t;
          var total = tax - 10;
          
          var x=document.getElementById('sampleTable').insertRow(1);
          var y = x.insertCell(0);
          var z = x.insertCell(1);
           var c = x.insertCell(2);
           var f = x.insertCell(3);
                   
                     y.innerHTML=name;
                    z.innerHTML=rate;
                    c.innerHTML=quantity;
                   f.innerHTML=result;
         
          document.querySelector("#disp").innerHTML = count;
          document.querySelector("#tax").innerHTML = tax;
          document.querySelector("#totalBill").innerHTML = total;
          
        }
        
        function myFunction() {
          var x = document.getElementById("myInput").value;
          document.getElementById("demo").innerHTML = "Date :- " + x;
        }