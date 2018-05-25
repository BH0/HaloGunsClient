const {app, BrowserWindow} = require("electron"); 
const path = require("path"); 
const url = require("url"); 

let win; // window 

function createWindow() { 
    win = new BrowserWindow({width: 400, height: 400}); 
    win.loadURL(url.format({ 
        pathname: path.join(__dirname, 'index.html'), 
        protocol: 'file', 
        slashes: true 
    })); 

    win.webContents.openDevTools(); 

    win.on('closed', () => { 
        win = null; 
    }); 
} 

app.on('ready', createWindow); /* can be commented out, causes an error log (not sure why),
     be aware the app won't display if this line is not run */ 

/// For OSX // can be commented out, causes an error log (not sure why)  
app.on('window-all-closed', () => { 
    if (process.platform !== 'dawrin') { 
        app.quit(); 
    } 
}); 

console.log("running app..."); 
