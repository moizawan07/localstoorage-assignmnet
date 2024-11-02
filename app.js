// Data store localStorage Function

function Stored(){
    
    var arrId = ['firstname', 'surname', 'birthday', 'phonenumber', 'Adress', 'Email', 'city',]   //  inputs id name stored in an arrId -->

    
    for(var i = 0; i<arrId.length; i++){

                         // KeyName    // KeyValue
        localStorage.setItem(arrId[i] , document.getElementById(arrId[i]).value)
       
    }

     // Gender input type ='Radio' value  get

    var genderFind = document.getElementsByName('gender');

    for(var i = 0; i<genderFind.length; i++){

        if(genderFind[i].checked){

            var genderconfirm = genderFind[i].value

            localStorage.setItem('gender', genderconfirm)
            
        }
    }
  

 }

  //  LocalStorage Get value ID Card Function

function idCard (){
     

   document.getElementById('idcard-main').style.display = 'block'          // IdCard box ShowIt

   var idPrintBox = document.getElementById('idcard-main');
   var random = Math.floor(Math.random()*1000000)
  
    

     idPrintBox.innerHTML +=  `
     <table>
       <tr>
            <td> <b>Name: </b> ${localStorage.getItem('firstname')} </td> 
            <td> <b>Email: </b> ${localStorage.getItem('Email')} </td> 
            <td> <b>Adress: </b> ${localStorage.getItem('Adress')} </td>  
            <td> <b>Roll no: </b> ${random}  </td>
       </tr>
    </table>
    `
  
   }


 




