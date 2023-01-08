const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const ngrok = require('ngrok');
const port = process.env.PORT || 3000;

//middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');

//connecting the ngrok 
server.listen(port, () => console.log(`Server running on port ${port}`));
(async function(){
    const url = await ngrok.connect({
        proto:'http',
        addr:port,
        authtoken:'2K31YlIKGmdMuvjkoFnKxscuFbj_2ye29yULpfzHSogpDE1np'
    });
    console.log(url);
})();