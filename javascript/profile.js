var gender2="";
   var dataURL="";
   var reader;
   var m,a;
 
  console.log("chari");
   
  



     
  


	$(document).ready(function() {

  $("#photo").on("change", function(event) {
          var input = event.target;
           reader = new FileReader();
          reader.onload = function(){
            dataURL = reader.result;
                  
            $("#photo").parent().find("img").attr("src", dataURL);
          };
          reader.readAsDataURL(input.files[0]);
        });


});





    



   /*  var ref = new Firebase('https://telugismregister.firebaseio.com/');*/
      var genders="";
     
      
    function gender() {
    if (document.getElementById('male').checked){
    	 genders="male";}
    else if(document.getElementById('female').checked)
    	genders="female";
    else if(document.getElementById('trans').checked)
    	genders="trans";
}


  var uids;
   
 

      $('#submit').click(function() {
   $("#saving").modal({backdrop:"static"});
     

          var yid = $('#yid').val();
          var admn=$('#admn').val();
          var name = $('#name').val();
          var branch=$('#branch').val();
         
        
          var day=$('#day').val();
          var month=$('#month').val();
          var year=$('#year').val();
          var phone=$('#phone').val();
          var email = $('#email').val();
          var vil=$('#vil').val();
          var city=$('#city').val();
          var dis=$('#dis').val();
          var state=$('#state').val();

          
         
        
         var dob=day+"/"+month+"/"+year; 
       
      
     var errorcode=""
   

  if(yid!="" && admn!="" && name!="" && branch!="" && day!="" &&  month!="" &&  year!="" && phone!="" && email!="" && vil!="" && city!="" && dis!="" && state!=""){

    
 
  /*creating user*/
   

     if(m=="" || m=="null" || m==null){
     
     }

   else{
      uids=m.uid;

   console.log(m.uid);


  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      user.updateProfile({
  displayName: name,
  photoURL: dataURL
});

  }
});


  firebase.database().ref(uids).set({uid:uids,yid:yid,admission_no:admn,branch:branch,gender:gender2,day:day,month:month,year:year,dod:dob,name:name,phone:phone,village:vil,city:city,district:dis,state:state,email:email,photos:dataURL});

   setTimeout(function(){

    
     document.getElementById('saving').style.visibility='hidden';
  alert("Successfully saved.... ");
  $('#saving').modal('hide');
       
       

   },15000);
     
       }
     /* creating user completed */
}

else{
   $("#fill_details").modal({backdrop: true});
  }



});  

