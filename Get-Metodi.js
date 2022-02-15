const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/Get',
    function(request,response){
        response.send('Tama on GET metodi');
        console.log('Good');
    }
);
app.get('/Get/:Din',
    function(request,response){
        response.send('Tama on Get metodi yhdella parametrilla  ');
    }
);
app.get('/Get/:Din/:Magaramov',
    function(request, response){
       response.send('Tama on Get metodi kahdella parametrilla');
    }
);

