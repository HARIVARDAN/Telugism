function year(){
     var year=$('#year').val();
    document.getElementById('semester_div').style.visibility='visible';
    document.getElementById('sub_semester_div').style.visibility='hidden';
    document.getElementById('subject_div').style.visibility='hidden';
   }

   function semester(){
     var semester=$('#semester').val();
    document.getElementById('sub_semester_div').style.visibility='visible';
    document.getElementById('subject_div').style.visibility='hidden';
   }
  function sub_semester(){
     var sub_semester=$('#sub_semester').val();
    document.getElementById('subject_div').style.visibility='visible';
   
   }