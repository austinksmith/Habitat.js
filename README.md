# Habitat.js

**Author**: Austin K. Smith

**Website**: [Github](https://github.com/austinksmith/Habitat.js)

**Description**: 100% Vanilla Javascript Automatic Environment Detection Library

**License**: Artistic License 2.0

# About

A collection of useful cross platform environmental detection methods, originally written for use with [Hamsters.js](http://www.hamsters.io) now moved into it's own package for reusability. 


# Install

  * Add Habitat.js to your project using the instructions below

  ### HTML

  * Download a copy of the library and add it to your webserver public directory
  * Add script tag to your html page

  ```html
	<!-- HTML4 and (x)HTML -->
	<script type="text/javascript" src="path/to/habitat.web.min.js">

	<!-- HTML5 -->
	<script src="path/to/habitat.web.min.js"></script>
  ```

  ### Node

  * Use npm install to add the project to your dependencies `npm install --save habitat`
  * Require the npm module in your app.js file

  ```js
 	var habitat = require('habitat.js');
  ```

  * Once you've installed Habitat.js you should now be able to run the following methods.

  ### isIE - Determine if execution environment is Internet Explorer by version, returns true or false

  ```js
    var version = 10;
  	habitat.isIE(version);
  ``` 

  ### logicalThreads - Determine number of logical threads available, returns an integer

  ```js
  	habitat.logicalThreads();
  ``` 

  ### blob - Detects execution environments blob builder, returns a constructor

  ```js
  	var blobMaker = habitat.blob();
  	new blobMaker(...);
  ``` 

  ### browser - Determine if execution environment is a web browser, returns true or false

  ```js
  	habitat.browser();
  ``` 

  ### webWorker - Determine if execution environment is a webWorker, returns true or false

  ```js
  	habitat.webWorker();
  ``` 

  ### node - Determine if execution environment is Node.js, returns true or false

  ```js
  	habitat.node();
  ``` 

  ### reactNative - Determine if execution environment is reactNative, returns true or false

  ```js
  	habitat.reactNative();
  ``` 

  ### shell - Determine if execution environment is a shell, returns true or false

  ```js
  	habitat.shell();
  ``` 

  ### transferrable - Determine if execution environment supports transferrable objects (typed arrays), returns true or false

  ```js
  	habitat.transferrable();
  ``` 

  ### atomics - Determine if execution environment supports atomic operations (shared array buffers), returns true or false

  ```js
  	habitat.atomics();
  ``` 

  ### proxies - Determine if execution environment supports proxy objects, returns true or false

  ```js
  	habitat.proxies();
  ``` 

  ### sharedWorkers - Determine if execution environment supports sharedWorkers, returns true or false

  ```js
  	habitat.sharedWorkers();
  ```




