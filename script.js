console.clear();
var paths, time, totalLength, offset, length, duration, delay, pathid = "vazio", i = 0;
paths = document.querySelectorAll('#drawing path'); // select all mouse and mask paths 
time = 30000; // how long the drawing should last in milliseconds
totalLength = 0; // length of all paths
paths.forEach(function(path) {
    totalLength += path.getTotalLength(); // add length of all paths
    //console.log(path.getTotalLength());
});
console.log(totalLength);
offset = 0; // how far each path is from the start
paths.forEach(function(path){
    length = path.getTotalLength(); // length of current path
    path.style.setProperty('--length',length); // set css var for path length
    duration = length / totalLength * time; // how long the path should take to draw - percentage of total time equal to the percentage of the path's length in the total length
    path.style.setProperty('--duration',duration+'ms'); // set css var for duration
    delay = offset / totalLength * time; // delay path drawing until previous finished
    path.style.setProperty('--delay',delay+'ms'); // set css var for offset
    path.style.setProperty('--opacity','0'); // set css var for offset
    offset += length; // increase offset by current path's length
    
    //to get class you can use too: path.className.baseVal
    if(path.id == "base" ||  path.getAttribute("class") == "painting"){
        console.log(length);
        pathid = path.className.baseVal;
        //pathid = path.getAttribute("class");
        console.log(pathid);
        path.style.setProperty('--opacity','1');
    }
    i++;
})