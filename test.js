
function arenderjs_init(arenderjs_)
{
     // Loads the PDF reference document
     if(typeof arenderjs_ === 'object') { 
      console.log("arenderjs_ --> ",arenderjs_);   
      console.log("getARenderJS() --> ",getARenderJS()); 
      console.log(arenderjs_.getZoomJSAPI());
      arenderjs_.askZoomFullWidth();
     } 
     
     getARenderJS().loadDocument("http://www.africau.edu/images/default/sample.pdf",
     function(id)
          {
             console.log(id);
             getARenderJS().openDocument(id);
          });  
     console.log("done");
}	


