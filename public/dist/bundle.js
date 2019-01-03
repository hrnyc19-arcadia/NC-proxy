/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/src/app.js":
/*!***************************!*\
  !*** ./public/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval(";\n\n(function () {\n  var listingId;\n\n  try {\n    listingId = parseInt(window.location.href.split('?')[1]);\n  } catch (unacceptedURLException) {\n    console.log('unacceptedURLException: param not accepted: ', parseInt(window.location.href.split('?')[1]));\n    listingId = 0;\n  }\n\n  console.log('listing requested: ', listingId);\n  fetch(\"/listing?listing_id=\".concat(listingId), {\n    method: 'GET',\n    mode: 'no-cors',\n    headers: {\n      'content-type': 'application/json'\n    }\n  }).then(function (response) {\n    return response.json();\n  }).then(function (obj) {\n    var rootHTMLElement = document.getElementById('lisitingRoot');\n    rootHTMLElement.textContent = String(obj);\n  }).catch(function (unhandledException) {\n    return console.log('Rendering Error: ', unhandledException);\n  });\n  var APIList = ['https://nc-service.herokuapp.com/'];\n  APIList.forEach(function (URL) {\n    fetch(\"\".concat(URL, \"?\").concat(listingId), {\n      method: 'GET',\n      mode: 'no-cors',\n      headers: {\n        'content-type': 'text/xml'\n      }\n    }).then(function (response) {\n      return response.text();\n    }).then(function (XML) {\n      console.log('API\\'s data :', XML);\n      var rootHTMLElement = document.getElementById('componentPlaceholder');\n      var newElem = document.createElement(\"div\");\n      newelem.innerHTML = XML;\n      rootHTMLElement.append(newElem);\n    }).catch(function (unhandledException) {\n      return console.log('Rendering Error: ', unhandledException);\n    });\n  });\n\n  var getUserPhoto = function getUserPhoto(reviewId, callback) {\n    return fetch(\"/user/photo?reviewId=\".concat(reviewId || 87), {\n      method: 'GET',\n      mode: 'no-cors' // headers:{'Content-Type': 'image/png'}           \n\n    }).then(function (file) {\n      return file.arrayBuffer();\n    }).then(function (buffer) {\n      var arrayBufferView = new Uint8Array(buffer);\n      var blob = new Blob([arrayBufferView], {\n        type: \"image/png\"\n      });\n      var urlCreator = window.URL || window.webkitURL;\n      var imageUrl = urlCreator.createObjectURL(blob);\n      callback(imageUrl);\n    }).catch(function (unhandledException) {\n      return console.log('error fetching photo:\\n', unhandledException);\n    });\n  };\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3JjL2FwcC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9zcmMvYXBwLmpzPzlmOWEiXSwic291cmNlc0NvbnRlbnQiOlsiOygoKT0+e1xyXG5cclxuICAgIGxldCBsaXN0aW5nSWQ7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxpc3RpbmdJZCA9IHBhcnNlSW50KHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMV0pO1xyXG4gICAgfSBjYXRjaCAodW5hY2NlcHRlZFVSTEV4Y2VwdGlvbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1bmFjY2VwdGVkVVJMRXhjZXB0aW9uOiBwYXJhbSBub3QgYWNjZXB0ZWQ6ICcsIHBhcnNlSW50KHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMV0pKTtcclxuICAgICAgICBsaXN0aW5nSWQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdsaXN0aW5nIHJlcXVlc3RlZDogJywgbGlzdGluZ0lkKTtcclxuICAgIFxyXG5cclxuICAgIGZldGNoKGAvbGlzdGluZz9saXN0aW5nX2lkPSR7bGlzdGluZ0lkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIG1vZGU6ICduby1jb3JzJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ob2JqID0+IHtcclxuICAgICAgICAgICAgbGV0IHJvb3RIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXNpdGluZ1Jvb3QnKTtcclxuICAgICAgICAgICAgcm9vdEhUTUxFbGVtZW50LnRleHRDb250ZW50ID0gU3RyaW5nKG9iaik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2godW5oYW5kbGVkRXhjZXB0aW9uID0+IGNvbnNvbGUubG9nKCdSZW5kZXJpbmcgRXJyb3I6ICcsIHVuaGFuZGxlZEV4Y2VwdGlvbikpO1xyXG5cclxuICAgIGxldCBBUElMaXN0ID0gWydodHRwczovL25jLXNlcnZpY2UuaGVyb2t1YXBwLmNvbS8nXTtcclxuXHJcbiAgICBBUElMaXN0LmZvckVhY2goVVJMID0+IHtcclxuICAgICAgICBmZXRjaChgJHtVUkx9PyR7bGlzdGluZ0lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgbW9kZTogJ25vLWNvcnMnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAndGV4dC94bWwnIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcbiAgICAgICAgICAgIC50aGVuKFhNTCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQVBJXFwncyBkYXRhIDonLFhNTCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm9vdEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBvbmVudFBsYWNlaG9sZGVyJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBuZXdlbGVtLmlubmVySFRNTCA9IFhNTDtcclxuICAgICAgICAgICAgICAgIHJvb3RIVE1MRWxlbWVudC5hcHBlbmQobmV3RWxlbSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh1bmhhbmRsZWRFeGNlcHRpb24gPT4gY29uc29sZS5sb2coJ1JlbmRlcmluZyBFcnJvcjogJywgdW5oYW5kbGVkRXhjZXB0aW9uKSk7XHJcblxyXG4gICAgfSlcclxuXHJcbiAgIGNvbnN0IGdldFVzZXJQaG90bz0ocmV2aWV3SWQsIGNhbGxiYWNrKT0+e1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgL3VzZXIvcGhvdG8/cmV2aWV3SWQ9JHtyZXZpZXdJZCB8fCA4N31gXHJcbiAgICAgICAgICAgICwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIG1vZGU6ICduby1jb3JzJyxcclxuICAgICAgICAgICAgICAgIC8vIGhlYWRlcnM6eydDb250ZW50LVR5cGUnOiAnaW1hZ2UvcG5nJ30gICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihmaWxlID0+IGZpbGUuYXJyYXlCdWZmZXIoKSlcclxuICAgICAgICAgICAgLnRoZW4oYnVmZmVyID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBhcnJheUJ1ZmZlclZpZXcgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbYXJyYXlCdWZmZXJWaWV3XSwgeyB0eXBlOiBcImltYWdlL3BuZ1wiIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVybENyZWF0b3IgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2VVcmwgPSB1cmxDcmVhdG9yLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGltYWdlVXJsKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godW5oYW5kbGVkRXhjZXB0aW9uID0+IGNvbnNvbGUubG9nKCdlcnJvciBmZXRjaGluZyBwaG90bzpcXG4nLCB1bmhhbmRsZWRFeGNlcHRpb24pKTtcclxuICAgIH1cclxuXHJcbn0pKCkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/src/app.js\n");

/***/ })

/******/ });