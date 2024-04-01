const employee = {
    name: "Alvin",
    streetAddress: "Kasarani 2nd Avenue"
  };

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key] : value};  
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    return {...employee, [key]: undefined};
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}