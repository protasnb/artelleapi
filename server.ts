import express from 'express';
const app = express();

app.get('/', (req, res, next) => {res.send('Arc/Artel Architecture API')})
const port = process.env.PORT || 8090
app.listen(port, () => { console.log('Server started on port', port)} )
