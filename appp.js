const http=require('http');

let server=http.createServer((req,res)=>{
    switch(req.url){
        case '/': res.end(`<p>Welcome to home page.</p><br> <a href="/about">About us</a><br><a href='/contact_us'>Contact us!!!</a>`); break
        case '/about': res.end(`<p>We are very famous.</p><br><a href="/">Home</a>`); break
        case '/contact_us': res.end(`<a href="mailto: hablama@gaga.com">hablama@gaga.com</a><br><a href='/'>Home</a>`); break
    }
})
let port=7000;
console.log(`Server is running on port ${port}`);
server.listen(port);
