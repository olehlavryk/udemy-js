'use strict';

let money, time;

let appData = {
    'money': money,
    'timeData': time,
    'expenses': {},
    'optionalExpenses': null,
    'income': [],
    'savings': true
};

function start() {
    
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
        time  = prompt('Введите дату в формате YYYY-MM-DD', '');
    }
}

start();
    
function chooseExpenses() {
    for(let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');

        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50)
        {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            // decrement index in order to restart iteration
            i--; 
        }
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.money / 30).toFixed();
    alert('Every day money: ' + (appData.money / 30).toFixed());
}

detectDayBudget();


function detectLevel() {
    if(appData.moneyPerDay < 100){
        console.log("Minimum level of living");
    }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Middle level of living");
    } else if (appData.moneyPerDay > 2000) {
        console.log("High level of living");
    } else {
        console.log("Whoops, some error occurred!");
    }
}

detectLevel();


function checkSavings() {
    if(appData.savings == true) {
        let save    = +prompt('How much money, would you like to save?', ''),
            persent = +prompt('What is persent?', '');

        appData.monthIncome = save/100/12*persent;
        
        alert("Income per manth: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for(let i = 0; i < 3; i++) {
        let a = prompt('Choose not necessary expenses', ''),
            b = prompt('How much money?', '');

        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50)
        {
            console.log('done');
            appData.optionalExpenses[a] = b;
        } else {
            // decrement index in order to restart iteration
            i--; 
        }
    }
}

console.log(appData);