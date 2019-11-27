
  // Initialize Firebase


  var config_chat = {
    apiKey: "AIzaSyABFlEIJ2d_yp9wSRakIoYUBYCj_t9E2uo",
    authDomain: "charichat.firebaseapp.com",
    databaseURL: "https://charichat.firebaseio.com",
    storageBucket: "firebase-charichat.appspot.com",
  };

var chatApp = firebase.initializeApp(config_chat, "Tertiary");

var chat_dataURL="";var chat_image_file="";
var chat_file="";
 var file="",chat_downloadURL="",image_downloadURL="",file_downloadURL="" ;

    $(document).ready(function() {
        $("#chat-image-input").on("change", function(event) {
         
            $('#uploading').modal({backdrop:"static"});
                  $('#title').text("Uploading");
                   chat_image_file = document.getElementById('chat-image-input').files[0];
            message_upload();
         
          });
        });
$(document).ready(function() {
   $("#chat-file-input").on("change", function(event) {
         
             $('#uploading').modal({backdrop:"static"});
             $('#title').text("Uploading");
              chat_file = document.getElementById('chat-file-input').files[0];
 console.log(chat_file.size);
            message_upload();
          
       
        });


      });

var text="",profile_photo="",file="";

  
    $(document).ready(function(){
    	scrollBottom();
  chatApp.database().ref().limitToLast(15).on('child_added', function(snapshot) {
        var messages=snapshot.val();
         scrollBottom();
        displayChatMessage(messages.name, messages.text,messages.date,messages.profile_photo,messages.image,messages.file);
        $('#panel-body')[0].scrollTop = $('#panel-body')[0].scrollHeight;
        scrollBottom();
      });

});
  
$('#btn-chat').click(function(){
console.log("chari");
       var times= new Date();
               var image_downloadURL="";
                var file_downloadURL="";
             var times_3=times.toString();
     
          var text = $('#message').val();

chatApp.database().ref().push({name: name, text: text,profile_photo:photo,date:times_3,image:image_downloadURL,file:file_downloadURL});
 $('#message').val('');
   scrollBottom();
           $('#panel-body')[0].scrollTop = $('#panel-body')[0].scrollHeight;


});




  function message_upload(){

        var storage = chatApp.storage();
          var storageRef = storage.ref();
        var imagesRef = storageRef.child('images');
          var filesRef=storageRef.child('files');

      



    
   if((chat_image_file=="" || chat_image_file==null) && (chat_file==""|| chat_file==null)){
     var uploadTask = imagesRef.child(chat_image_file.name).put(chat_image_file);
     }
    else {
      var uploadTask = filesRef.child(chat_file.name).put(chat_file);
     }

 uploadTask.on('state_changed', function(snapshot){
    console.log(snapshot);
}, function(error) {
  console.log(error);

}, function() {
  chat_downloadURL = uploadTask.snapshot.downloadURL;
  console.log(downloadURL);
    if(chat_downloadURL==""){
       	setTimeout(function(){
       upload_files();
       	},5000);
       }
     else{ upload_files();
}
});
 
    

     
  
   } 
  
    





