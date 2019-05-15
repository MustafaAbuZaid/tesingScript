
function arenderjs_init(arenderjs_)
{ 
      console.log("arenderjs_");
      console.log(arenderjs_);
      arenderjs_.loadDocument("http://www.africau.edu/images/default/sample.pdf",function(id)
{
    console.log("id");
    console.log(id);
    arenderjs_.openDocument(id);
})

//      console.log(arenderjs_);
//      arenderjs_.registerAnnotationsSavedEvent(function(obj){armt_onSubmitAlterDocumentContentEvent(arenderjs_,obj);});
// topPanel.documentMenu.upload = false;
}	
// function armt_onSubmitAlterDocumentContentEvent(arenderjs_,obj)
// {  
//      console.log("Notify : " + obj);
//      console.log(arenderjs_);
//      console.log(arenderjs_.g.c);
//      arenderjs_.loadDocument(arenderjs_.g.c);
      
//      arenderjs_.getDownloadDocumentJSAPI().askDownloadWithAnnotations(); 
     //arenderjs_.getDownloadDocumentJSAPI().askDownloadAnnotations(); 
// } 



