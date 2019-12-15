'use strict';

let money, time;

function start() {
    
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
        time  = prompt('Введите дату в формате YYYY-MM-DD', '');
    }
}

start();

let appData = {
    'money': money,
    'timeData': time,
    'expenses': {},
    'optionalExpenses': null,
    'income': [],
    'savings': true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.money / 30).toFixed();
        alert('Every day money: ' + (appData.money / 30).toFixed());
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100){
            console.log("Minimum level of living");
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Middle level of living");
        } else if (appData.moneyPerDay > 2000) {
            console.log("High level of living");
        } else {
            console.log("Whoops, some error occurred!");
        }
    },
    checkSavings: function() {
        if(appData.savings == true) {
            let save    = +prompt('How much money, would you like to save?', ''),
                persent = +prompt('What is persent?', '');
    
            appData.monthIncome = save/100/12*persent;
            
            alert("Income per manth: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
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
    },
    chooseIncome: function() {

        for(let i = 0; i < 1; i++) {
            let a = prompt("How can you get extra money? (Please, count it thought comma)", "");
                
    
            if( (typeof(a) === 'string') && (typeof(a) != null) && (a != ''))
                
            {
                appData.income = a.split(', ');
        
                // add new one income
                appData.income.push(prompt("Any think else?", ""));

                // sort incomes
                appData.income.sort();
               
                // show extra money ways
                let extraMoneyWays = [];
                appData.income.forEach(element => {
                    extraMoneyWays.push(element);
                });

                alert('Extra money ways: ' + extraMoneyWays);

                

                
            } else {
                // decrement index in order to restart iteration
                i--; 
            }
        }
    }
};

    // show whole object keys
    console.log('Our program include next data:');
    for(let key in appData) {
        console.log(key);
    };
