'use strict'

/* Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!" */

class PostIt {
    backgroundColor: string;
    textOnIt: string;
    textColor: string;

    constructor(backgroundColor: string, textOnIt: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.textOnIt = textOnIt;
        this.textColor = textColor;
    }
}
const first:PostIt=new PostIt('orange','blue','Idea 1');
const second:PostIt=new PostIt('pink','black','Awesome');
const third:PostIt=new PostIt('yellow','green','Superb');

console.log(first)