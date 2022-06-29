var sec=0;
var min=0;
var hr=0;
var timer=false;
var count=0;

var miliseconds = document.getElementById("miliseconds");
var sec_element = document.getElementById("sec");
var min_element = document.getElementById("min");
var hour_element = document.getElementById("hr");

const start = () => {
    timer = true;
    stopwatch();
}

const stop = () => {
    timer = false;
}

const reset = () => {
    minstring=0;
    sec=0;
    hr=0;
    count=0;
    timer=false;

}

const stopwatch = () => {
    // console.log(timer);
    if(timer){
        count++;
        if(count==100){
            sec+=1;
            count=0;
        }
        if(sec > 59){
            min+=1;
            sec = 0;
        }
        if(min > 59){
            hr+=1;
            min=0;
            sec=0;
            count=0;
        }
    }

    (count<10) ? miliseconds.innerHTML="0"+count : miliseconds.innerHTML=count; 
    (sec<10) ? sec_element.innerHTML="0"+sec : sec_element.innerHTML=sec; 
    (min<10) ? min_element.innerHTML="0"+min : min_element.innerHTML=min;
    (hr<10) ? hour_element.innerHTML="0"+hr : hour_element.innerHTML=hr; 

    setTimeout('stopwatch()',10);
}

