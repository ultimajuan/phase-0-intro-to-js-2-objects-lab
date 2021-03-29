const employee = {
    name: "Jason Bourne",
    streetAddress: "6601 Saunders St"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newName = {...employee};
    newName[key] = value;
    return newName  
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newName = {...employee};
    delete newName[key];
    return newName
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}