app.get('/example',
    function(request,response){
        response.send('I am example');
        console.log('I am example');
    }
);

app.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);