"use strict";

let money = +prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

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
  }
}

appData.moneyPerDay = appData.budget / 30;

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень дсотатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 5000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 5000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}