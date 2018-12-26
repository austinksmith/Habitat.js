# Habitat.js

**Author**: Austin K. Smith

**Website**: [Github](https://github.com/austinksmith/Habitat.js)

**Description**: 100% Vanilla Javascript Automatic Environment Detection Library

**License**: Artistic License 2.0

# About

A collection of useful cross platform environmental detection methods, originally written for use with [Hamsters.js](http://www.hamsters.io) now moved into it's own package for reusability. 


# Install

  * Add Habitat.js to your project using the instructions below

  ## HTML

  * Download a copy of the library and add it to your webserver public directory
  * Add script tag to your html page

  ```html
	<!-- HTML4 and (x)HTML -->
	<script type="text/javascript" src="path/to/habitat.web.min.js">

	<!-- HTML5 -->
	<script src="path/to/habitat.web.min.js"></script>
  ```

  ## Node

  * Use npm install to add the project to your dependencies `npm install --save habitat`
  * Require the npm module in your app.js file

  ```js
 	var habitat = require('habitat.js');
  ```

  ## Once you've installed Habitat.js you should now be able to run the following methods.

  * isIE - Determine if execution environment is Internet Explorer by version.

  ```js
  var version = 10;
  habitat.isIE(version); // true or false
  ``` 

  * logicalThreads - Determine number of logical threads available.

  ```js
  habitat.logicalThreads(); // integer
  ``` 

  * blob - Detects execution environments blob builder.

  ```js
  var blobMaker = habitat.blob(); // constructor
  new blobMaker(...);
  ``` 

  * browser - Determine if execution environment is a web browser.

  ```js
  habitat.browser(); // true or false
  ``` 

  * webWorker - Determine if execution environment is a webWorker.

  ```js
  habitat.webWorker(); // true or false
  ``` 

  * node - Determine if execution environment is Node.js.

  ```js
  habitat.node(); // true or false
  ``` 

  * reactNative - Determine if execution environment is reactNative.

  ```js
  habitat.reactNative(); // true or false
  ``` 

  * shell - Determine if execution environment is a shell.

  ```js
  habitat.shell(); // true or false
  ``` 

  * transferrable - Determine if execution environment supports transferrable objects (typed arrays).

  ```js
  habitat.transferrable(); // true or false
  ``` 

  * atomics - Determine if execution environment supports atomic operations (shared array buffers).

  ```js
  habitat.atomics(); // true or false
  ``` 

  * proxies - Determine if execution environment supports proxy objects.

  ```js
  habitat.proxies(); // true or false
  ``` 

  * sharedWorkers - Determine if execution environment supports sharedWorkers

  ```js
  habitat.sharedWorkers(); // true or false
  ```




