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
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

// buttons
let start               = document.getElementById('start'),
    countBudgetBtn      = document.querySelector("button.count-budget-btn"),
    optionalExpensesBtn = document.querySelector("button.optionalexpenses-btn");

// other elements
let chooseIncomeLabel = document.querySelector('.choose-income-label'),
    savingsCheckbox   = document.querySelector('.savings'),
    chooseSum         = document.querySelector('.choose-sum'),
    choosePercent     = document.querySelector('.choose-percent');

    