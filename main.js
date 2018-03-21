// Write your JavaScript here

// var amtGiven = parseFloat($('#amtGiven').val());

// Get the button element and put it in the variable `button`
var button = document.getElementById('calculate')

// When the button is clicked, go to calculateChange() function
button.addEventListener('click', calculateChange);

function calculateChange() {
    // Get the input element's value
    var amountGiven = document.getElementById('amtGiven').value;
    console.log(typeof amountGiven)


    // Get the amount owed value
    var amountOwed = document.getElementById('amtOwed').value;

    if (isNaN(amountGiven) || isNaN(amountOwed)) { 
        alert("not a number, please enter a valid number");
        return false;
    }
    //Get change and multiply it by 100 to convert it into pennies
    var change = parseFloat((amountGiven - amountOwed) * 100);

    console.log('Amount Given: ',amountGiven);
    console.log('Amount Owed: ',amountOwed);
    console.log('Change', change);

    // Get the remainder of the change / 100 (for dollars)
    var dollars = Math.floor(change / 100);

    // Multiply dollars by 100 to get pennies and remove that amount of pennies from change
    change = change - (dollars * 100);

    // Do the same thing for the rest of the change
    var quarters = Math.floor(change / 25);
    change = change - (quarters * 25);

    var dimes = Math.floor(change / 10);
    change = change - (dimes * 10);

    var nickels = Math.floor(change / 5);
    change = change - (nickels * 5);

    var pennies = Math.floor(change / 1);
    change = change - pennies;

    console.log('Dollars', dollars)
    console.log('Quarters', quarters)
    console.log('Dimes', dimes)
    console.log('Nickels', nickels)
    console.log('Pennies', pennies)


    document.getElementById('dollars').innerText = dollars + ' dollars';
    document.getElementById('quarters').innerText = quarters + ' quarters';
    document.getElementById('dimes').innerText = dimes + ' dimes';
    document.getElementById('nickels').innerText = nickels + ' nickels';
    document.getElementById('pennies').innerText = pennies + ' pennies';

  
};


// var amtOwed = parseInt($('#amtOwed'- '#amtGiven').val());


// var dollars = 5;
// dollars(parseInt) * (1.00).toFixed(2)

// var quarters = parseFloat(amtGiven)
// quarters(parseInt) * (0.25).toFixed(2)

// var dimes = parseFloat(amtGiven)
// dimes(parseInt) * (0.10).toFixed(2)

// var nickels = parseFloat(amtGiven)
// nickels(parseInt) * (0.05).toFixed(2)


// var pennies = parseFloat(amtGiven)
// pennies(parseInt) * (0.01).toFixed(2)


