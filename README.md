# Lab-2-Javascript-
Lab 2: Javascript Created 12/7/17

Outcomes
bullet	become familiar with basic JavaScript programming
bullet	learn to use a JavaScript debugger
bullet	perform elementary execution time comparison of a Java vs. JavaScript application
Assignment details

In this assignment, you will create a JavaScript application based on a functioning Java application. JavaScript programs generally run in the context of a web page, so you will also have to create a simple HTML page to host the JavaScript program. When the HTML page is loaded into a browser, the hosted JavaScript program executes. In this assignment, the JavaScript application acquires user input, and generates output, via the browser debugging console. (You will investigate getting user input from the web page and generating displaying the output in the body of the web page in a subsequent assignment).

Download and execute this simple Java application, adapted directly from an example in chapter 9 of your SE1011 textbook. The application simulates flipping a number of coins (e.g. 10) a given number of times (e.g. 1,000,000). Each coin flip results in some combination of heads and tails - anywhere from no heads to all heads. Over 100,000 flips, some finite number of flips with 0 heads will occur, some finite number with 5 heads, and others with 1, 2, 3, or 4 heads. The number of heads that occur over all flips can be displayed as a histogram, as follows:

Number of times each head count occurred in 1000000 flips of 10 coins:
#####  0  974  
#####  1  9826  *
#####  2  43914  ****
#####  3  117248  ************
#####  4  204504  ********************
#####  5  246600  *************************
#####  6  205096  *********************
#####  7  117065  ************
#####  8  43872  ****
#####  9  9895  *
#####  10  1006  
##### Coin Flipper Time: 30934ms

Run the Java program on your PC about 10 times. You will have to run it repeatedly to get a good feeling for the average time of execution. Record the times it takes to execute. For capturing results, have the program flip 10 coins 1 million times.

The Java program uses the random number generator of the Math class to randomly generate heads or tails for each coin's flip, so the results will vary each time the program executes.

The Java example is written such that the number of coins and number of flips appear in a histogram that is generated to the System console. As with any standard Java application, there is a main class (CoinFlipper) containing a main() method along with a constructor and various worker methods.

For this assignment, you need to translate the Java application to equivalent JavaScript. In converting the application, you'll have to make numerous adaptations. Looping and conditional statements are very similar between the two languages, so those should not pose particular problems. Function and method declarations, of course, are very different. The JavaScript core API includes a Math object that is essentially equivalent to Java's Math class. In this assignment, you'll also have to replace the Java code that uses System.out.print with equivalent JavaScript calls to the console object, which contains methods that accept input and generate output to the browser's debugging console, as well as starting and stopping a timer. There are several ways to do this; see the documentation on the Date class for more information (warning: don't use Date.getMilliseconds). Note: Use the global prompt function to get input from the user, and the alert function to display input error messages (0, negative, or alphabetic input values must not be allowed).

You will also need to create a CoinFlipper.html web page with two <script> tags to host the JavaScript application. In this file, place the first <script>...</script> tag in the <head> section which references a CoinFlipper.js file (where you define your CoinFlipper class and all it's methods). Place the second <script>...</script> tag following the first script tag containing only the following lines:

var cf = new CoinFlipper();

cf.init();

Note that the above code effectively replicates the corresponding code in the main method of CoinFlipper.java.

You must implement the remainder of the JavaScript implementation in the CoinFlipper.js file. Your implementation must be object-based; therefore; you will need a CoinFlipper constructor function that defines additional named or anonymous methods (replicating the remaining methods of the CoinFlipper.java class):
bullet	an init function (this is the only method of the CoinFlipper object that needs to be "public", the others can be "private")
bullet	a doSingleFlip function
bullet	a flipCoins function
bullet	a printHistogram function

Your CoinFlipper constructor should also define any "private" instance variables  and "private" methods.

The above Javascript functions should implement the same functionality as their corresponding Java functions.

The init function should also clear the debugging console of the browser (it is not automatically cleared), and reinitialize all variables and arrays (test running your solution multiple times to make sure everything is initialized correctly with each run).

Your CoinFlipper.html doubles as your report for this lab assignment. It should define a <h2> heading in the body section containing your name. In subsequent paragraph <p> sections, include your observations regarding the relative execution times of Java vs JavaScript (described below).

When your application is working correctly, it should generate output similar to the following:


Number of times each head count occurred in 30 flips of 8 coins:
##### 0 0 
##### 1 0 
##### 2 3 **********
##### 3 6 ********************
##### 4 7 ***********************
##### 5 7 ***********************
##### 6 5 *****************
##### 7 2 *******
##### 8 0 
Coin Flipper Time: ??? ms

Here's another example:

Starting CoinFlipper...
Number of times each head count occurred in 1,000,000 flips of 10 coins:
##### 0 991 
##### 1 9681 *
##### 2 44048 ****
##### 3 117339 ************
##### 4 205143 *********************
##### 5 246452 *************************
##### 6 204831 ********************
##### 7 117267 ************
##### 8 43817 ****
##### 9 9461 *
##### 10 970 
##### Coin Flipper Time: ??? ms

Of course, your implementation will output the actual time in place of the "???" above.

Note: Within the init function, be sure NOT to time the code that generates the histogram (it takes a LONG time to do console I/O compared to the time required for mathematical computations).

Run the application in at least 2 browsers, for instance: Chrome & Firefox, Chrome and Edge, IE and Edge, etc.
You may also use other browsers (e.g. Opera, Safari) if you have them. Note that your results, including the elapsed time, will vary - you will have run the application several times to get a good feel for the average execution time for each browser.

For capturing timing results, flip 10 coins 1 million times. However, you should also repeatedly test your implementation using other input (e.g. flip 1 coin 1 time, 10 coins 1 time, etc) to make sure the results are correct.

Capture the console output containing the times it takes to execute the JavaScript version of the application on each browser and include the output in your report (Coinflipper.html) within <code> or <pre> tags so that the output in your Coinflipper.html page is similar to the actual console output.

Configure and use the built-in JSHint tool of WebStorm to ensure that your Javascript code is correct. 
