
function arenderjs_init(arenderjs_)
{
      arenderjs_.loadDocument("http://192.168.0.175/9773665b-2106-4687-b97d-f74025fa625a.pdf",function(id)
{
     arenderjs_.getAnnotationJSAPI().add("b64_dXJsPWh0dHA6Ly8xOTIuMTY4LjAuMTc1LzI1N2EwZDg2LTAxZDgtNDQ3OS04ZDgwLTVhM2JkMTRmZjc5NS5wZGY",
                                            "9773665b-2106-4687-b97d-f74025fa625a.pdf.xfdf");
    arenderjs_.openDocument(id);
})

     console.log(arenderjs_);
     arenderjs_.registerAnnotationsSavedEvent(function(obj){armt_onSubmitAlterDocumentContentEvent(arenderjs_,obj);});

}	
function armt_onSubmitAlterDocumentContentEvent(arenderjs_,obj)
{  
     console.log("Notify : " + obj);
     console.log(arenderjs_);
     console.log(arenderjs_.g.c);
     arenderjs_.loadDocument(arenderjs_.g.c);
      
     //arenderjs_.getDownloadDocumentJSAPI().askDownloadWithAnnotations(); 
     arenderjs_.getDownloadDocumentJSAPI().askDownloadAnnotations(); 
} 



