
function arenderjs_init(arenderjs_)
{ 
//       arenderjs_.loadDocument("http://192.168.0.175/577b050f-53b3-4f89-854e-a15508852220.png",function(id)
// {
//     arenderjs_.openDocument(id);
// })

     console.log(arenderjs_);
     arenderjs_.registerAnnotationsSavedEvent(function(obj){armt_onSubmitAlterDocumentContentEvent(arenderjs_,obj);});
topPanel.documentMenu.upload = false;
}	
function armt_onSubmitAlterDocumentContentEvent(arenderjs_,obj)
{  
     console.log("Notify : " + obj);
     console.log(arenderjs_);
     console.log(arenderjs_.g.c);
     arenderjs_.loadDocument(arenderjs_.g.c);
      
     arenderjs_.getDownloadDocumentJSAPI().askDownloadWithAnnotations(); 
     //arenderjs_.getDownloadDocumentJSAPI().askDownloadAnnotations(); 
} 



