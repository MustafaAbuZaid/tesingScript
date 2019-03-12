
var arenderjs;

function arenderjs_init(arenderjs_)
{
             arenderjs_.onAnnotationModuleReady(function(annotjs)
            {
                arenderjs=annotjs;
                annotjs.registerFollowLinkHandler(followLink); 
            }); 
//      getARenderJS().registerAllAsyncModulesStartedEvent(function() {
         // getARenderJS().openDocument("b64_dXJsPWh0dHA6Ly93d3cuYWZyaWNhdS5lZHUvaW1hZ2VzL2RlZmF1bHQvc2FtcGxlLnBkZg");
//        arenderjs_.loadDocument("http://192.168.0.175/QWE.PNG",
//      function(id)
//      {
//           arenderjs_.openDocument(id);
//      }); 
          //console.log("id: ",arenderjs_.g.c.c);
     // Loads the PDF reference document
//      if(typeof arenderjs_ === 'object') { 
//       console.log("getARenderJS() --> ",arenderjs_);  
//      }   
//      });
 
}	
function followLink(docId, pageNumber, destination, action)
{
  console.log(docId);
  console.log(destination);
  var doc = getARenderJS().openDocument(docId);
  getARenderJS().getAnnotationJSAPI();
  getARenderJS().loadDocument(doc);
  getARenderJS().getDownloadDocumentJSAPI().askDownloadAllDocuments();
}



