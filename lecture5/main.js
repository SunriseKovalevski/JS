function debounce(f, ms) {

  let timer = null;

  return function (...args) {
    const onComplete = () => {
      f.apply(this, args);
      timer = null;
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(onComplete, ms);
  };
}

function f(x) { alert(x) }
let f = debounce(f, 1000);

//---------------------------------------
function delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }

//------------------------------------------------
function httpGet(url) {

    return new Promise(function(resolve, reject) {
  
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
  
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
  
      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };
  
      xhr.send();
    });
  
  }

//------------------------------------------------
function request(url) {
    return new Promise((res) => {
        const delayTime = Math.floor(Math.random() * 10000) + 1;
        setTimeout(() => res(url), delayTime);
    });
}
function resolveUrlsArray(urls) {
    var promisesArray = urls.map(function (url) {
        return request(url);
    });
    var resultArray = [];
    return new Promise(function (resolve, reject) {
        for (var i = 0; i < promisesArray.length; i++) {
            promisesArray[i]
                .then(function (res) {
                    resultArray.push(res);
                    if (resultArray.length === promisesArray.length) resolve(resultArray);
                })
                .catch(function (error) {
                    reject(error);
                });
        }
    })
}