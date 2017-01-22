dx-doi-lookup
=============

Module that resolves Digital Object Identifiers (DOI) to a URL. Can also fetch date and time published.
Written using the doi.org REST API. Asynchronous.



Usage
-----

Including the project
```javascript
var doi = require('dx-doi-lookup');
```

Resolving the URL

```javascript
doi.urlLookup ('10.1000/1', function (response) {
    console.log(response)
})
```

Resolving the date published

```javascript
doi.dateLookup('10.1000/1', function (response) {
    console.log(response)
})
```

Resolving the time published
```javascript
doi.timeLookup('10.1000/1', function (response) {
    console.log(response)
})
```

Replace 10.1000/1 with your own DOI.
