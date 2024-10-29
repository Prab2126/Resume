let progress = document.querySelector(".moving-div");
let parcentage = progress.nextElementSibling;
let firstNo = document.querySelector("#firstNo");
let totalNo = firstNo.nextElementSibling;
let question = document.querySelector(".qna").children[0];
let ansBtn = document.querySelector(".showAns");
let nextBtn = ansBtn.nextElementSibling;
let previousBtn = ansBtn.previousElementSibling;

console.log(previousBtn);

let increase = 0;

function qna() {
  let arrayObj = [
    // 1.
    {
      question: "How can you check if an array includes a certain value?",
      ans: `
        Use Array.prototype.includes():
        const arr = [1, 2, 3, 4];
        arr.includes(3); // Output: true
      `,
    },

    // 2.
    {
      question: "Write a function to reverse a string.",
      ans: `
        function reverseString(str) {
          return str.split('').reverse().join('');
        }
        // Usage: reverseString('hello');
        // Output: 'olleh'
      `,
    },

    // 3.
    {
      question: "How can you convert a string to an array of characters?",
      ans: `
        const str = 'hello';
        const arr = [...str];
        // Output: ['h', 'e', 'l', 'l', 'o']
      `,
    },

    // 4.
    {
      question: "Explain the map() function with an example.",
      ans: `
        map() creates a new array populated with the results of calling a provided function on every element.
    
        Example:
        const nums = [1, 2, 3];
        const doubled = nums.map(num => num * 2);
        // Output: [2, 4, 6]
      `,
    },

    // 5.
    {
      question: "What is the difference between var, let, and const?",
      ans: `
        - var: Function-scoped, can be redeclared and updated.
        - let: Block-scoped, cannot be redeclared, can be updated.
        - const: Block-scoped, cannot be redeclared or updated (immutable).
      `,
    },

    // 6.
    {
      question: "Write a function to calculate the factorial of a number.",
      ans: `
        function factorial(n) {
          if (n <= 1) return 1;
          return n * factorial(n - 1);
        }
        // Usage: factorial(5);
        // Output: 120
      `,
    },

    // 7.
    {
      question: "What is destructuring assignment in JavaScript?",
      ans: `
        Destructuring allows unpacking values from arrays or properties from objects into distinct variables.
    
        Example:
        const person = { name: 'Alice', age: 25 };
        const { name, age } = person;
        // name = 'Alice', age = 25
      `,
    },

    // 8.
    {
      question: "How can you merge two arrays in JavaScript?",
      ans: `
        Use the spread operator:
        const arr1 = [1, 2];
        const arr2 = [3, 4];
        const merged = [...arr1, ...arr2];
        // Output: [1, 2, 3, 4]
      `,
    },

    // 9.
    {
      question: "What does Array.prototype.filter() do?",
      ans: `
        filter() creates a new array with elements that pass a specified test function.
    
        Example:
        const nums = [1, 2, 3, 4];
        const evens = nums.filter(num => num % 2 === 0);
        // Output: [2, 4]
      `,
    },

    // 10.
    {
      question:
        "Write a function to count occurrences of each element in an array.",
      ans: `
        function countOccurrences(arr) {
          return arr.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
          }, {});
        }
        // Usage: countOccurrences([1, 2, 2, 3, 3, 3]);
        // Output: {1: 1, 2: 2, 3: 3}
      `,
    },

    // 11.
    {
      question: "How can you check if an object is empty?",
      ans: `
        const isEmpty = obj => Object.keys(obj).length === 0;
        // Usage: isEmpty({});
        // Output: true
      `,
    },

    // 12.
    {
      question: "Explain how the reduce() function works.",
      ans: `
        reduce() executes a reducer function on each array element, resulting in a single output value.
    
        Example:
        const nums = [1, 2, 3, 4];
        const sum = nums.reduce((acc, curr) => acc + curr, 0);
        // Output: 10
      `,
    },

    // 13.
    {
      question: "How do you use a default parameter in a function?",
      ans: `
        function greet(name = 'Guest') {
          return 'Hello, ' + name;
        }
        // Usage: greet();
        // Output: 'Hello, Guest'
      `,
    },

    // 14.
    {
      question:
        "Write a function that finds the maximum value in an array without Math.max().",
      ans: `
        function maxInArray(arr) {
          return arr.reduce((max, val) => (val > max ? val : max), arr[0]);
        }
        // Usage: maxInArray([1, 2, 3, 4]);
        // Output: 4
      `,
    },

    // 15.
    {
      question: "How can you copy an object?",
      ans: `
        const original = { name: 'Alice' };
        const copy = { ...original };
        // copy now has the same properties as original
      `,
    },

    // 16.
    {
      question: "How do you round a number to two decimal places?",
      ans: `
        const roundToTwo = num => Math.round(num * 100) / 100;
        // Usage: roundToTwo(2.456);
        // Output: 2.46
      `,
    },

    // 17.
    {
      question: "What is the 'rest' parameter in JavaScript?",
      ans: `
        The rest parameter allows a function to accept an indefinite number of arguments as an array.
    
        Example:
        function sum(...numbers) {
          return numbers.reduce((acc, val) => acc + val, 0);
        }
        // Usage: sum(1, 2, 3);
        // Output: 6
      `,
    },

    // 18.
    {
      question: "How can you check if a variable is an array?",
      ans: `
        Use Array.isArray():
        const arr = [1, 2, 3];
        Array.isArray(arr); // Output: true
      `,
    },

    // 19.
    {
      question:
        "Write a function to capitalize the first letter of each word in a string.",
      ans: `
        function capitalizeWords(str) {
          return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }
        // Usage: capitalizeWords('hello world');
        // Output: 'Hello World'
      `,
    },

    // 20.
    {
      question: "How do you access the last element in an array?",
      ans: `
        const arr = [1, 2, 3];
        const lastElement = arr[arr.length - 1];
        // Output: 3
      `,
    },

    // 21.
    {
      question: "Explain the for...in loop and when to use it.",
      ans: `
        The for...in loop iterates over the properties of an object.
    
        Example:
        const obj = { a: 1, b: 2 };
        for (const key in obj) {
          console.log(key); // Output: 'a', 'b'
        }
      `,
    },

    // 22.
    {
      question: "What does NaN mean, and how can you check if a value is NaN?",
      ans: `
        NaN stands for 'Not-a-Number', and it’s a result of an undefined or unrepresentable mathematical operation.
    
        Use Number.isNaN():
        Number.isNaN(NaN); // Output: true
      `,
    },

    // 23.
    {
      question: "How can you convert a number to a string?",
      ans: `
        const num = 123;
        const str = num.toString();
        // Output: '123'
      `,
    },

    // 24.
    {
      question:
        "Write a function to generate a random integer between two values.",
      ans: `
        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Usage: getRandomInt(1, 10);
      `,
    },

    // 25.
    {
      question: "How can you remove the first element of an array?",
      ans: `
        const arr = [1, 2, 3];
        arr.shift();
        // arr is now [2, 3]
      `,
    },

    // 26.
    {
      question:
        "Write a function to find the length of the longest word in a sentence.",
      ans: `
        function longestWordLength(sentence) {
          return Math.max(...sentence.split(' ').map(word => word.length));
        }
        // Usage: longestWordLength('hello world');
        // Output: 5
      `,
    },

    // 27.
    {
      question: "How can you find the index of a value in an array?",
      ans: `
        const arr = [1, 2, 3];
        arr.indexOf(2); // Output: 1
      `,
    },

    // 28.
    {
      question: "What is the difference between slice and splice?",
      ans: `
        - slice: Returns a shallow copy of a portion of an array.
        - splice: Changes the content of an array by removing or replacing elements.
      `,
    },

    // 29.
    {
      question: "How can you loop through an array?",
      ans: `
        Use forEach():
        const arr = [1, 2, 3];
        arr.forEach(item => console.log(item));
      `,
    },

    // 30.
    {
      question: "Explain the use of template literals.",
      ans: `
        Template literals allow embedding expressions and multi-line strings.
    
        Example:
        const name = 'Alice';
        console.log(\`Hello, \${name}\`);
        // Output: 'Hello, Alice'
      `,
    },
  ];

  return arrayObj;
}
let Arraylength = qna();

