

export const postData = [
    {
      id: 1,
      "title": "Understanding JavaScript Scope",
      "content": "JavaScript scope is an essential concept that defines the accessibility of variables, functions, and objects in various parts of your code. Scope determines where variables can be accessed or modified. JavaScript has two types of scope: global scope and local scope. Variables declared outside any function are in the global scope, and those declared within a function are in local scope. Understanding scope is crucial for writing predictable and bug-free code.",
      "imgUrl": "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80",
      "videoUrl": "o5_u_1N_Ziw&t=13s",
      "code": "```javascript\n// Global Scope\nlet globalVariable = 'I am global';\n\nfunction exampleFunction() {\n    // Local Scope\n    let localVariable = 'I am local';\n    console.log(globalVariable); // Accessible\n    console.log(localVariable); // Accessible\n}\n\nconsole.log(globalVariable); // Accessible\nconsole.log(localVariable); // Uncaught ReferenceError: localVariable is not defined\n```",
      "status": "published",
      "summary":"",
      "categoryId": 1,
      "createdBy": "osamuyi ero",
      "question": "Which of the following statements about JavaScript scope is correct?",
      options: [
        {
          id: 1,
          option: "A variable declared within a function is accessible globally.",
          "isCorrect": false
        },
        {
          id: 2,
          "option": "A variable declared outside any function is in the global scope.",
          "isCorrect": true
        },
        {
          id: 3,
          "option": "JavaScript does not have local scope.",
          "isCorrect": false
        }
      ]
    },
    {
      id: 2,
      "title": "Understanding Variables in JavaScript",
      "summary": "This article explains the different types of variables in JavaScript, including `var`, `let`, and `const`. It covers their scope, behavior, and best practices for using them effectively in your code.",
  
      "content": "Variables in JavaScript are fundamental building blocks used to store and manipulate data. A variable is essentially a container that holds a value, which can be of different types such as numbers, strings, or objects. In JavaScript, variables can be declared using `var`, `let`, or `const`, each with different scopes and use cases.\n\n- `var` is function-scoped and allows redeclaration, which can sometimes lead to unexpected behavior. It is hoisted to the top of its scope.\n- `let` is block-scoped and does not allow redeclaration, making it safer for use within loops and conditionals.\n- `const` is also block-scoped but is used for variables whose values should not change after they are assigned.\n\nIt's important to choose the correct type of variable declaration to ensure your code behaves as expected and to avoid common pitfalls like hoisting issues or unintended redeclarations.",
      "imgUrl": "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80",
      "videoUrl": "aROOcPx54Do",
      "code": "```javascript\n// Variable declarations\nvar x = 5;\nlet y = 'Hello';\nconst z = true;\n\n// Block scope example\nif (true) {\n  let y = 'Hi';\n  console.log(y); // Output: 'Hi'\n}\n\nconsole.log(y); // Output: 'Hello'\n```",
      "status": "published",
      "categoryId": 1,
      "createdBy": "osamuyi ero",
      "question": "Which of the following statements is true about `const` in JavaScript?",
      "options": [
        {
          id: 1,
          "option": "`const` allows you to reassign values to the variable.",
          "isCorrect": false
        },
        {
          id: 2,
          "option": "`const` is block-scoped and its value cannot be reassigned.",
          "isCorrect": true
        },
        {
          id: 3,
          "option": "`const` can only be used for string values.",
          "isCorrect": false
        }
      ]
    }
  
  ]
  