
function arenderjs_init(arenderjs_)
{
    arenderjs_.loadDocument("http:192.168.0.175/sample.pdf");
    window.alert("arenderjs_") 
    window.alert(JSON.stringifiy(arenderjs_)); 
    // we register on current document change
    arenderjs_.registerCurrentDocumentChangeEvent(function(id, title, metadata) 
    {
        armt_onCurrentDocumentChangeEvent(arenderjs_,id, title, metadata);
    });
}	

function armt_onCurrentDocumentChangeEvent(arenderjs_, id, title, metadata)
{
    var target="ARender samples111";
    arenderjs_.getPageForNamedDestination(id,target, function(pageNumber) 
    {

        window.alert(arenderjs_) 
        if (pageNumber==-1) 
        {
            window.alert("Could not find target named \""+ target + "\" are you sure this document contains it?");
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

