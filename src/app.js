//Progression 1 - create a Manager array and return it

let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return (manager = [managerName, managerAge, currentTeam, trophiesWon]);
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
function createFormation(formation) {
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
  if (formation.length == 0) {
    return null;
  } else {
    return {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2],
    };
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
const filterByDebut = (year) => {
  const deb_players = players.filter((player) => {
    if (player.debut == year) {
      return player;
    }
  });
  return deb_players;
};

//Progression 4 - Filter players that play at the position _______
const filterByPosition = (position) => {
  return players.filter((player) => {
    if (player.position == position) return player;
  });
};

// //Progression 5 - Filter players that have won ______ award
const filterByAward = (awardname) => {
  const award_player = [];
  players.forEach((player) => {
    let awardlist = player.awards;
    awardlist.forEach((award) => {
      if (award.name == awardname) award_player.push(player);
    });
  });
  return award_player;
};

//Progression 6 - Filter players that won ______ award ____ times
const filterByAwardxTimes = (awardname, count) => {
  const awardx_player = [];
  const playerslist = filterByAward(awardname);
  players.forEach((player) => {
    let awardlist = player.awards;
    var no = 0;
    awardlist.forEach((award) => {
      if (award.name == awardname) {
        no += 1;
      }
    });
    if (count === no) {
      awardx_player.push(player);
    }
  });
  return awardx_player;
};

//Progression 7 - Filter players that won ______ award and belong to ______ country
const filterByAwardxCountry = (awardname, country) => {
  const awardx_player = [];
  const playerslist = filterByAward(awardname);
  return playerslist.filter((player) => {
    if (player.country == country) return player;
  });
};

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
const filterByNoOfAwardsxTeamxAge = (noOfAwards, team, Age) => {
  return players.filter((player) => {
    if (
      player.awards.length >= noOfAwards &&
      player.team == team &&
      player.age < Age
    )
      return player;
  });
};

//Challenge 1 - Sort players in descending order of their age

//Challenge 2 - Sort players beloging to _____ team in descending order of awards won
const FilterByTeamxSortByNoOfAwards = (team) => {
  let team_players = players.filter((player) => {
    if (player.team == team) return player;
  });
  team_players.sort((a, b) => {
    return b.awards.length - a.awards.length;
  });
  return team_players;
};

//Judgement 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
const SortByNamexAwardxTimes = (awardname, noOftimes, country) => {
  const arr = filterByAwardxTimes(awardname, noOftimes);
  const new_arr = arr.filter((player) => {
    if (player.country == country) return player;
  });
  new_arr.sort((a, b) => {
    if (a.name > b.name) return 1;
  });
  return new_arr;
};

//Judgement  2 - Sort players that are older than _____ years in alphabetical order

const SortByNamexOlderThan = (age) => {
  const arr = players.filter((player) => {
    if (player.age > age) return player;
  });
  arr.sort((a, b) => {
    if (a.name > b.name) return 1;
  });
  arr.sort((a, b) => {
    return p.awards[a].year - p.awards[b].year;
  });
  return arr;
};
