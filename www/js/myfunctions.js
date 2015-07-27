/**
 * Created by iam on 7/27/2015.
 */

document.addEventListener('deviceready', deviceInfo, false); // device ready even is defined in cordova, and will be triggered when page loaded and cordova library also loaded, so basically when device is ready to work with



function deviceInfo(){
    var content = "";
    content += "Device " + device.model + "<br/>"; // this returns device's name and/or model
    content += "OS " + device.platform + "<br/>"; // this returns device os's name
    content += "Version "+ device.version +"<br/>"; // this returns device os's version
    content += "Cordova "+ device.cordova +"<br/>"; // cordova version of running device


    document.getElementById('deviceInfo').innerHTML = content;
}
