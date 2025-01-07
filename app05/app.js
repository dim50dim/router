const http = require('http');
const fs = require('fs');
const PORT = 3500;

http.createServer((req,res)=> {
    const url = req.url;

    switch(url){
      case'/' :
        console.log('main page');
        res.write('<h1>Main page</h1>');
        break;
      case'/contact' :
        console.log('contact page');
        let data = fs.readFileSync('./public/contact.html',{encoding:'utf8',flag:'r'});
        res.write(data);
        break;
      default:
        if(url.includes('/images')){
            console.log('images =>>>>>>>>>');
         fs.readFile('./public' + url,{}, function (error,data){
          if(error) {

           }
           console.log('=======get=======');
           res.setHeader('Content-Type','image/png' )
           res.write(data);
           res.end();
         });
     
            
        }else{
            console.log('404');
            res.write('<h1>404</h2>');
           
        }

    }
    res.end();
}).listen(PORT);