 var myDataRef = new Firebase("https://panchayat.firebaseio.com/");

    
   

 myDataRef.orderByKey().limitToLast(8).on('child_added', function(snapshot) {
        var messages=snapshot.val();
         
        displayChatMessage(messages.name, messages.text,messages.date,messages.profile_photo,messages.image,messages.audio);
    
      

   
});
  
  
var load_messages_number=1;
  
          function displayChatMessage(name,text,dates,photo,image,audio) {
          var name1 = sessionStorage.getItem('name');
         
           if(name1==name){

            if(text!=""){
            $('#ul_chat').append('<li class="timeline-inverted"><div class="timeline-badge"><img src="'+photo+'" download="chari.jpg" style="width:51px;height:51px; border-radius:20px;" ></div><div class="timeline-panel"><div class="timeline-heading"><h4 class="timeline-title">'+name+'</h4><p><small class="text-muted"><i class="fa fa-time"></i>'+dates+'</small></p></div><div class="timeline-body"><p>'+text+'</p></div></div></li>');

                 }
             
             else if(image!=""){
              $('#ul_chat').append('<li class="timeline-inverted"><div class="timeline-badge"><img src="'+photo+'" style="width:51px;height:51px; border-radius:20px;"  ></div><div class="timeline-panel"><div class="timeline-heading"><h4 class="timeline-title">'+name+'</h4><p><small class="text-muted"><i class="fa fa-time"></i>'+dates+'</small></p></div><div class="timeline-body"><img src="'+image+'" style="max-width:100px;max-height:100px;" ><br><a href="'+image+'"download="TelugISM.jpg" width="200px" height="200px" >Download image</a></div></div></li>');


             }

            
             
            }
          else{

          
          if(image!=""){
              $('#ul_chat').append('<li><div class="timeline-badge"><img src="'+photo+'"style="width:51px;height:51px; border-radius:20px;"  ></div><div class="timeline-panel"><div class="timeline-heading"><h4 class="timeline-title">'+name+'</h4><p><small class="text-muted"><i class="fa fa-time"></i>'+dates+'</small></p></div><div class="timeline-body"><img src="'+image+'" download="chari.jpg" style="max-width:100px;max-height:100px;" ><a href="'+image+'"download="TelugISM.jpg" width="200px" height="200px" >download image</a></div></div></li>');


             }

             

             else if(text!=""){
            $('#ul_chat').append('<li><div class="timeline-badge"><img src="'+photo+'"style="width:51px;height:51px; border-radius:20px;"  ></div><div class="timeline-panel"><div class="timeline-heading"><h4 class="timeline-title">'+name+'</h4><p><small class="text-muted"><i class="fa fa-time"></i>'+dates+'</small></p></div><div class="timeline-body"><p>'+text+'</p></div></div></li>');

                 }
          }

           scrollBottom();
load_messages_number++;
  if(load_messages_number==8){
  $('#loading').modal('hide');
}


      }



var name = sessionStorage.getItem('name');
              
var profile_photo = sessionStorage.getItem('profile_photo');


$('#btn-chat').click(function(){
             
               var times= new Date();
               var image="";
                var audio="";
             var times_3=times.toString();
     
          var text = $('#message').val();
          myDataRef.push({name: name, text: text,profile_photo:profile_photo,date:times_3,image:image,audio:audio});
          $('#message').val('');
           $('#panel-body')[0].scrollTop = $('#panel-body')[0].scrollHeight;

         

      });
        
                
 
          
          

      function scrollBottom(){

$('#panel-body').scrollTop($('#panel-body')[0].scrollHeight);
}
         $(document).ready(function() {
        $("#image-input").on("change", function(event) {
          var input = event.target;
           reader = new FileReader();
          reader.onload = function(){
            dataURL = reader.result;

             
               var times_2= (new Date()).toString();
               console.log(times_2);
               var image=dataURL;
               var video="";
               var audio=""
            
          var text = $('#message').val();
          myDataRef.push({name: name, text: text,profile_photo:profile_photo,date:times_2,image:image,audio:audio,video:video});
                  
           
          };
          reader.readAsDataURL(input.files[0]);
        });


      });



