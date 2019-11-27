var ref = new Firebase('https://dcoffice.firebaseio.com/');
var states,arr=[];
var ap_dis_arr=[];
var bihar_dis_arr=[];
var pond1_arr=[];
var optionsAsString = "";
var array=[],p;


var districts=[],i=0;



function url_concat(a,b){
 
 return a+"/"+b;
}


console.log(url_concat("abc","def"));


/*ref.orderByKey().on("child_added", function(snapshot) {
  console.log(snapshot.key());
 while(snapshot.val()!=""){
    districts[i]=snapshot.val();
    i++;

 }
  
});


console.log(districts);*/

ref.child("Bermo").on("value",function(snap){
  console.log(snap.val());
  p=snap.val();


 
for (elem in p) {
   array.push(p[elem]);
}

console.log(array.length);
console.log(array[0]);


});
ref.child("sub_division").on("value", function(state) {
  console.log(state.val());
states = state.val();
 
for (elem in states) {
   arr.push(states[elem]);
}



for(var i = 0; i < arr.length; i++) {
    optionsAsString += "<option value='" + arr[i] + "'>" + arr[i] + "</option>";
}
$( 'select[name="statess"]' ).find('option').remove().end().append( optionsAsString );

optionsAsString = "";

});


function myFunction() {

 
    var x = document.getElementById("states").value;

    document.getElementById('districts').style.visibility='visible';
    document.getElementById("gram_panchayat").style.visibility="hidden";
    document.getElementById("village").style.visibility="hidden";
  document.getElementById("image").style.visibility="hidden";
  document.getElementById("image1").style.visibility="hidden";
 document.getElementById("loading_gif").style.visibility="hidden";

 ap_dis_arr=[];

    optionsAsString = "";
    ref.child(x).on("value", function(ap) {
  
   apdis = ap.val();
 
   for (elem in apdis) {
   ap_dis_arr.push(apdis[elem]);
   }


   for(var i = 0; i < ap_dis_arr.length; i++) {
    optionsAsString += "<option value='" + ap_dis_arr[i] + "'>" + ap_dis_arr[i] + "</option>";
        }
    $( 'select[name="district"]' ).find('option').remove().end().append( optionsAsString );
    optionsAsString = "";
        });
    ap_dis_arr=[];
  } 





function gram_panchayat(){

  

    var y = document.getElementById("district").value;

 console.log(y);
  document.getElementById('gram_panchayat').style.visibility='visible';
  document.getElementById("village").style.visibility="hidden";
  document.getElementById("image").style.visibility="hidden";
  document.getElementById("image1").style.visibility="hidden";
  document.getElementById("loading_gif").style.visibility="hidden";

  ap_dis_arr=[];

    ref.child(y).on("value", function(ap) {
  
   apdis = ap.val();
 
   for (elem in apdis) {
   ap_dis_arr.push(apdis[elem]);
   }


   for(var i = 0; i < ap_dis_arr.length; i++) {
    optionsAsString += "<option value='" + ap_dis_arr[i] + "'>" + ap_dis_arr[i] + "</option>";
        }
    $( 'select[name="gram_panchayats"]' ).find('option').remove().end().append( optionsAsString );
    optionsAsString = "";
        });
    ap_dis_arr=[];
  } 



  

function village(){

  

    var z = document.getElementById("gram_panchayats").value;

 
  document.getElementById('village').style.visibility='visible';
  document.getElementById("image").style.visibility="hidden";
  document.getElementById("image1").style.visibility="hidden";
  document.getElementById("loading_gif").style.visibility="hidden";

  ap_dis_arr=[];

    ref.child(z).on("value", function(ap) {
  
   apdis = ap.val();
 
   for (elem in apdis) {
   ap_dis_arr.push(apdis[elem]);
   }


   for(var i = 0; i < ap_dis_arr.length; i++) {
    optionsAsString += "<option value='" + ap_dis_arr[i] + "'>" + ap_dis_arr[i] + "</option>";
        }
    $( 'select[name="villages"]' ).find('option').remove().end().append( optionsAsString );
    optionsAsString = "";
        });
    ap_dis_arr=[];
  } 











































function pond(){

var x = document.getElementById("district").value;



 document.getElementById("loading_gif").style.visibility="visible";

if(x=="Kadapa"){

   ref.child("pond1").on("value", function(pond1) {
  
  pond1det = pond1.val();

    for (elem in pond1det) {
   pond1_arr.push(pond1det[elem]);

   }
   document.getElementById("table").style.visibility="visible";
 document.getElementById("loading_gif").style.visibility="hidden";
   document.getElementById("image").style.visibility="visible";
    document.getElementById('image1').style.visibility='visible';
$('#latitude').text(pond1_arr[0]);
$('#longitude').text(pond1_arr[1]);
 $("#image").parent().find("img").attr("src", pond1_arr[2]);

});

}

}