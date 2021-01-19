const conditionsLog = [
    {"conditionsMet":0,
    "conditionsNotMet":0}
];

if (1+1===2) {
    console.warn("Condition Met.");
    conditionsLog[0].conditionsMet += 1;
    document.getElementById("demo").innerHTML = `${conditionsLog[0].conditionsMet} conditions ARE met [${conditionsLog[0].conditionsMet >= 0}], ${conditionsLog[0].conditionsNotMet} Conditions are NOT met. [${conditionsLog[0].conditionsNotMet <= 0}]`;
} else {
    console.log("Condition Not Met, escaping.");
    conditionsLog[0].conditionsNotMet += 1;
    document.getElementById("demo").innerHTML = `${conditionsLog[0].conditionsMet} conditions ARE met [${conditionsLog[0].conditionsMet >= 0}], ${conditionsLog[0].conditionsNotMet} Conditions are NOT met. [${conditionsLog[0].conditionsNotMet <= 0}]`;
}
console.warn("Conditions Complete.");
console.warn(`Log of final conditions, always keep at end of code!`);
console.log(conditionsLog);