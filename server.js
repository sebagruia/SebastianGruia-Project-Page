const express = require('express');


const app = express();
// app.use(cors());
// app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.json('it is working');
    response.sendFile(path.join(__dirname + "/index.html"));


});

const PORT = 3300;
app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}`);
});