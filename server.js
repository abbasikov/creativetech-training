const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('build'));
app.use('/static/js',express.static(path.join(__dirname, 'static/js')));
app.use('/static/css',express.static(path.join(__dirname, 'static/css')));
app.use('/static/media',express.static(path.join(__dirname, 'static/media')));

app.use(express.static(__dirname + '/'));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(port, '127.0.0.1', function onStart(err) {

  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://127.0.0.1:%s/ in your browser.', port, port);
});