function upload_files(){

 if(chat_downloadURL!=""){

    console.log(chat_downloadURL);
           if(chat_image_file!=""){
           	image_downloadURL=(chat_downloadURL).toString();
           }
            else if(chat_file!=""){
            	file_downloadURL=(chat_downloadURL).toString();
            }

          
           
              
            var time=(new Date()).toString();
         chatApp.database().ref().push({name: name, text: text,profile_photo:photo,date:time,image:image_downloadURL,file:file_downloadURL});

         $('#chat-image-input').val("");
         $('#chat-file-input').val("");
          $('#title').text("Successfully Uploaded");
        $('#uploading').modal('hide');
         chat_dataURL="";
         f_dataURL="";
   }
      else{
        alert("upload failed");
      }


   

}



  function displayChatMessage(name,text,dates,photo,image,file) {
          var name1 = sessionStorage.getItem('name');
         
           if(name1==name){

            if(text!=""){
            $('#ul_chat').append('<li class="timeline-inverted"><div class="timeline-badge"><img src="'+photo+'" download="chari.jpg" style="width:52px;height:52px; border-radius:20px;" ></div><div class="timeline-panel"><div class="timeline-heading"><h4 class="timeline-title">'+name+'</h4><p><small class="text-muted"><i class="fa fa-time"></i>'+dates+'</small></p></div><div class="timeline-body"><p>'+text+'</p></div></div></li>');

                 }
             
             else if(image!=""){
              $('#ul_chat').append('<li class="timeline-inverted"><div class="timeline-badge"><img src="'+photo+'" style="width:52px;height:52px; border-radius:20px;"  ></div><div class="timeline-panel"><div class="timeline-heading"><h4 class="timeline-title">'+name+'</h4><p><small class="text-muted"><i class="fa fa-time"></i>'+dates+'</small></p></div><div class="timeline-body"><img src="'+image+'" style="max-width:100px;max-height:100px;" ><br><a href="'+image+'" download="TelugISM.jpg" width="200px" height="200px" >Download image</a></div></div></li>');


             }
           else if(file!=""){
         console.log("naga");
              $('#ul_chat').append('<li class="timeline-inverted"><div class="timeline-badge"><img src="'+photo+'" style="width:52px;height:52px; border-radius:20px;"></div><div class="timeline-panel"><div class="timeline-heading"><h4 class="timeline-title">'+name+'</h4><p><small class="text-muted"><i class="fa fa-time"></i>'+dates+'</small></p></div><div class="timeline-body"><div align="center"><a href="'+file+'" target="_blank"  style="display:block; background:url(images/pdf.jpg)  no-repeat center center; height:150px;max-width:400px; max-height:250px; margin-bottom:18px"></a><br><a href="'+file+'" download="TelugISMchat.pdf">Download File</a></div></div></div></li>');

           }
            

             
            }
          else{

          
          if(image!=""){
              $('#ul_chat').append('<li><div class="timeline-badge"><img src="'+photo+'"style="width:52px;height:52px; border-radius:20px;"  ></div><div class="timeline-panel"><div class="timeline-heading"><h4 class="timeline-title">'+name+'</h4><p><small class="text-muted"><i class="fa fa-time"></i>'+dates+'</small></p></div><div class="timeline-body"><img src="'+image+'" download="chari.jpg" style="max-width:100px;max-height:100px;" ><a href="'+image+'"download="TelugISM.jpg" width="200px" height="200px" >download image</a></div></div></li>');


             }

             

             else if(text!=""){
            $('#ul_chat').append('<li><div class="timeline-badge"><img src="'+photo+'"style="width:52px;height:52px; border-radius:20px;"  ></div><div class="timeline-panel"><div class="timeline-heading"><h4 class="timeline-title">'+name+'</h4><p><small class="text-muted"><i class="fa fa-time"></i>'+dates+'</small></p></div><div class="timeline-body"><p>'+text+'</p></div></div></li>');

                 }

             else if(file!=""){

              $('#ul_chat').append('<li><div class="timeline-badge"><img src="'+photo+'" style="width:52px;height:52px; border-radius:20px;"></div><div class="timeline-panel"><div class="timeline-heading"><h4 class="timeline-title">'+name+'</h4><p><small class="text-muted"><i class="fa fa-time"></i>'+dates+'</small></p></div><div class="timeline-body"><div align="center"><a href="'+file+'" target="_blank"  style="display:block; background:url(images/pdf.jpg)  no-repeat center center; height:150px;max-width:400px; max-height:250px; margin-bottom:18px"></a><BR><a href="'+file+'" download="TelugISMchat.pdf">Download File</a></div></div></div></li>');    
          }
   scrollBottom();

      }

           scrollBottom();

  $('#loading').modal('hide');



      }

