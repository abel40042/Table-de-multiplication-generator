
      let num =window.prompt ("Entéer une nombre de votre choix")
      const container = document.getElementById('container')
      let output = "<h1>Multiplication Tables</h1>";
      output = output + "<table>";output = output ;
      
      if (num>0){
            for(let i = 1; i <= num; i++){
               output = output + "<th> " + i + "  </th>";   
            }
            output = output + "</tr>";for(let j = 1; j <=10; j++){
               if(j % 2 === 0){
      
               } else {
      
               }   output = output ;   
               
               for(let  k = 1; k <= num; k++){
                  output = output + "<td>" + j + " X " + k + " = " + j*k + "</td>"
               }
               output = output + "</tr>"
            }
         }
         
      
   
   
   else {
      window.alert("Entre une nombre supérieur à 0")
      }
   
   // output = output + "</table>";container.innerHTML = output;
   output = output + "</table>";container.innerHTML  = output;





