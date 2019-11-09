'use strict';

let today = new Date(),
    dateDefault = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(),
    
    money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', dateDefault),
    reqStateQ1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    reqStateCostA1 = prompt('Во сколько обойдется?', ''),
    reqStateQ2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    reqStateCostA2 = prompt('Во сколько обойдется?', ''),
    appData = {
        'money': money,
        'timeData': time,
        'expenses': {},
        'optionalExpenses': null,
        'income': [],
        'savings': false
    };
    
appData['expenses'][reqStateQ1] = reqStateCostA1;
appData['expenses'][reqStateQ2] = reqStateCostA2;
alert(appData.money / 30);
console.log(appData);