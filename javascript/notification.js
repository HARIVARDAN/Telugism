  var config2 = {
    apiKey: "AIzaSyC-8zD5Y2EoruGusTl9ndAFRVasFjq4f9Y",
    authDomain: "telugismchat.firebaseapp.com",
    databaseURL: "https://telugismchat.firebaseio.com",
    storageBucket: "telugismchat.appspot.com",
  };




var dataURL="";
 var file="",downloadURL="",image_downloadURL="",file_downloadURL="" ;

       $(document).ready(function(){
        $("#image-input").on("change", function(event) {
          var input = event.target;
           reader = new FileReader();
          reader.onload = function(){
            dataURL = reader.result;
                  console.log(dataURL);
            $("#image_post").attr("src", dataURL);
             image_file = document.getElementById('image-input').files[0];
          };
          reader.readAsDataURL(input.files[0]);
        });
   
   });

       $(document).ready(function(){
        $("#file-input").on("change", function(event) {

           file = document.getElementById('file-input').files[0];
         $('#file_name').text(file.name);
   });
      });


 
  $("#post_btn").click(function(){

     $("#post_info").modal({backdrop: true});
   
    $('#heading').val("");
    $('#more_info_txt').val("");
    image_file="";
    file=""; $
  });


  

  // Intialize a "Secondary" App
  var notificationApp = firebase.initializeApp(config2, "Secondary");
  

  notificationApp.database().ref().limitToLast(15).on('child_added', function(snapshot) {
        var Posts = snapshot.val();
         

       displayPosts(Posts.title, Posts.time,Posts.more_info,Posts.image_downloadURL,Posts.file_downloadURL,Posts.name);
      });
  var image_file="";
  var file="";
 var storage = notificationApp.storage();
          var storageRef = storage.ref();

          var imagesRef = storageRef.child('images');
          var filesRef=storageRef.child('files');



  $("#post").click(function(){

     $('#post_info').modal('hide');
  $("#uploading").modal({backdrop: static});
  $('#title').text("Uploading.......");
          var title = $('#heading').val();
          var more_info=$('#more_info_txt').val();

          console.log(title);
          console.log(more_info);
         

         


console.log(file);

  


if((image_file=="" || image_file==null) && (file==""|| file==null) && dataURL==""){
  posting_notification();
}
else if((image_file!="") && (image_file!=null) && file==""){
var uploadTask = imagesRef.child(image_file.name).put(image_file);
}
else if(file!=""){
  var uploadTask = filesRef.child(file.name).put(file);

}

uploadTask.on('state_changed', function(snapshot){
  // Observe state change events such as progress, pause, and resume
  // See below for more detail
  
  
  console.log(snapshot);
}, function(error) {
  console.log(error);
  // Handle unsuccessful uploads
}, function() {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
   downloadURL = uploadTask.snapshot.downloadURL;
  console.log(downloadURL);
  if(downloadURL==""){
  setTimeout(function(){
        posting_notification();
  
      },1000);
}
else{
  posting_notification();
 
}
});


});
 


        function posting_notification(){

      var title = $('#heading').val();
          var more_info=$('#more_info_txt').val();
          console.log(more_info);
      if(image_file!=""){
          
            console.log(downloadURL);
              image_downloadURL=(downloadURL).toString();
   }
      else if(file!=""){
        file_downloadURL=(downloadURL).toString();
      }
              var time=(new Date()).toString();
            
         notificationApp.database().ref().push({title:title,more_info:more_info,image_downloadURL:image_downloadURL,file_downloadURL:file_downloadURL,name:name,time:time});
 




   $('#title').text("Successfully Uploaded");
    $('#uploading').modal('hide');
  file="";
  image_file="";
    $('#image-input').val("");
    $('#file-input').val("");
    $('#heading').val("");
    $('#more_info_txt').val("");
    


}




     function displayPosts(title,time,more_info,image,file,name) {
        
 
           if(image!=""){

            $('#posts_start').prepend('<div class="thumbnail"><h3><a href="#">'+title+'</a></h3>'+'<div align="center"><a href="'+image+'" target="_blank"  style="display:block; background:url('+image+') no-repeat center center; height:250px;max-width:600px; max-height:250px; margin-bottom:18px; "><br><a href="'+image+'" download="Notifications.jpg">Download Image</a><span style="font-size:25px;"><br>'+more_info+'</span></div><br><p class="meta">Added by <b><i><a href="#">'+name+' </a></i></b> on '+time+'</div><br/>');

                 }

             else if(file!=""){

               $('#posts_start').prepend('<div class="thumbnail"><h3><a href="#">'+title+'</a></h3>'+'<div align="center"><a href="'+file+'" target="_blank" style="display:block; background:url(images/pdf.jpg)  no-repeat center center; height:250px;max-width:500px; max-height:250px; margin-bottom:18px"></a><br><a href="'+file+'" download="Notifications.pdf">Download File</a><span style="font-size:25px;"><br>'+more_info+'</span></div><br><p class="meta">Added by <b><i><a href="#">'+name+' </a></i></b> on '+time+'</div><br/>');

             }    

             else{
               $('#posts_start').prepend('<div class="thumbnail"><h3><a href="#">'+title+'</a></h3>'+'<br><span style="font-size:25px;"><br>'+more_info+'</span><br><BR><br><p class="meta">Added by <b><i><a href="#">'+name+' </a></i></b> on '+time+'</div><br/>');
             }
             
            
}



