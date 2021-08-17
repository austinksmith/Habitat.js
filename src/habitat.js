/* jshint esversion: 6, curly: true, eqeqeq: true, forin: true */

/***********************************************************************************
* Title: Habitat.js                                                                *
* Description: 100% Vanilla Javascript Automatic Environment Detection Library     *
* Author: Austin K. Smith                                                          *
* Contact: austin@asmithdev.com                                                    *  
* Copyright: 2015 Austin K. Smith - austin@asmithdev.com                           * 
* License: Artistic License 2.0                                                    *
***********************************************************************************/

'use strict';

class habitatDetector {

  /**
  * @constructor
  * @function constructor - Sets properties for this class
  */
  constructor() {
    this.browser = this.isBrowser;
    this.webWorker = this.isWebWorker;
    this.node = this.isNode;
    this.reactNative = this.isReactNative;
    this.shell = this.isShell;
    this.transferrable = this.supportsTransferrableObjects;
    this.atomics = this.supportsAtomicOperations;
    this.proxies = this.supportsProxies;
    this.isIE = this.isInternetExplorer;
    this.logicalThreads = this.determineGlobalThreads;
    this.blob = this.blobBuilder;
    this.sharedWorkers = this.supportsSharedWorkers;
  }

  /**
  * @function determineGlobalThreads - Determines number of logical threads (Firefox enforces per origin max of 20)
  */
  determineGlobalThreads() {
    let max = 4;
    if(typeof navigator !== 'undefined') {
      if(typeof navigator.hardwareConcurrency !== 'undefined') {
        max = navigator.hardwareConcurrency;
      }
      if(max > 20 && navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {
        max = 20;
      }
    }
    if(this.node && typeof os !== 'undefined') {
      max = os.cpus().length;
    }
    return max;
  }

  /**
  * @function isFireox - Detect firefox browser
  */
  isFirefox() {
    return (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1);
  }

  /**
  * @function locateWorkerObject - Attempts to find a global Worker object
  */
  locateWorkerObject() {
    return (typeof Worker !== 'undefined' ? Worker : false);
  }

  /**
  * @function locateSharedWorkerObject - Attempts to find a global SharedWorker object
  */
  locateSharedWorkerObject() {
    return (typeof SharedWorker !== 'undefined' ? SharedWorker : false);
  }

  /**
  * @function isBrowser - Detects if execution environment is a browser
  */
  isBrowser() {
    return (typeof window === "object");
  }

  /**
  * @function isInternetExplorer - Detects if execution environment is internet explorer
  */
  isInternetExplorer() {
    return (navigator.userAgent.indexOf("MSIE ") !== -1 || navigator.userAgent.indexOf("Trident/") !== -1);
  }

  /**
  * @function isNode - Detects if execution environment is node.js
  */
  isNode() {
    return (typeof process === "object" && typeof require === "function" && !this.isWebWorker() && !this.browser);
  }

  /**
  * @function isWebWorker - Detects if execution environment is a webworker
  */
  isWebWorker() {
    return (typeof importScripts === "function" && !this.isReactNative());
  }

  /**
  * @function isReactNative - Detects if execution environment is reactNative
  */
  isReactNative() {
    return (typeof navigator !== "undefined" && typeof navigator.product !== "undefined" && navigator.product == "ReactNative");
  }

  /**
  * @function isShell - Detects if execution environment is a shell
  */
  isShell() {
    return ((typeof navigator === "undefined") && !this.isNode() && !this.isWebWorker() && !this.isReactNative());
  }

  /**
  * @function supportsTransferrableObjects - Detects if execution environment supports typed arrays
  */
  supportsTransferrableObjects() {
    return typeof Uint8Array !== 'undefined';
  }

  /**
  * @function supportsAtomicOperations - Detects if execution environment supports shared array buffers
  */
  supportsAtomicOperations() {
    return typeof SharedArrayBuffer !== 'undefined';
  }

  /**
  * @function supportsProxies - Detects if execution environment supports proxy objects
  */
  supportsProxies() {
    return typeof Proxy !== 'undefined';
  }

    /**
  * @function blobBuilder - Attempts to locate data blob builder, vender prefixes galore
  */
  blobBuilder() {
    if(typeof Blob !== 'undefined') {
      return Blob;
    }
    if(typeof BlobBuilder !== 'undefined') {
      return BlobBuilder;
    }
    if(typeof WebKitBlobBuilder !== 'undefined') {
      return WebKitBlobBuilder;
    }
    if(typeof MozBlobBuilder !== 'undefined') {
      return MozBlobBuilder;
    }
    if(typeof MSBlobBuilder !== 'undefined') {
      return MSBlobBuilder;
    }
  }

  supportsSharedWorkers() {
    let supports = false;
    if(typeof SharedWorker !== 'undefined') {
      try {
        let blob = this.blobBuilder();
        let sharedWorkerBlob = new blob('shared workers are cool');
        let sharedWorkerTest = new SharedWorker(sharedWorkerBlob, 'SharedWorker');
        sharedWorkerTest.terminate();
        supports = true;
      } catch (e) {
        supports = false;
      }
    }
    return supports;
  }

}

var habitat = new habitatDetector();

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = habitat;
}
