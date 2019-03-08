
function arenderjs_init(arenderjs_)
{
     // Loads the PDF reference document
     if(typeof arenderjs_ === 'object') { 
      console.log("arenderjs_ --> ",arenderjs_);   
      console.log("getARenderJS() --> ",getARenderJS());   
     } 
     getARenderJS().loadDocument("http://www.africau.edu/images/default/sample.pdf",
     function(id)
          {
             console.log(id);
             getARenderJS().openDocument(id);
          });  
}	

function armt_onCurrentDocumentChangeEvent(arenderjs_, id, title, metadata)
{
    var target="ARender samples111";
    arenderjs_.getPageForNamedDestination(id,target, function(pageNumber) 
    { 
        if (pageNumber==-1) 
        {
           // window.alert("Could not find target named \""+ target + "\" are you sure this document contains it?");
        } 
        else
        {
            // desired position for the jump
            var pos = arenderjs_.newPageRelativePosition(200,300,0,0);
            // and now we jump! 
            arenderjs_.askChangePage("Index", pageNumber, pos);
        }
    });
}

