
function arenderjs_init(arenderjs_)
{
    // we register on current document change
    arenderjs_.registerCurrentDocumentChangeEvent(function(id, title, metadata) 
    {
        armt_onCurrentDocumentChangeEvent(arenderjs_,id, title, metadata);
              console.log(_id);
    });
          getARenderJS().loadDocument("http://arender.arondor.com/pdf/pdf/PDFReference15_v5.pdf",
          function(id)
          {
            getARenderJS().openDocument(id);
          });
     // Loads the PDF reference document
     if(typeof arenderjs_ === 'object') { 
      console.log("getARenderJS() --> ",getARenderJS());  
     }  
     console.log("done");
}	


