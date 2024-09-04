class Factorial {
  getNthFactorialRecursive(n: number): number {
    return n <= 1 ? 1 : n * this.getNthFactorialRecursive(n - 1);
  }

  getNthFactorialIterative(n: number): number {
    let result: number = 1;

    for (let i = 2; i <= n; i++) {
      result *= i;
    }

    return result;
  }
}

const factorial: Factorial = new Factorial();
console.log(factorial.getNthFactorialIterative(37));
console.log(factorial.getNthFactorialRecursive(37));
