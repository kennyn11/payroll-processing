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
function calculateOvertimePay(rate, hours){
    if (hours > 40)
        return (hours - 40), * rate * 1.5
    return 0;
}
// Taxes //
function calculateTaxes(grossPay) {
    return grossPay * 0.15
}
// Function for processing payroll //
function processPayroll(employee) {
    const name = employee,name;
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employees.hourlyRate, employees.hoursWorked)
    const grossPay = basePay + overtimePay
    const netPay = grossPay - calculateTaxes(grossPay)

    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        netPay: netPay,
        grossPay: grossPay
    }
}
employees.forEach(function(employee)){
    console.log(processPayroll(employee));
}