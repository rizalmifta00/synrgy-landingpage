// 1. Array : [ 2, 5, 10, saya, 29, 99, 38 ]
// Array : [ 100, 3, 66, 20, 'abjad' ]
// jika panjang array a + array b < 50,
// looping array with the condition,
// print the array if the index modulo = 0
// print the array of sum array a + array b
// print the array of string in array a + array b
// else print boolean

// 2. Array : [ 3, 100, 283, 'saya', 'adalah', 'kapiten', 75 ]
// Array : [ 200, 300, 21, 'dari', indonesia ]
// jika array b + array b bukan 32,
// looping array with the condition
// print the array of string
// prtin the array of modulo = 1
// print the array of sum array a + array b
// else print boolean

// 3. Array: [ 29, 12, 30, 'ini', 'saya', 85 ]
// Array: [ 'cyber', 'security', 20, 15, 21]
// jika ( panjang array ) + a = 28,
// looping array with the condition
// print the array of string
// print the array of sum array a + array b
// print the array of modulo = 0
// else print boolean

// 4. Array: [ 20, 12, 43, 54, 24 ]
// Array: [ 'saya', 'adalah', 'seorang', 'pemusik', 0, 201]
// jika panjang array + 1 != 35,
// looping array with the condition
// print the array if the index modulo = 1
// print the array of string
// else print boolean

// 5. Array: [ 20, 'empat', 'limat', 8, 29, 30 ]
// Array: [ 19, 'tujuh', 'sepuluh', 11, 23, 40 ]
// jika x + ( panjang array ) bukan 35,
// looping array with the condition
// print the array of sum array a + array b
// print the array of modulo = 0
// else print boolean

// 6. Array: [ 'data', 'empat', 8 , 3, 100, 8, 100, 3  ]
// Array: [ 9, 7, 24, 'data', 'lima', 25]
// jika array a + array b + u bukan 25,
// looping array with the condition
// print the array of sum array a + array b
// print the array if the index modulo = 1
// else print boolean

let array1 = [2, 5, 10, "saya", 29, 99, 38];
let array2 = [100, 3, 66, 20, "abjad"];
let array3 = [3, 100, 283, "saya", "adalah", "kapiten", 75];
let array4 = [200, 300, 21, "dari", "indonesia"];
let array5 = [29, 12, 30, "ini", "saya", 85];
let array6 = ["cyber", "security", 20, 15, 21];
let array7 = [20, 12, 43, 54, 24];
let array8 = ["saya", "adalah", "seorang", "pemusik", 0, 201];
let array9 = [20, "empat", "limat", 8, 29, 30];
let array10 = [19, "tujuh", "sepuluh", 11, 23, 40];
let array11 = ["data", "empat", 8, 3, 100, 8, 100, 3];
let array12 = [9, 7, 24, "data", "lima", 25];

let a = 22;
let x = 50;
let u = 50;
let number = 1;

class Quiz {
    constructor(arrayA, arrayB) {
        this.arrayA = arrayA;
        this.arrayB = arrayB;
        this.array = arrayA.concat(arrayB);
        this.isNumber = 0;
        this.isString = [];
    }

    methodQuiz1() {
        if (this.array.length < 50) {
            for (let i = 0; i < this.array.length; i++) {
                if (this.array.length % i == 0) {
                    console.log(this.array[i]);
                }
                if (typeof this.array[i] == "number") {
                    this.isNumber += this.array[i];
                }
                if (typeof this.array[i] == "string") {
                    this.isString.push(this.array[i]);
                }
            }
            console.log(this.isNumber);
            console.log(this.isString);
        } else {
            console.log(false);
        }
    }

    methodQuiz2() {
        if (this.arrayB.length + this.arrayB.length != 32) {
            for (let i = 0; i < this.array.length; i++) {
                if (typeof this.array[i] == "string") {
                    this.isString.push(this.array[i]);
                }
                if (this.array.length % i == 1) {
                    console.log(this.array[i]);
                }
                if (typeof this.array[i] == "number") {
                    this.isNumber += this.array[i];
                }
            }
            console.log(this.isNumber);
            console.log(this.isString);
        } else {
            console.log(false);
        }
    }

    methodQuiz3(a) {
        if (this.array.length + a == 28) {
            for (let i = 0; i < this.array.length; i++) {
                if (typeof this.array[i] == "string") {
                    this.isString.push(this.array[i]);
                }
                if (typeof this.array[i] == "number") {
                    this.isNumber += this.array[i];
                }
                if (this.array.length % i == 0) {
                    console.log(this.array[i]);
                }
            }
            console.log(this.isNumber);
            console.log(this.isString);
        } else {
            console.log(false);
        }
    }

    methodQuiz4(number) {
        if (this.array.length + number != 35) {
            for (let i = 0; i < this.array.length; i++) {
                if (this.array.length % i == 1) {
                    console.log(this.array[i]);
                }
                if (typeof this.array[i] == "string") {
                    this.isString.push(this.array[i]);
                }
            }
            console.log(this.isString);
        } else {
            console.log(false);
        }
    }

    methodQuiz5(x) {
        if (x + this.array.length != 35) {
            for (let i = 0; i < this.array.length; i++) {
                if (typeof this.array[i] == "number") {
                    this.isNumber += this.array[i];
                }
                if (this.array.length % i == 0) {
                    console.log(this.array[i]);
                }
            }
            console.log(this.isNumber);
        } else {
            console.log(false);
        }
    }

    methodQuiz6(u) {
        if (this.array.length + u != 25) {
            for (let i = 0; i < this.array.length; i++) {
                if (typeof this.dataArray[i] == "number") {
                    this.isNumber += this.array[i];
                }
                if (this.array.length % i == 1) {
                    console.log(this.array[i]);
                }
            }
            console.log(this.isNumber);
        } else {
            console.log(false);
        }
    }
}

// 1
let soal1 = new Quiz(array1, array2);
soal1.methodQuiz1();

// 2
let soal2 = new Quiz(array3, array4);
soal2.methodQuiz2();

// 3
let soal3 = new Quiz(array5, array6);
soal3.methodQuiz3(a);

// 4
let soal4 = new Quiz(array7, array8);
soal4.methodQuiz4(number);

// 5
let soal5 = new Quiz(array9, array10);
soal5.methodQuiz5(x);

// 6
let soal6 = new Quiz(array11, array12);
soal6.methodQuiz6(u);