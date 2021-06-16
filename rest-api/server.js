const app = require('./src/app.js');
const port = process.env.PORT || 5000;

app.listen(port, () => { 
    console.log(`Server has started on port ${port}`); 
}); 
