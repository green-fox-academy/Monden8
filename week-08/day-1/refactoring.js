'use strict';

class TennisGame {
    players = [];
    gameName;
    score = [0, 0];
    scoreName = ['-', 'All', 'Love', 'Fifteen', 'Thirty', 'Deuce', `Win for `, `Advantage `];
    scoreScreen;
    constructor(Challenger, Opponent, GameName) {
        this.players[0] = Challenger;
        this.players[1] = Opponent;
        this.gameName = GameName;
    };
    scored(player) {
        if (this.players[0] === player) {
            this.score[0] += 1;
        } else {
            this.score[1] += 1;
        }
        //covers win
        if (Math.max(this.score[0], this.score[1]) - Math.min(this.score[0], this.score[1]) >= 2 &&
            Math.max(this.score[0], this.score[1]) >= 4) {
            this.score[0] > this.score[1] ? this.scoreScreen = scoreName[6] + players[0] : this.scoreScreen = scoreName[6] + players[1];
            return;
        }
        //covers even scores
        if (Math.max(this.score[0], this.score[1]) - Math.min(this.score[0], this.score[1]) == 0) {
            for (let i = 0; i < 3; i++) {
                if (this.score[0] = i) {
                    this.scoreScreen = this.scoreName[i + 2] + this.scoreName[0] + this.scoreName[1];
                    return;
                }
            } if (this.score[0] >= 3) {
                this.scoreScreen = scoreName[5];
                return;
            }
        }
        //covers player1 advantage
        else if (this.score[0] > this.score[1]) {
            if (this.score[0]<=3) {
                
            } else {
                this.scoreScreen = scoreName[7] + players[0]
            }
        }
    }
}
const getScore = function () {

};
