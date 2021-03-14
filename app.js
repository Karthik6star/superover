let score=[0,1,2,3,4,5,6];
var turn;
  var team1 = {
    name:"CSK",
    runs:[],
    score:0
}
 var team2 = {
    name:"RCB",
    runs:[],
    score:0
}
window.onload=()=>{
    SelectTurn();
    UpdateButton();
    updatescore();
    updatenames();
}
let SelectTurn=()=>{
    turn=Math.round(Math.random())+1;
}
let UpdateButton=()=>{
    var button=document.getElementById("striker-button");
    var result=document.getElementById("result");
    result.style.visibility="";
    if(team1.runs.length  == 6 && team2.runs.length==6){
    button.remove();
    result.textContent = team1.score===team2.score?`match Draw`:`${team1.score > team2.score?team1.name:team2.name} wins`;
    }
    else{
        turn=team1.runs.length=== 6 ? 2:team2.runs.length==6?1:turn;
        button.textContent =`${turn===1 ? team1.name: team2.name}Batting`;
    }
}
let updatescore=()=>{
    document.getElementById("team-1-score").textContent=team1.score;
    document.getElementById("team-2-score").textContent=team2.score;
    updateruns();
}
let updatenames=()=>{
    document.getElementById("team-1-name").textContent=team1.name;
    document.getElementById("team-2-name").textContent=team2.name;
}
var buttonclick=()=>{
    var runs=score[Math.floor(Math.random()*score.length)];
    runs=runs==5?"w":runs;
    if(turn===1)
    {
    team1.runs.push(runs);
    team1.score=Calculatescore(team1.runs)
    }
    else{
        team2.runs.push(runs);
    team2.score=Calculatescore(team2.runs)
}
UpdateButton();
updatescore();
}
var Calculatescore=(runs)=>{
    return runs.map(num=>{
        return num=='w'?0:num;
    }).reduce((total,num)=>total+num);
}
var updateruns=()=>{
   var teamone = document.getElementById("team-1-round-runs").children;
   var teamtwo = document.getElementById("team-2-round-runs").children;
    team1.runs.forEach((runs,index) => {
        teamone[index].textContent=runs;
 })
 team2.runs.forEach((runs,index) => {
    teamtwo[index].textContent=runs;
})


}