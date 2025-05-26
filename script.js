const taskDescriptions = {
    btn1: "Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше чем второе, 1 — если первое больше чем второе и 0 — если числа равны.",
    btn2: "Написать функцию, которая вычисляет факториал переданного ей числа.",
    btn3: "Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.",
    btn4: "Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.",
    btn5: "Написать функцию, которая проверяет является ли переданное ей число совер­шенным. Совершенное число — это число, равное сумме всех своих собственных делителей.",
};

window.addEventListener("DOMContentLoaded", () => {
    for (const [id, description] of Object.entries(taskDescriptions)) {
        const button = document.getElementById(id);
        if (button) {
            button.title = description;
        }
    }
});

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("mouseenter", () => {
        let el = document.getElementById("result");
        el.innerHTML = "";
        el.textContent = "";
    });
});

//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше чем второе, 1 — если первое больше чем второе и 0 — если числа равны.
function task1() {
    const f = (a, b) => {
        if (a === b) return 0;
        return a < b ? -1 : 1;
    };
    let first = parseInt(Math.random() * 10, 10);
    let second = parseInt(Math.random() * 10, 10);
    let result = f(first, second);
    const res = document.getElementById("result");
    res.textContent = first + ", " + second + " = " + result;
}

// Написать функцию, которая вычисляет факториал переданного ей числа.
function task2() {
    let num = parseInt(Math.random() * 10 + 1, 10);
    const f = (a) => {
        let result = 1;
        for (let i = a; i > 1; i--) result *= i;
        return result;
    };

    const f1 = (n) => (n <= 1 ? 1 : n * f1(n - 1));

    const el = document.getElementById("result");

    el.textContent = num + "! = " + f1(num);
}

function task3() {
    // Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
    // Например: цифры 1, 4, 9 превратятся в число 149.
    let num1 = parseInt(Math.random() * 9 + 1, 10);
    let num2 = parseInt(Math.random() * 10, 10);
    let num3 = parseInt(Math.random() * 10, 10);
    const f = (a, b, c) => parseInt(`${a}${b}${c}`);
    const el = document.getElementById("result");
    el.textContent =
        num1 + " + " + num2 + " + " + num3 + " = " + f(num1, num2, num3).toString();
}

function task4() {
    // Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
    // Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
    let num1 = parseInt(Math.random() * 10 + 1, 10);
    let num2 = parseInt(Math.random() * 10, 10);

    const f = (a, b = 0) =>
        b === 0
            ? `S квадрата со стороной ${a} = ` + a * a
            : `S прямоугольника со сторонами ${a}; ${b} = ` + a * b;
    const el = document.getElementById("result");
    el.textContent = f(num1, num2);
}

const getDivisors = (a) => {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            divisors.push(i);
            if (i !== a / i && i !== 1) divisors.push(a / i);
        }
    }
    return divisors.filter((d) => d !== a);
};

const getSum = (arr) => {
    let ret = 0;
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            ret += arr[i];
        }
    }
    return ret;
};

function task5() {
    // Написать функцию, которая проверяет является ли переданное ей число совершенным.
    // Совершенное число — это число, равное сумме всех своих собственных делителей.
    let num = parseInt(Math.random() * 100 + 1);
    //alert(num);

    let divisorArr = getDivisors(num);
    let sum = getSum(divisorArr);
    const el = document.getElementById("result");
    //alert(divisorArr.toString());
    el.textContent = `число: ${num} ${
        num === sum ? "совершенное" : "не является совершенным"
    } делители: ${divisorArr.join("+")} = сумма ${sum}`;
}