totalNo.innerHTML = Arraylength.length - 1;

function trueFun(e, boolean) {
  if (boolean) {
    e.target.disabled = false;
    e.target.style.cursor = "pointer";
  } else {
    e.disabled = false;
    e.style.cursor = "pointer";
  }
}

function flaseFun(e, boolean) {
  if (boolean) {
    e.target.disabled = true;
    e.target.style.cursor = "not-allowed";
  } else {
    e.disabled = true;
    e.style.cursor = "not-allowed";
  }
}
let animation = 0;
function calculate(params = 0, boolean) {
  let ArraylengthValue = Arraylength.length - 1;
  let ValueInPercent = parseInt((params / ArraylengthValue) * 100);
  progress.style.width = ValueInPercent + "%";

  if (boolean) {
    let out = setInterval(() => {
      let adding = animation--;
      if (adding >= ValueInPercent) {
        parcentage.innerHTML = adding + "%";
      } else {
        clearInterval(out);
      }
    }, 150);
  } else {
    let out = setInterval(() => {
      let adding = animation++;
      if (adding <= ValueInPercent) {
        parcentage.innerHTML = adding + "%";
      } else {
        clearInterval(out);
      }
    }, 150);
  }
}

function ansShow(index) {
  let ansBtnCheck = true;
  ansBtn.addEventListener("click", (e) => {
    if (ansBtnCheck) {
      ansBtnCheck = false;
      e.target.innerText = "Hide Answer";

      let value = qna();
      question.innerHTML = `<pre class="repalceh1">${value[index]?.["ans"]}</pre>`;
    } else {
      ansBtnCheck = true;
      e.target.innerText = "Show Answer";
      let value = qna();
      question.innerHTML = `<h1>${value[index]?.["question"]}</h1>`;
    }
  });
}

ansShow(0);
nextBtn.addEventListener("click", (e) => {
  let plus = increase++;
  plus < Arraylength.length - 2 ? trueFun(e, true) : flaseFun(e, true);
  plus >= 0 ? trueFun(previousBtn) : flaseFun(previousBtn);
  calculate(plus + 1);
  firstNo.innerHTML = plus + 1;
  let value = qna();
  ansShow(plus + 1);
  question.innerHTML = `<h1>${value[plus + 1]?.["question"]}</h1>`;
});

previousBtn.addEventListener("click", (e) => {
  let negative = increase--;
  negative <= Arraylength.length - 1 ? trueFun(nextBtn) : flaseFun(nextBtn);
  negative > 1 ? trueFun(e, true) : flaseFun(e, true);
  calculate(negative - 1, true);
  let value = qna();
  ansShow(negative - 1);
  question.innerHTML = `<h1>${value[negative - 1]?.["question"]}</h1>`;
  firstNo.innerHTML = negative - 1;
});
