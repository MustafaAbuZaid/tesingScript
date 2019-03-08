
function arenderjs_init(arenderjs_)
{
     // Loads the PDF reference document
     if(typeof arenderjs_ === 'object') { 
      console.log("getARenderJS() --> ",getARenderJS()); 
     } 
     
     getARenderJS().loadDocument("http://192.168.0.175:3014/api/wopi/files/f9bca874-881b-4a0d-b24c-32ed71a0af0b/contents/?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhYmRhbGxhaC53YXNmeUBjb250ZWxsZWN0LmNvbSIsImdyb3VwcyI6WyIxNDZmNTQwNC0xYTJlLTQwZDEtYjBhMS0yOGVjOTkxNzQ0NGYiLCI4NDgwMTQ3Zi02NjZmLTQyYjctYmE0Mi1jYjhkNWIyZGVhOTAiXSwicmVmcmVzaFRva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5U1dRaU9pSmhZbVJoYkd4aGFDNTNZWE5tZVVCamIyNTBaV3hzWldOMExtTnZiU0lzSW1keWIzVndjeUk2V3lJeE5EWm1OVFF3TkMweFlUSmxMVFF3WkRFdFlqQmhNUzB5T0dWak9Ua3hOelEwTkdZaUxDSTRORGd3TVRRM1ppMDJOalptTFRReVlqY3RZbUUwTWkxallqaGtOV0l5WkdWaE9UQWlYU3dpYVdGMElqb3hOVFV5TURZME16RTVMQ0psZUhBaU9qRTFOVEl4TlRBM01UbDkuSDNwSDJXdW85dWNHSFhlR3EzcU5ZbVdUcVdoci1oOUhwbDRUNTRFNWZoMCIsImlhdCI6MTU1MjA2NDMxOSwiZXhwIjoxNTUyMTUwNzE5fQ.TNCqWawU2F9QRhhI6qFTxHakQdB1Q3XlBugR058Te84&orgId=7b1bf316-7539-43a7-ae16-cd0fa9fbbc91",
     function(id)
          {
             console.log(id);
             getARenderJS().openDocument(id);
          });  
     console.log("done");
}	


