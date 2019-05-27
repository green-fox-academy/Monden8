'use strict';

class TennisGame {
    players: string[] = [];
    gameName: string;
    score: number[] = [0, 0];
    scoreName = ['-', 'All', 'Love', 'Fifteen', 'Thirty', 'Deuce', `Win for `, `Advantage `];
    scoreScreen = 'Love-All';
    constructor(Challenger: string, Opponent: string, GameName: string) {
        this.players[0] = Challenger;
        this.players[1] = Opponent;
        this.gameName = GameName;
    };
    scored(player: string) {
        if (this.players[0] === player) {
            this.score[0] += 1;
        } else {
            this.score[1] += 1;
        }
        //covers win
        if (Math.max(this.score[0], this.score[1]) - Math.min(this.score[0], this.score[1]) >= 2 &&
            Math.max(this.score[0], this.score[1]) >= 4) {
            this.score[0] > this.score[1] ? this.scoreScreen = this.scoreName[6] + this.players[0] : this.scoreScreen = this.scoreName[6] + this.players[1];
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
                this.scoreScreen = this.scoreName[5];
                return;
            }
        }
        //covers player1 advantage
        else if (this.score[0] > this.score[1]) {
            if (this.score[0] <= 3) {
                this.scoreScreen = this.scoreName[this.score[0] + 2] + this.scoreName[0] + this.scoreName[this.score[1] + 2];
            } else {
                this.scoreScreen = this.scoreName[7] + this.players[0]
            }
        }
        //covers player2 advantage
        else if (this.score[1] > this.score[0]) {
            if (this.score[1] <= 3) {
                this.scoreScreen = this.scoreName[this.score[1] + 2] + this.scoreName[0] + this.scoreName[this.score[0] + 2];
            } else {
                this.scoreScreen = this.scoreName[7] + this.players[1]
            }
        }
    }
};
let NormalGame: TennisGame;
let createNewGame = function (Challenger: string, Opponent: string, GameName: string) {
    NormalGame = new TennisGame(Challenger, Opponent, GameName);
    //create table and two buttons with player names 
};

let scoring = function (name:string){
    NormalGame.scored(name);
};