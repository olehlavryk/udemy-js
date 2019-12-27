'use strict';

// values
let budgetValue           = document.querySelector('.budget-value'),
    dayBudgetValue        = document.querySelector('.daybudget-value'),
    levelValue            = document.querySelector('.level-value'),
    expensesValue         = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue           = document.querySelector('.income-value'),
    monthsavingsValue     = document.querySelector('.monthsavings-value'),
    yearsavingsValue      = document.querySelector('.yearsavings-value'),
    yearValue             = document.querySelector('.year-value'),
    monthValue            = document.querySelector('.month-value'),
    dayValue              = document.querySelector('.day-value');

// exepenses
let expensesItem         = document.getElementsByClassName('expenses-item'),
    optionalExpensesItem = document.getElementsByClassName('optionalexpenses-item');

// buttons
let start               = document.getElementById('start'),
    countBudgetBtn      = document.querySelector("button.count-budget-btn"),
    expensesItemBtn     = document.querySelector('button.expenses-item-btn'),
    optionalExpensesBtn = document.querySelector("button.optionalexpenses-btn");

// set disabled by defalt to buttons
countBudgetBtn.setAttribute("disabled", "disabled");
expensesItemBtn.setAttribute("disabled", "disabled");
optionalExpensesBtn.setAttribute("disabled", "disabled");

// other elements
let chooseIncome      = document.querySelector('.choose-income'),
    savingsCheckbox   = document.querySelector('#savings'),
    chooseSum         = document.querySelector('.choose-sum'),
    choosePercent     = document.querySelector('.choose-percent');

// extra variables
let money, time;

// appData object
let appData = {
    'budget': money,
    'timeData': time,
    'expenses': {},
    'optionalExpenses': {},
    'income': [],
    'savings': false
};

// event click on start btn
start.addEventListener('click', function(){ 
    
    time  = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    // remove disbled attribute from buttons
    countBudgetBtn.disabled = false;
    expensesItemBtn.disabled = false;
    optionalExpensesBtn.disabled = false;

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет?', '');
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

// event click on expenses-item-btn
expensesItemBtn.addEventListener('click', function(){
    let sum = 0;

    for(let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50)
        {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            // decrement index in order to restart iteration
            i--; 
        }
    }

    expensesValue.textContent = sum;
});

// event click on optionalexpenses-item
optionalExpensesBtn.addEventListener('click', function(){
    for(let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;

        appData.optionalExpenses[i] = opt;

        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

// event click count-budget-btn
countBudgetBtn.addEventListener('click', function(){

    // get requeire expenses
    let requireValueMoney = 0;

    for(let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50)
        {
            requireValueMoney += +b;
        } else {
            // decrement index in order to restart iteration
            i--; 
        }
    }

    if(appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - requireValueMoney) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        
        // detect level
        if(appData.moneyPerDay < 100){
            levelValue.textContent = "Minimum level of living";
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Middle level of living";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "High level of living";
        } else {
            levelValue.textContent = "Whoops, some error occurred!";
        }
    } else {
        dayBudgetValue.textContent = 'Whoops, some error occurred!';
    }
});

// event input income
chooseIncome.addEventListener('input', function(){
    let items = chooseIncome.value;
    appData.income = items.split(', ');

    incomeValue.textContent = appData.income;
});

// event checkbox
savingsCheckbox.addEventListener('click', function() {
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

// event input chooseSum
chooseSum.addEventListener('input', function(){
    if(appData.savings == true){
        let sum     = +chooseSum.value,
            percent = +choosePercent.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavingsValue.textContent =  appData.yearIncome.toFixed(1);
    }

    
});

// event input choosePersent
choosePercent.addEventListener('input', function(){
    if(appData.savings == true){
        let sum     = +chooseSum.value,
            percent = +choosePercent.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavingsValue.textContent =  appData.yearIncome.toFixed(1);
    }
});
