//Progression 1 - create a Manager array and return it

let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon)
{
  return manager=[managerName,managerAge,currentTeam,trophiesWon];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  // if(formation!=null){
  //  const form={};
  //  form[forwards]=formation[0];
  //  form[midfielders]=formation[1];
  //  form[defenders]=formation[2];
  //  return form;}
  // else
  // {
  //   return null;
  // }
  if(formation== null){
    return null;
  }
  else
  {
    return{defender:formation[0],midfield:formation[1],forward:formation[2]};
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function(){

}

//Progression 4 - Filter players that play at the position _______


// //Progression 5 - Filter players that have won ______ award



//Progression 6 - Filter players that won ______ award ____ times



//Progression 7 - Filter players that won ______ award and belong to ______ country


//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____


//Challenge 1 - Sort players in descending order of their age

//Challenge 2 - Sort players beloging to _____ team in descending order of awards won


//Judgement 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names


//Judgement  2 - Sort players that are older than _____ years in alphabetical order

















