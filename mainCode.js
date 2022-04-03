var miniAPI = {};
window.miniAPIVersion = "1.10.15";
console.log("MiniAPI was loaded!");
miniAPI.help = function () {
  console.info(`miniAPI version ${window.miniAPIVersion} made by MiniScripter`);
  console.info(
    "The commands can be found in 'commands' variable inside of miniAPI(miniAPI.commands)"
  );
};
miniAPI.commands = {};
(function () {
  let commands = miniAPI.commands;
  commands.base64Encrypt = function (data) {
    return btoa(data);
  };
  commands.base64Decrypt = function (data) {
    return atob(data);
  };
  commands.loadScript = function (url) {
    let scriptElement = document.createElement("script");
    scriptElement.src = url;
    document.body.appendChild(scriptElement);
  };
  commands.fetchReturnText = async function (url) {
    let response = await fetch(url);
    let data = await response.text();
    return data;
  };
  commands.getCookie = function (name) {
    let value = `; ${document.cookie}`;
    let parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };
  commands.evalURL = function (url) {
    if (url.startsWith("https") || url.startsWith("http")) {
      console.info("Adding https or http is desnecessary but, isnt an error");
      try {
        let xzx = new XMLHttpRequest();
        xzx.open("GET", url, false);
        xzx.send();
        let a = "constructor";
        a[a][a](xzx.responseText)();
      } catch (e) {
        throw new Error(e);
      }
    }
    try {
      let xzx = new XMLHttpRequest();
      xzx.open("GET", window.location.protocol + "//" + url, false);
      xzx.send();
      let a = "constructor";
      a[a][a](xzx.responseText)();
    } catch (e) {
      console.error(e);
    }
  };
  commands.saveData = function (name, data) {
    if (typeof data !== "object") {
      throw new Error("Data has to be in/an object!");
    }
    data = JSON.stringify(data);
    localStorage.setItem(name + "-saveData", data);
    console.info("Saved data!");
  };
  commands.loadData = function (name) {
    let item = localStorage.getItem(name + "-saveData");
    if (item == undefined) {
      return console.warn("Not found!");
    }
    return JSON.parse(item);
  };
  commands.listData = function () {
    let result = Object.keys(localStorage).filter(function (x) {
      if (x.endsWith("-saveData")) {
        return x;
      }
    });
    if (result[0] == undefined) {
      return console.warn(
        "Looks like there is no saved data on this localStorage!"
      );
    }
    return result;
  };
  commands.urlParams = {};
  commands.urlParams.currentPage = function () {
    return new URL(window.location.href).searchParams;
  };
  commands.urlParams.otherPageURL = function (url) {
    return new URL(url).searchParams;
  };
})();
