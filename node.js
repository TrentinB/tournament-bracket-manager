class node{

    constructor(player1Tag, player2Tag, children, parent){
        this.player1Tag = player1Tag;
        this.player2Tag = player2Tag;
        this.player1score = 0;
        this.player2Score = 0;
        //children element should be an array with 0-2 elements
        this.children = children;
        this.parent = parent;
    }

    setPlayer1Tag(newTag){
        this.player1Tag = newTag;
    }

    setPlayer2Tag(newTag){
        this.playe2rTag = newTag;
    }

    getPlayer1Tag(){
        return this.player1Tag;
    }

    getPlayer2Tag(){
        return this.player2Tag;
    }

    setPlayer1Score(newScore){
        this.player1score = newScore;
    }

    setPlayer2Score(newScore){
        this.player2score = newScore;
    }

    getWinner(){
        if (this.player1score > this.player2Score){
            return this.player1Tag;
        }
        else if(this.player1score = this.player2Score){
            // what to do in case of a draw?????
        }
        else{
            return this.player2Tag;
        }
    }

}