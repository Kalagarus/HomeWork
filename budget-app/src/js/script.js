"use strict";
let countStart = document.getElementById("start"),
  budgetValue = document.getElementsByClassName("budget-value")[0],
  dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
  levelValue = document.getElementsByClassName("level-value")[0],
  expensesValue = document.getElementsByClassName("expenses-value")[0],
  optionalExpensesValue = document.getElementsByClassName(
    "optionalexpenses-value"
  )[0],
  incomeValue = document.getElementsByClassName("income-value")[0],
  monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
  yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],
  expensesItems = document.getElementsByClassName("expenses-item"),
  expensesItemBtn = document.getElementsByTagName("button")[0],
  optionalExpensesBtn = document.getElementsByTagName("button")[1],
  countBudgetBtn = document.getElementsByTagName("button")[2],
  optionalExpensesItems = document.querySelectorAll(".optionalexpenses-item"),
  incomeItem = document.querySelector(".choose-income"),
  checkSavings = document.querySelector("#savings"),
  sumCheck = document.querySelector(".choose-sum"),
  percentCheck = document.querySelector(".choose-percent"),
  yearCheck = document.querySelector(".year-value"),
  monthCheck = document.querySelector(".month-value"),
  dayCheck = document.querySelector(".day-value");

let money, time;

countStart.addEventListener("click", function() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }

  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearCheck.value = new Date(Date.parse(time)).getFullYear();
  monthCheck.value = new Date(Date.parse(time)).getMonth() + 1;
  dayCheck.value = new Date(Date.parse(time)).getDay();
});

expensesItemBtn.addEventListener("click", function() {
  let sum = 0;

  for (let i = 0; i < expensesItems.length; i++) {
    let ansStat = expensesItems[i].value,
      ansMoney = expensesItems[++i].value;

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
      sum += +ansMoney;
    } else {
      i--;
    }
    expensesValue.textContent = sum;
  }
});

optionalExpensesBtn.addEventListener("click", function() {
  for (let i = 0; i < optionalExpensesItems.length; i++) {
    appData.optionalExpenses[i] = optionalExpensesItems[i].value;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
  }
});

countBudgetBtn.addEventListener("click", function() {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень дсотатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 5000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 5000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  } else {
    dayBudgetValue.textContent = "Произошла ошибка";
  }
});

incomeItem.addEventListener("input", function() {
  let items = incomeItem.value;
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function() {
  appData.savings = appData.savings != true;
});

sumCheck.addEventListener("input", function() {
  if ((appData.savings == true)) {
    let sum = +sumCheck.value,
      percent = +percentCheck.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentCheck.addEventListener("input", function() {
  if ((appData.savings == true)) {
    let sum = +sumCheck.value,
      percent = +percentCheck.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};
