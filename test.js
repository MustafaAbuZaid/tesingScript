
function arenderjs_init(arenderjs_)
{
     console.log(arenderjs_);
     arenderjs_.registerAnnotationsSavedEvent(function(obj){armt_onSubmitAlterDocumentContentEvent(arenderjs_,obj);});

}	
function armt_onSubmitAlterDocumentContentEvent(arenderjs_,obj)
{ 
  
    console.log("Notify : " + obj);
    console.log("Notify : " + arenderjs_);
} 



