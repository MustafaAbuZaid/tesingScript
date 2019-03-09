
function arenderjs_init(arenderjs_)
{
     getARenderJS().registerAllAsyncModulesStartedEvent(function() {
          getARenderJS().openDocument("b64_dXJsPWh0dHA6Ly93d3cuYWZyaWNhdS5lZHUvaW1hZ2VzL2RlZmF1bHQvc2FtcGxlLnBkZg");
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
     });


}	



