
var arenderjs;

function arenderjs_init(arenderjs_)
{
     arenderjs_.documentBuilder.registerSubmitAlterDocumentContentEvent(function(obj){armt_onSubmitAlterDocumentContentEvent(arenderjs_,obj);});
    arenderjs_.documentBuilder.registerNotifyAlterDocumentContentEvent(function(obj){armt_onNotifyAlterDocumentContentEvent(arenderjs_,obj);});

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
function armt_onSubmitAlterDocumentContentEvent(arenderjs_,obj)
{
    var desc = arenderjs_.documentBuilder.getSubmittedAlterDocumentContentDescription(obj);
    var meta = arenderjs_.documentBuilder.getDocumentMetadata(desc, 0);
    arenderjs_.documentBuilder.addDocumentMetadata(meta, "name", "value"); 
  
    alert("Notify : " + desc);
    alert("Notify : " + meta);
}

function armt_onNotifyAlterDocumentContentEvent(arenderjs_,obj)
{
    alert("Notify : " + obj);
    var docId = arenderjs_.documentBuilder.getResultDocumentId(obj);
    alert("Notify : " + docId);
    console.log("Notify : docId = " + docId);
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



