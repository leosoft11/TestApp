// console.log('hey guys');

// console.error('hry');

// if (console.everything === undefined){
//     console.defaultLog = console.log.bind(console);
//     console.defaultError = console.error.bind(console);

//     const names = () => {
//         console.everything = [];

//         console.log = function(){
//             console.everything.push({"type":"log", "datetime":Date().toLocaleString(), "value":Array.from(arguments)});
//             console.defaultLog.apply(console, arguments);
//         }
//     console.error = function(){
//         console.everything.push({"type":"error", "datetime":Date().toLocaleString(), "value":Array.from(arguments)});
//         console.defaultError.apply(console, arguments);
//     }
    
//     }
//     names();
    
//     setInterval(() => {
//         console.log(console.everything);
//     },1000)
// }


// // v3
// setTimeout(() => {
//     (function(){
//         console.defaultError = console.error.bind(console);
//         console.errors = [];
//         console.error = function(){
//             // default &  console.error()
//             console.defaultError.apply(console, arguments);
//             // new & array data
//             console.errors.push(Array.from(arguments));
//         }
//         console.error;
//         console.log(console.errors);
//     })();
// },3000);

// setInterval(() => {
//     console.log(console.errors);
//     console.error('name');

//   },3000);
//   console.error('name');

// window.onerror =function(msg,url,line, column,err) {
//     const arr = [];
//     arr.push(msg,url,line,err,column);
  
//     return false;
// }

// function invoke  (obj, method, args) {
//     return obj[method].apply(this.args);
// }

// function invoke  (obj, method, args) {
//      try {
//         return obj[method].apply(this.args);
//      } catch (e) {
//          captureError(e);
//          throw e;
//      }
// }
// invoke(Math,'hightest', [1,2]);



//  setInterval(() => {
//     window.onerror = function(msg,url,line, column,err) {
//         const arr = {
//             "name": msg,
//             "url": url,
//             "line": line,
//             "column": column,
//             "err": err
//         };
//         return console.log(arr);
//         }
//  },3000)


//  setInterval(() => {
//     window.addEventListener("error", function (e) {
//         console.log(e.error.message, "from", e.error.stack);
//     });     
//  },100)



//     window.onerror = function(msg,url,line, column,err) {
// const arr = {
//     "name": msg,
//     "url": url,
//     "line": line,
//     "column": column,
//     "err": err
// };

// return console.log(arr);
// }