      // Initialize Firebase
       var config = {
       apiKey: "AIzaSyDj79dtKLWlzbBqSavtEnF1Ft2z4Hjpd9M",
       authDomain: "telugismregister.firebaseapp.com",
       databaseURL: "https://telugismregister.firebaseio.com",
       storageBucket: "telugismregister.appspot.com",
      };
      firebase.initializeApp(config);
       var uid="";
       var name="";
       var photo="";
     firebase.auth().onAuthStateChanged(function(user) {
       if (user) {
    console.log(user);
     uid=user.uid;
      name=user.displayName;
      sessionStorage.setItem('name',name);
      $('#user_name').text("Welcome "+name);
      $('#side_user_name').text(name);
      photo=user.photoURL;
      $("#user_image").attr("src",photo);

    // User is signed in.
  } else {
    location.href="index3.html";
    console.log("user2");
    // No user is signed in.
  }
});
     setTimeout(function(){
      console.log(uid);
     },4000);




             function scrollBottom(){

$('#panel-body').scrollTop($('#panel-body')[0].scrollHeight);
}
  

 $('#notification_li').click(function() {
 class_li();
    $("#notification_li").attr("class","non_selected_btn");
    hide();
    $('#notification_page').show();
    
});

 $('#notiifcation_symbol').click(function() {
 class_li();
    $("#notification_li").attr("class","non_selected_btn");
       hide();
    $('#notification_page').show();
    
});

     $('#chat_li').click(function() {
    class_li();
    $('#chat_li').attr("class","non_selected_btn");
   hide();
    $('#chat_page').show();
    scrollBottom();
     $('#panel-body')[0].scrollTop = $('#panel-body')[0].scrollHeight;
     $('#chat-image-input').val("");
         $('#chat-file-input').val("");
    chat_image_file="";
    chat_file="";

});

         $('#chat_symbol').click(function() {
    class_li();
    $('#chat_li').attr("class","non_selected_btn");
    hide();
    $('#chat_page').show();
        scrollBottom();
   $('#panel-body')[0].scrollTop = $('#panel-body')[0].scrollHeight;

});


       $('#search_li').click(function() {
       class_li();
    $('#search_li').attr("class","non_selected_btn");
     hide();
    $('#search_page').show();
     

});

       $('#search_symbol').click(function() {
       class_li();
    $('#search_li').attr("class","non_selected_btn");
    hide();
    $('#search_page').show();
  

});

   $('#profile_li').click(function() {
       class_li();
        $('#profile_li').attr("class","non_selected_btn");
       hide();
    $('#profile_page').show();
    
});

    $('#profile_symbol').click(function() {
       class_li();
        $('#profile_li').attr("class","non_selected_btn");
        hide();
});

      $('#clubs_li').click(function() {
   class_li();
    $("#clubs_li").attr("class","non_selected_btn");
    hide();
    $('#clubs_page').show();
   

});
       $('#search_li').click(function() {
       class_li();
        $('#search_li').attr("class","non_selected_btn");
        hide();
        $('#search_page').show();
});

  
      $('#fests_li').click(function() {
   class_li();
    $("#fests_li").attr("class","non_selected_btn");
    hide();
     $('#fests_page').show();
});

     $('#activities_li').click(function() {
   class_li();
    $("#activities_li").attr("class","non_selected_btn");
    hide();
    $('#activities_page').show();

});

        $('#startups_li').click(function() {
   class_li();
    $("#startups_li").attr("class","non_selected_btn");
    hide();
    $('#startups_page').show();
});

      $('#qp_li').click(function() {
   class_li();
    $("#qp_li").attr("class","non_selected_btn");

      hide();
     $('#qp_page').show();
    

});

       $('#ism_route_map_li').click(function() {
   class_li();
    $("#ism_route_map_li").attr("class","non_selected_btn");

      hide();
     $('#ism_route_map_page').show();
    

});


  $('#logout').click(function() {
firebase.auth().signOut().then(function() {
  // Sign-out successful.
 window.location.replace("index3.html");

}, function(error) {
  alert(error);
  // An error happened.
});



});


     $('#logout_li').click(function() {
       firebase.auth().signOut().then(function() {
        var key="firebase:authUser:AIzaSyDj79dtKLWlzbBqSavtEnF1Ft2z4Hjpd9M:[DEFAULT]";
 localStorage.removeItem(key);
 window.location.replace("index3.html");

}, function(error) {
  alert(error);
});

});

      $('#logout_li_1').click(function() {
               firebase.auth().signOut().then(function() {
 window.location.replace("index3.html");

}, function(error) {
  alert(error);
});

});


