function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}


//retrieve player information
function numPointsScored(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const team = game[teamKey];
        const players = team.players;
        if (players.hasOwnProperty(playerName)) {
            return players[playerName].points;
        }
    }
    return null; // Return null if player not found
}
console.log(numPointsScored("Alan Anderson")); // Output: 22
console.log(numPointsScored("Ben Gordon")); // Output: 33
console.log(numPointsScored("Non-existent Player")); // Output: null

function shoeSize(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const team = game[teamKey];
        const players = team.players;
        if (players.hasOwnProperty(playerName)) {
            return players[playerName].shoe;
        }
    }
    return null; // Return null if player not found
}
console.log(shoeSize("Alan Anderson")); // Output: 16
console.log(shoeSize("Ben Gordon")); // Output: 15
console.log(shoeSize("Non-existent Player")); // Output: null

//retrieve team information
function teamColors(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
        const team = game[teamKey];
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
    return null; // Return null if team not found
}
console.log(teamColors("Brooklyn Nets")); // Output: ["Black", "White"]
console.log(teamColors("Charlotte Hornets")); // Output: ["Turquoise", "Purple"]
console.log(teamColors("Non-existent Team")); // Output: null   

function teamNames() {
    const game = gameObject();
    const names = [];
    for (const teamKey in game) {
        const team = game[teamKey];
        names.push(team.teamName);
    }
    return names;
}
console.log(teamNames()); // Output: ["Brooklyn Nets", "Charlotte Hornets"]


//retrieve player numbers & stats
function playerNumbers(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
        const team = game[teamKey];
        if (team.teamName === teamName) {
            const numbers = [];
            for (const playerName in team.players) {
                numbers.push(team.players[playerName].number);
            }
            return numbers;
        }
    }
    return null; // Return null if team not found
}
console.log(playerNumbers("Brooklyn Nets")); // Output: [0, 30, 11, 1, 31]
console.log(playerNumbers("Charlotte Hornets")); // Output: [4, 0, 2, 8, 33]
console.log(playerNumbers("Non-existent Team")); // Output: null

function playerStats(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const team = game[teamKey];
        const players = team.players;
        if (players.hasOwnProperty(playerName)) {
            return players[playerName];
        }
    }
    return null; // Return null if player not found
}
console.log(playerStats("Alan Anderson")); // Output: { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 }
console.log(playerStats("Ben Gordon")); // Output: { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 }
console.log(playerStats("Non-existent Player")); // Output: null

function bigShoeRebounds() {
    const game = gameObject();
    let maxShoeSize = 0;
    let rebounds = 0;

    for (const teamKey in game) {
        const team = game[teamKey];
        for (const playerName in team.players) {
            const player = team.players[playerName];
            if (player.shoe > maxShoeSize) {
                maxShoeSize = player.shoe;
                rebounds = player.rebounds;
            }
        }
    }
    return rebounds;
}
console.log(bigShoeRebounds()); // Output: 12

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerWithMostPoints = "";

    for (const teamKey in game) {
        const team = game[teamKey];
        for (const playerName in team.players) {
            const player = team.players[playerName];
            if (player.points > maxPoints) {
                maxPoints = player.points;
                playerWithMostPoints = playerName;
            }
        }
    }
    return playerWithMostPoints;
}
console.log(mostPointsScored()); // Output: "Ben Gordon"

function winningTeam() {
    const game = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;

    for (const playerName in game.home.players) {
        homeTeamPoints += game.home.players[playerName].points;
    }

    for (const playerName in game.away.players) {
        awayTeamPoints += game.away.players[playerName].points;
    }

    if (homeTeamPoints > awayTeamPoints) {
        return game.home.teamName;
    } else if (awayTeamPoints > homeTeamPoints) {
        return game.away.teamName;
    } else {
        return "It's a tie!";
    }
}
console.log(winningTeam()); // Output: "Charlotte Hornets"

function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";

    for (const teamKey in game) {
        const team = game[teamKey];
        for (const playerName in team.players) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
            }
        }
    }
    return longestName;
}
console.log(playerWithLongestName()); // Output: "Brendan Hayword"

function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let maxSteals = 0;
    let playerWithMostSteals = "";

    for (const teamKey in game) {
        const team = game[teamKey];
        for (const playerName in team.players) {
            const player = team.players[playerName];
            if (player.steals > maxSteals) {
                maxSteals = player.steals;
                playerWithMostSteals = playerName;
            }
        }
    }

    return longestName === playerWithMostSteals;
}
console.log(doesLongNameStealATon()); // Output: true   
