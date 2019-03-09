
function arenderjs_init(arenderjs_)
{
     getARenderJS().registerAllAsyncModulesStartedEvent(function() {console.log("modules are loaded")});

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



