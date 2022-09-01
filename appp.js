const http=require('http');

let server=http.createServer((req,res)=>{
    async function guess() {
        let n = await ((Math.floor(Math.random() * (26))));
        return n;
    }
    
    switch(req.url){
        case '/': guess().then((value)=>{res.end(`<p>Welcome to home page.</p><br> <a href="/about">About us</a><br><a href='/contact_us'>Contact us!!!</a><br><p>Your lucky number is:${value}</p>`)}); break
        case '/about': res.end(`<p>We are very famous.</p><br><a href="/">Home</a>`); break
        case '/contact_us': res.end(`<a href="mailto: hablama@gaga.com">hablama@gaga.com</a><br><a href='/'>Home</a>`); break
    }
})
let port=7000;
console.log(`Server is running on port ${port}`);
server.listen(port);
