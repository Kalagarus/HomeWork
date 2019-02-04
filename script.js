"use strict";

let money = 0, time = 0;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  moneyPerDay: 0
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let ansStat = prompt(
        "Введите обязательную статью расходов в этом месяце",
        ""
      ),
      ansMoney = prompt("Во сколько обойдется?", "");

    if (
      typeof ansStat === "string" &&
      typeof ansStat != null &&
      typeof ansMoney != null &&
      ansStat != "" &&
      ansMoney != "" &&
      ansStat.length < 50
    ) {
      console.log("Done");
      appData.expenses[ansStat] = ansMoney;
    } else {
      i--;
    }
  }
}

chooseExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Ваш бюджет за день = " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень дсотатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 5000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 5000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }
}

detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?", ""),
      percent = +prompt("Каков процент?", "");
    appData.monthIncome = (save / 100 / 12) * percent;
    alert("Доход в месяц с вашего депозита = " + appData.monthIncome);
  }
}

checkSavings();

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let indexExpenses = i;
    appData.optionalExpenses[++indexExpenses] = prompt("Статья необязательных расходов?", "");
  }
}

chooseOptExpenses();
