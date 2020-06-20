import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Setup Template!!!' });
});

app.listen(3333, err => {
  if (err) {
    console.log('Internal server error!');
  } else {
    console.log('🚀 Server is running...');
  }
});
