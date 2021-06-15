const app = require('./src/app.js');

const port = 5000;

app.listen(port, () => { console.log(`Server has started on port ${port}`); }); // eslint-disable-line no-console