function hide(){
 $('#placements_page').hide();
   $('#notification_page').hide();
    $('#chat_page').hide();
     $('#profile_page').hide();
      $('#clubs_page').hide();
    $('#search_page').hide();
    $('#qp_page').hide();
    $('#fests_page').hide();
    $('#startups_page').hide();
    $('#activities_page').hide();
    $('#ism_route_map_page').hide();
    
}


   function class_li() 
{
        $('#profile_li').attr("class","");
    $('#chat_li').attr("class","");
    $("#notification_li").attr("class","");
    $('#search_li').attr("class","");
     $('#qp_li').attr("class","");
    $('#clubs_li').attr("class","");
    $('#fests_li').attr("class","");
    $('#activities_li').attr("class","");
    $('#startups_li').attr("class","");
    $('#_li').attr("class","");
    $('#chat_li').attr("class","");
   $('#placements_2007_li').attr("class","");
    $('#placements_2008_li').attr("class","");
     $('#placements_2009_li').attr("class","");
     $('#placements_20010_li').attr("class","");
    $('#placements_2011_li').attr("class","");
     $('#placements_2012_li').attr("class","");
     $('#placements_2013_li').attr("class","");
    $('#placements_2014_li').attr("class","");
     $('#placements_2015_li').attr("class","");
     $('#ism_route_map_li').attr("class","");
}


  $('#logout').click(function() {
firebase.auth().signOut().then(function() {
  // Sign-out successful.
  location.href="index3.html";

}, function(error) {
  alert(error);
  // An error happened.
});
});

  $('#placements_2007_li').click(function() {
 class_li();
    $("#placements_2007_li").attr("class","non_selected_btn");
     $('#placement_embed').attr("src","http://ismdhanbad.ac.in/student/placement/data/2007.pdf");
    
       hide();
         setTimeout(function(){
        $('#placements_page').show();
      },5000);
      
});

   $('#placements_2008_li').click(function() {
 class_li();
    $("#placements_2008_li").attr("class","non_selected_btn");
    $('#placement_embed').attr("src","http://ismdhanbad.ac.in/student/placement/data/2008.pdf");
       hide();
       setTimeout(function(){
        $('#placements_page').show();
      },5000);
       
    
});

 $('#placements_2009_li').click(function() {
 class_li();
    $("#placements_2009_li").attr("class","non_selected_btn");
    $('#placement_embed').attr("src","http://ismdhanbad.ac.in/student/placement/data/2009.pdf");
       hide();
       setTimeout(function(){
        $('#placements_page').show();
      },5000);
       
    
});

  $('#placements_2010_li').click(function() {
 class_li();
 $('#placement_embed').attr("src","http://ismdhanbad.ac.in/student/placement/data/2010.pdf");
    $("#placements_2010_li").attr("class","non_selected_btn");
       hide();
       setTimeout(function(){
         $('#placements_page').show();
       },5000);
      
       
    
});

   $('#placements_2011_li').click(function() {
     $('#placement_embed').attr("src","http://ismdhanbad.ac.in/student/placement/data/2011.pdf");
 class_li();
    $("#placements_2011_li").attr("class","non_selected_btn");
       hide();
        setTimeout(function(){
        $('#placements_page').show();
      },5000);
      
    
});

    $('#placements_2012_li').click(function() {
 class_li();
    $("#placements_2012_li").attr("class","non_selected_btn");
     $('#placement_embed').attr("src","http://ismdhanbad.ac.in/student/placement/data/2012.pdf");
       hide();
         setTimeout(function(){
        $('#placements_page').show();
      },5000);
      
    
});


     $('#placements_2013_li').click(function() {
       $('#placement_embed').attr("src","http://ismdhanbad.ac.in/student/placement/data/2013.pdf");
 class_li();
    $("#placements_2013_li").attr("class","non_selected_btn");
       hide();
        setTimeout(function(){
        $('#placements_page').show();
      },5000);
    
});

      $('#placements_2014_li').click(function() {
        $('#placement_embed').attr("src","http://ismdhanbad.ac.in/student/placement/data/2014.pdf");
 class_li();
    $("#placements_2014_li").attr("class","non_selected_btn");
       hide();
  setTimeout(function(){
        $('#placements_page').show();
      },5000);
       
    
});
       $('#placements_2015_li').click(function() {
 class_li();
    $("#placements_2015_li").attr("class","non_selected_btn");
      
       $('#placement_embed').attr("src","http://ismdhanbad.ac.in/student/placement/data/2015.pdf");
     hide();
         setTimeout(function(){
        $('#placements_page').show();
      },5000);
});

    $(document).ready(function(){
            firebase.database().ref().orderByKey().equalTo(uid).on('child_added',function(snapshot){
    console.log("nagac");
    
  var details_json=snapshot.val();
   console.log(details_json.name);
  $('#name').val(details_json.name);
   $('#yid').val(details_json.yid);
  $('#admn').val(details_json.admission_no);
  $('#branch').val(details_json.branch);
  $('#gender').val(details_json.gender);
  $('#day').val(details_json.day);
  $('#month').val(details_json.month);
  $('#year').val(details_json.year);
  $('#phone').val(details_json.phone);
  $('#email').val(details_json.email);
  $('#vil').val(details_json.village);
  $('#city').val(details_json.city);
  $('#dis').val(details_json.district);
  
  $('#state').val(details_json.state);
  $('#profile_picture').attr("src",details_json.photos);
  gender2=details_json.gender;
  dataURL=details_json.photos;

 $('#profile_loading').hide();
  $('#profile').show();
      });

          });