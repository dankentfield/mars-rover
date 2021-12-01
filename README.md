# How to play:
* `npm install`
* `npm run build`
* To play run `node ./dist/cli.js`
  * You will be prompted for instructions

# Improvements
* Use typescript
* Input validation
* Multiple robots on cli input
    * this is possible via jest
* More tests

# Design decisions:

### Javascript v Typescript
* In order to speed up the code test and avoid rabbit holes with setup and config I chose javascript.

### Moves iteration
I chose to iterate over the moves list even though there was a high chance of "wasted" iterations.

The main reason is, that in general the number of moves and thus iterations would always be very small, so the number of wasted iterations would be minimal.
I balanced this against the cost of more readable and testable code. 

For instance, I could have mutated a global robots variable and thrown an error to exit early from the reducer. 

### OOP v Functional

I tried to maintain a functional approach as I understand that is multiverse's preferred style.
It is also my preferred style, and I find it easier to break up the folder structure (easing cognitive load) and to test parts more independently.  

However, an OOP style could have worked quite well here too considering the nature of the Robot entity, it has repeatable behaviours and internal state.

### The entry point
The instructions suggested console output, so I created a CLI-like user interface. 
You can also add or adjust the jest tests in `src/service/run_game`. 
