const fs = require('fs');

const reqHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/')
    {
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome</h1>');
        res.write('<a href="/users">Users List</a>');
        res.write('<h4>Add a new user</h4>');
        res.write(
            '<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Add</button></form>'
                );
        res.write('</body></html>');
        return res.end();
    }

    if(url==='/create-user' && method == 'POST')
    {
        const reqData = [];
        req.on('data',(chunk)=>
        {
            reqData.push(chunk);
        }
        );
        return req.on('end',()=>
        {
            const parsedData = Buffer.concat(reqData).toString().split('=')[1];
            const parsedUsers = parsedData.split('+').join('\n').toString();
            console.log(parsedUsers);
            fs.writeFile('message.txt', parsedUsers, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
              });
        });
    }

    if(url === '/users') 
    {
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><li>User1</li></body>');
        res.write('<body><li>User2</li></body>');
        res.write('<body><li>User3</li></body>');
        res.write('</html>');
        return res.end();
    }
};

module.exports = reqHandler;