// if (condition) {
//     statement;
// }
// else if (anotherCondition) {
//     statement;
// }
// else
//     statement;

let hour = 9;

if (hour >= 6 && hour < 12) {
    console.log('Good Morning!');
}
else if (hour <= 12 && hour < 18) {
    console.log('Good Afternoon!');
}
else
    console.log('Good Evening!');