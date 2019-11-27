



setTimeout(function(){

	search();
},3000);


function search(){

firebase.database().ref().orderByChild('yid').equalTo('2015').on('child_added',function(snapshot){
  
  
  console.log(snapshot.val());
});

}