
function arenderjs_init(arenderjs_)
{
  console.log(getARenderJS().loadDocument("http://arender.arondor.com/pdf/pdf/PDFReference15_v5.pdf"),function(id){console.log(id)});
//                                  ,
//      function(id)
//      {
//           getARenderJS().openDocument(id);
//      });
     // Loads the PDF reference document
     if(typeof arenderjs_ === 'object') { 
      console.log("getARenderJS() --> ",getARenderJS());  
     }  
     console.log("done");
}	


