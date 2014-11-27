# easy-stdin

Want to read the whole of stdin easily?

```javascript
var stdin = require("easy-stdin")

stdin(function(err, data) {
  if(err) {
    console.error("Oh noes!")
  } else {
    console.log("stdin: " + data);
  }
});
```

That is all.
