const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send('hello');
  process.exit(1);
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});

const obj = {
  hello: function() {
    console.log('hello');
  }
};

obj.hello();

class A {
  foo() {
    console.log('Hello World');
    /* Expect error is 'this' is not called */
  }
}

const car = new A();

car.foo();
