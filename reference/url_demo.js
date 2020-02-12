const url = require('url');

const myUrl = new URL("https://www.google.com:8080/hello.html?id=625020&status=active");

console.log(myUrl.href)
console.log(myUrl.host)
console.log(myUrl.hostname)
console.log(myUrl.pathname)
console.log(myUrl.search)
console.log(myUrl.searchParams)

myUrl.searchParams.append('test', 'true')
console.log(myUrl.searchParams)