OpeningCeremony();

function OpeningCeremony(){

    setTimeout(()=>{
        console.log("Let the game begin");
        var scores = {red:0,blue:0,green:0,yellow:0};
        Race100M(scores,LongJump);
    },1000);
}

function Race100M(scores,callbackfunct){

    setTimeout(()=>{
        printScores(scores);
        
        setTimeout(()=>{
            scores.blue=50;
        },10000);

        setTimeout(()=>{
            scores.red=25;
        },12000);

        setTimeout(()=>{
            console.log("Blue won 100m Race.")
            callbackfunct(scores, HighJump);
        },15000);

    },3000)

}

function LongJump(scores,callbackfunct){
   
    setTimeout(()=>{

        printScores(scores);

        const keys = Object.keys(scores);

        let color = keys[Math.floor(Math.random() * keys.length)];

        console.log(color,"won LongJump.");

        if(color=="red"){
            scores.red=scores.red+150;
        }
        else if(color=="green"){
            scores.green=scores.green+150;
        }
        else if(color=="yellow"){
            scores.yellow=scores.yellow+150;
        }
        else{
            scores.blue=scores.blue+150;
        }


        callbackfunct(scores,AwardCeremony);
    },2000);
}

function HighJump(scores,callbackfunct){

    printScores(scores);
   
    let color;
    let entered = prompt("What color secured the highest jump?","");

    if(entered==null || entered==""){
        console.log("Event was cancelled");
    }
    else{

        if(entered=="red"){
            scores.red=scores.red+100;
            console.log("Red won HighJump.")
        }
        else if(entered=="green"){
            scores.green=scores.green+100;
            console.log("Green won HighJump.")
        }
        else if(entered=="yellow"){
            scores.yellow=scores.yellow+100;
            console.log("Yellow won HighJump.")
        }
        else if(entered=="blue"){
            scores.blue=scores.blue+100;
            console.log("Blue won HighJump.")
        }
        else{
            console.log("Event was cancelled"); 
        }
    }

    callbackfunct(scores);
}

function AwardCeremony(scores){

    printScores(scores);

    let sortable = [];

    for(var color in scores){
        sortable.push([color,scores[color]]);
    }

    sortable.sort(function(a,b){return b[1]-a[1];});

    console.log(sortable[0][0],"came first with",sortable[0][1],"points");
    console.log(sortable[1][0],"came second with",sortable[1][1],"points");
    console.log(sortable[2][0],"came third with",sortable[2][1],"points");
    console.log(sortable[3][0],"came fourth with",sortable[3][1],"points");
}

function printScores(scores){
    console.log("red",scores.red);
    console.log("blue",scores.blue);
    console.log("yellow",scores.yellow);
    console.log("green",scores.green);
}