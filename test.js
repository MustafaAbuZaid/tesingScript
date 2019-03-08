
function arenderjs_init(arenderjs_)
{
     getARenderJS().registerNotifyLoadingErrorEvent(function(documentId,message) {console.log("error: "+message)});
 // Loads the PDF reference document
 // If an error occurs I am notified on the function defined before!
 getARenderJS().loadDocument("http://www.africau.edu/images/default/sample.pdf",
 function(id)
     {
      getARenderJS().openDocument(id);
     });
     // Loads the PDF reference document
     if(typeof arenderjs_ === 'object') { 
      console.log("getARenderJS() --> ",getARenderJS()); 
      console.log("arenderjs_.getDownloadDocumentJSAPI().askDownloadAllDocuments()");
      console.log(arenderjs_.getDownloadDocumentJSAPI().askDownloadAllDocuments());
     }  
     console.log("done");
}	


