//1
//Cоздать функцию - конструктор, которая будет иметь внутри все свойства обьекта emplyee из массива emplyeeArr;
function Emploee(employee) {
  (this.id = employee.id),
    (this.name = employee.name),
    (this.surname = employee.surname),
    (this.salary = employee.salary),
    (this.workExperience = employee.workExperience),
    (this.isPrivileges = employee.isPrivileges),
    (this.gender = employee.gender);
}

// const employeeObj = new Emploee(emplyeeArr[1]);

//2
//Добавить функции - конструктору метод (помним про prototype): getFullName который вернет полное имя начиная с фамилии в виде строки
Emploee.prototype.getFullName = function () {
  return `${this.surname} ${this.name}`;
};

//3
//Создать новый массив на основе emplyeeArr в котором будут содержаться те же обьекты, но созданные функцией - конструктором Emploee. Новый массив должен содержать имя emplyeeConstructArr
let createEmployesFromArr = (arr) => {
  const employesArr = [];
  for (const employee of arr) {
    employesArr.push(new Emploee(employee));
  }
  return employesArr;
};

const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);

//4
//Создать функцию которая вернет массив со всеми полными именами каждого employee, содержащегося в emplyeeConstructArr;
const getFullNamesFromArr = (arr) => {
  const array = [];
  for (const employee of arr) {
    array.push(`${employee.name} ${employee.surname}`);
  }
  return array;
};

getFullNamesFromArr(emplyeeConstructArr);

//5
//Создать функцию которая вернет среднее значение зарплаты всех employee
const getMiddleSalary = (arr) => {
  let totalSalary = 0;
  let middleSalary = 0;

  for (const employee of arr) {
    totalSalary += employee.salary;
  }

  middleSalary = totalSalary / arr.length;

  return Math.round(middleSalary);
};

getMiddleSalary(emplyeeConstructArr);

//6
//Создать функцию которая выберет наугад работника из массива emplyeeConstructArr. Вы должны учитывать в функции длинну массива, так как если работников 7, а рандомное число будет равно больше 7, то результат будет undefined. Вы можете использовать обьявленную функцию в сомой же себе. Подсказка Math.random
const getRandomEmployee = (arr) => {
  function getRandomNumb(max) {
    return Math.floor(Math.random() * max);
  }

  return arr[getRandomNumb(arr.length)];
};

getRandomEmployee(emplyeeConstructArr);

//7
//Создать дескриптор со свойством fullInfo который будет записывать все свойства переданные ему в экземпляр от которого он вызывается. И выдавать все свойства, если к нему обратиться, в виде строки <Название свойства> - <значение> через запятую.

function Emploee(employee) {
  (this.id = employee.id),
    (this.name = employee.name),
    (this.surname = employee.surname),
    (this.salary = employee.salary),
    (this.workExperience = employee.workExperience),
    (this.isPrivileges = employee.isPrivileges),
    (this.gender = employee.gender);
  Object.defineProperties(this, {
    fullInfo: {
      get: function () {
        let fullinfo = "";
        for (const key in employee) {
          fullinfo += `${key} - ${this[key]}, `;
        }
        return fullinfo;
      },

      set: function (value) {
        for (const key in value) {
          if (this.hasOwnProperty(key)) {
            this[key] = value[key];
          }
        }
      },
    },
  });
}



const employeeObj = new Emploee(emplyeeArr[0]);

employeeObj.fullInfo = { name: "Вася", salary: 9000, email: "ex@mail.ua" };

console.log(employeeObj.fullInfo);
console.log(employeeObj);
