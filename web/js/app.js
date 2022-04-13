if (navigator.serviceWorker){
    //console.log("soporta sw");
    navigator.serviceWorker.register("/web/sw.js");
}
else{
    alert(":(no soporta el sw)");
}
