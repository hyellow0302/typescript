/* string */
let carA: string = "bmw";
let carB = "bmw"; // 타입 추론

/* number */
let ageA: number = 30;
let ageB = 30;

/* boolean */
let isAdult: boolean = true;

/* array */
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];
// let a:number[] = [1,2,"string?"];

let week1: string[] = ["mon", "tue", "wed"];
let week2: Array<string> = ["mon", "tue", "wed"];

/* tuple */
let b: [string, number];
b = ["z", 1];
// b = [1,"z"]

/* void: 함수에서 보통 아무것도 반환하지 않을 때 사용 */
function sayHello(): void {
  console.log("hello");
}

/* never: 항상 에러를 반환하거나 영원히 끝나지 않는 함수의 타입으로 사용 */
function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    // do something..
  }
}

/* enum: 비슷한 값들끼리 묶음 */
enum Os {
  Window = 3,
  Ios = 10,
  Android,
}

console.log(Os[10]);

let myOs: Os;
myOs = Os.Window;

/* null, undefined */
let c: null = null;
let d: undefined = undefined;
