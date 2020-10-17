module.exports = function toReadable (number) {
    let numbers = [["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"], 
    ["0", "1", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
    ["0", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"], 
    ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]];
    let s = "";
    number = String(number);
    number = number.split("");
    let length = number.length;
    let num;
    if (length == 1) {
      num = number[0];
      return numbers[0][num];
    }
    if (length == 2) {
      if (number[0] == 1) {
          num = number[1];
          return numbers[3][num];
      }
      num = number[0];
      s += numbers[1][num];
      num = number[1];
      if (num == 0)
          return s;
      else {
          s += " " + numbers[0][num]
      }
    }
    if (length == 3) {
        num = number[1];
        if (num == 1) {
            num = number[2];
            s += numbers[3][num];
            num = number[0];
            s = numbers[2][num] + " " + s;
            return s;
        }
        if (num == 0) {
            num = number[0];
            s += numbers[2][num];
            num = number[2];
            if (num != 0)
              s = s + " " + numbers[0][num];
            return s;
        }
        num = number[0];
        s += numbers[2][num];
        num = number[1];
        s = s + " " + numbers[1][num];
        num = number[2];
        if (num != 0)
          s = s + " " + numbers[0][num];
    }
    /*number = String(number);
    let length = number.length;
    let s = "";
    let num;
    for (let i = 0; i < length; i++) {
      num = number % 10;
      number = number / 10;
      number = Math.trunc(number);
      if (length == 1) {
          s = numbers[0][num];
          return s;
      }
      else if (length == 2 && number == 1) {
          s = numbers[3][num];
          return s;
      }
      else if (num != 0) s = " " + numbers[i][num] + s;
    }
    s = s.slice(1, s.length);*/
    return s;
  }