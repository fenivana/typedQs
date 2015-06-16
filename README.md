# typedQs
URL query string with support of boolean, number and null.

in browser:
```js
var query = typedQs.encode({
  category: 'book',
  showUsedItem: false,
  limit: 20,
  keyword: null
}};

// /list?category=book&showUsedItem=!false&limit=!20&keyword=!null
$.get('/list', query).then(function(result) {
  console.log(result);
});

```

node.js:
```js
var url = require('url');
var typedQs = require('typed-qs');
var urlInfo = url.parse(req.url, true);
var query = typedQs.decode(urlInfo.query);
query.category === 'book';
query.showUsedItem === false;
query.limit === 20;
query.keyword === null;
```
