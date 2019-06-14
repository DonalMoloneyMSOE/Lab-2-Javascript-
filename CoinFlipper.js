/**
 * Donal Moloney
 * Lab2
 * SE 2840
 * Dr.Hornick
 * 12/7/17
 */
class CoinFlipper{
    /**
     * This constructor creates an array to populate
     */
    constructor(){
        this.frequency = new Array();

    }

    /**
     * Gathers user input, controls execution, and measures how long it takes to execute.
     */
   init() {
        var loop = true;
        while (loop === true) {
            try {
                var numberOfCoinsString = prompt("Enter number of coins to be flipped, decimals are dropped");
                this.numberOfCoins = parseInt(numberOfCoinsString);
                var numberOfRepetitionsString = prompt("Enter the number of desired repetitions, decimals are dropped");
                this.numberOfRepetitions = parseInt(numberOfRepetitionsString);

                if (this.numberOfRepetitions === "") {
                    alert("Number of Repetitions must have value");
                } else if (this.numberOfCoins  === "") {
                    alert("Number of coins must have value");
                } else if(this.numberOfCoins<1){
                    alert("Number of coins can not be zero or less than");
                }else if(this.numberOfRepetitions<1){
                    alert("Number of repetitions must not be zero or less than");
                }
                else if (isNaN(this.numberOfRepetitions) === false) {
                    if (isFinite(this.numberOfRepetitions) === true) {
                        if (isNaN(this.numberOfCoins) === false) {
                            if (isFinite(this.numberOfCoins) === true) {
                                loop = false;
                            } else {
                                alert("Number of coins must be finite");
                            }
                        } else {
                            alert("Number of coins must be a number");
                        }
                    } else {
                        alert("Number of repetitions must be finite");
                    }
                }else{
                    alert("Number of repetitions must be a number");
                }
            } catch (err) {
                alert("Invalid input has been entered");
            }
        }

           this.length = this.numberOfCoins+1;
           for(var i = 0; i< this.length;i++){
               this.frequency.push(0);
           }

       console.log("Success exit test")
       var start = new Date();
       start.getTime();
       //todo call flip coins
       this.flipCoin();
       var stop = new Date();
       stop.getTime();
       var totalTime = stop -start;
       //is this correct
       this.printHistogram();
       console.log("Coin flipper Time: " + totalTime + " ms ");
    }

    /**
     * This method flips a specified number of coins a specified number of times,
     * and gathers the number of times a certain number of heads occurred in each flip into the frequency[] array.
     */
    flipCoin(){
        for(var i = 0; i< this.numberOfRepetitions; i++){
            var heads = this.singleFlip();
            this.frequency[heads]++;

        }
    }

    /**
     *This method flips a specified number of coins and returns the number heads that occurred in the flip.
     * It makes use of a random number generator to randomly generate heads or tails for each coin flipped.
     * @return the number of heads that occurred in the flip
     */
    singleFlip(){
        var heads = 0;
        for(var i = 0; i < this.numberOfCoins; i++){
            heads += Math.floor(Math.random()*2);
        }
        return heads;
    }

    /**
     * This method prints a histogram of the number of heads that occurred for a specified number of flips
     */
    printHistogram() {
        let fractionOfReps;
        let numOfAsterisks;
        let string = "";
        console.log("Number of time each head count occurred" + this.numberOfRepetitions + " flips of " + this.numberOfCoins
            + "coins");
        for(var heads = 0; heads <= this.numberOfCoins; heads++){
            fractionOfReps = this.frequency[heads]/this.numberOfRepetitions;
            numOfAsterisks = Math.round(fractionOfReps*100);
            string = " " + heads + " " + this.frequency[heads] + "  ";


            for(let i = 0; i < numOfAsterisks; i++){
                string += "*";
            }
            console.log(string);

        }
    }
}