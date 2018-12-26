/* jshint esversion: 6, curly: true, eqeqeq: true, forin: true */

/***********************************************************************************
* Title: Habitat.js                                                                *
* Description: 100% Vanilla Javascript Automatic Environment Detection Library     *
* Author: Austin K. Smith                                                          *
* Contact: austin@asmithdev.com                                                    *  
* Copyright: 2015 Austin K. Smith - austin@asmithdev.com                           * 
* License: Artistic License 2.0                                                    *
***********************************************************************************/

import habitat from '../src/habitat';

describe("Habitat", () => {

  it("logicalThreads should be a function", () => {
    expect(typeof habitat['logicalThreads']).toBe("function");
  });

  it("logicalThreads should return a number", () => {
    expect(typeof habitat.logicalThreads()).toBe("number");
  });

  it("sharedWorkers should be a function", () => {
    expect(typeof habitat['sharedWorkers']).toBe('function');
  });

  it("sharedWorkers should return a boolean value", () => {
    expect(habitat.sharedWorkers()).toMatch(/true|false/);
  });

  it("Node should be a function", () => {
    expect(typeof habitat['node']).toBe('function');
  });

  it("Node should return a boolean value", () => {
    expect(habitat.node()).toMatch(/true|false/);
  });
  
  it("Browser should be a function", () => {
    expect(typeof habitat['browser']).toBe('function');
  });

  it("Browser should return a boolean value", () => {
    expect(habitat.browser()).toMatch(/true|false/);
  });

  it("isIE should be a function", () => {
    expect(typeof habitat['isIE']).toBe('function');
  });

  for (var i = 1; i < 12; i++) {
    it('isIE(' + i + ') should return a boolean value', () => {
      expect(typeof habitat.isIE(i)).toBe('boolean');
      expect(habitat.isIE(i)).toMatch(/true|false/);
    });
  }

  it("Atomics should be a function", () => {
    expect(typeof habitat['atomics']).toBe('function');
  });

  it("Atomics should be return a boolean value", () => {
    expect(habitat.atomics()).toMatch(/true|false/);
  });

  it("WebWorker should be a function", () => {
    expect(typeof habitat['webWorker']).toBe('function');
  });

  it("WebWorker should return a boolean value", () => {
    expect(habitat.webWorker()).toMatch(/true|false/);
  });

  it("Shell should be a function", () => {
    expect(typeof habitat['shell']).toBe('function');
  });

  it("Shell should return a boolean value", () => {
    expect(habitat.shell()).toMatch(/true|false/);
  });
  
  it("Transferrable should be a function", () => {
    expect(typeof habitat['transferrable']).toBe('function');
  });

  it("Transferrable should return a boolean value", () => {
    expect(habitat.transferrable()).toMatch(/true|false/);
  });

  it("Proxies should be a function", () => {
    expect(typeof habitat['proxies']).toBe('function');
  });

  it("Proxies should return a boolean value", () => {
    expect(habitat.proxies()).toMatch(/true|false/);
  });

  it("reactNative should be a function", () => {
    expect(typeof habitat['reactNative']).toBe('function');
  });

  it("reactNative should return a boolean value", () => {
    expect(habitat.reactNative()).toMatch(/true|false/);
  });

});