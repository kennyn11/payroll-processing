// Create employee array //
const employees = [
{ name: "Kentrell Gaulden", hourlyRate: 50, hoursWorked: 50 },
{ name: "Jailin Parker", hourlyRate: 40, hoursWorked: 60 },
{ name: "Lucki Camel", hourlyRate: 45, hoursWorked: 75 }

]
// Return pay up to 40 hrs //
function calculateBasePay(rate,hours){
    return rate * Math.min(hours,40)
}
// Overtime pay 1.5x over 40 hrs//
