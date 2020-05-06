// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라.

// ver1
var x = 15;

if (10 < x && x < 20) {
  console.log(x);
}

// ver2
var x = 15;

if (10 < x && x < 20) console.log(x);


// 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

// ver1
for (even = 0; even < 10; even = even + 1) {
  if (even % 2 === 0) {
    console.log(even);
  }
}

// ver2
for (even = 0; even < 10; even += 1) {
  if (even % 2 === 0) {
    console.log(even);
  }
}

// ver3
for (even = 0; even < 10; even++) {
  if (!(even % 2)) console.log(even);
}


// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

// ver1
var string = '';

for (i = 0; i < 10; i = i + 1) {
  if (i % 2 === 0) {
    string = string + i;
  }
}

console.log(string);

// ver2
var string = '';

for (i = 0; i < 10; i += 1) {
  if (i % 2 === 0) {
    string += i;
  }
}

console.log(string);

// ver3
var string = '';

for (i = 0; i < 10; i++) {
  if (!(i % 2)) string += i;
}

console.log(string);


// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰 수부터 출력하시오.

// ver1
for (var odd = 10; odd > 0; odd = odd - 1) {
  if (odd % 2) {
    console.log(odd);
  }
}

// ver2
for (var odd = 10; odd > 0; odd -= 1) {
  if (odd % 2) {
    console.log(odd);
  }
}

// ver3
for (var odd = 10; odd > 0; odd --) {
  if (odd % 2) console.log(odd);
}


// 5. while문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

// ver1
var even = 0;

while (even < 10) {
  if (even % 2 === 0) {
    console.log(even);
  }
  even = even + 1;
}

// ver2
var even = 0;

while (even < 10) {
  if (even % 2 === 0) {
    console.log(even);
  }
  even += 1;
}

// ver3
var even = 0;

while (even < 10) {
  if (!(even % 2)) console.log(even);
  even += 1;
}


// 6. while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

// ver1
var odd = 10;

while (odd > 0) {
  if (odd % 2) {
    console.log(odd);
  }
  odd = odd - 1;
}

// ver2
var odd = 10;

while (odd > 0) {
  if (odd % 2) console.log(odd);
  odd -= 1;
}


// 7. for문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.

// ver1
var sum = 0;

for (var i = 0; i < 10; i = i + 1) {
  sum = sum + i;
}

console.log(sum);

// ver2
var sum = 0;

for (var i = 0; i < 10; i += 1) {
  sum += i;
}

console.log(sum);


// 8. 1부터 20미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.

// ver1
var sum = 0;

for (var i = 0; i < 20; i = i + 1) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    sum = sum + i;
  }
}

console.log(sum);

// ver2
var sum = 0;

for (var i = 0; i < 20; i += 1) {
  if (i % 2 && i % 3) {
    sum += i;
  }
}

console.log(sum);

// ver3
var sum = 0;
var i = 0;

while (i < 20) {
  if (i % 2 && i % 3) sum += i;
  i++;
}

console.log(sum);


// 9. 1부터 20미만의 정수 중에서 2 또는 3의 배수인 수의 총 합을 구하시오.

// ver1
var sum = 0;

for (var i = 0; i < 20; i = i + 1) {
  if (i % 2 === 0 || i % 3 === 0) {
    sum = sum + i;
  }
}

console.log(sum);

// ver2
var sum = 0;

for (var i = 0; i < 20; i += 1) {
  if (i % 2 === 0 || i % 3 === 0) {
    sum = sum + i;
  }
}

console.log(sum);

// ver3
var sum = 0;
var i = 0;

while (i < 20) {
  if (!(i % 2) || !(i % 3)) sum += i;
  i++;
}

console.log(sum);


// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

// ver1
for (var dice1 = 1; dice1 <= 6; dice1 = dice1 + 1) {
  for (var dice2 = 1; dice2 <= 6; dice2 = dice2 + 1) {
    if (dice1 + dice2 === 6) {
      console.log(dice1, dice2);
    }
  }
}

// ver2
for (var dice1 = 1; dice1 <= 6; dice1 += 1) {
  for (var dice2 = 1; dice2 <= 6; dice2 += 1) {
    if (dice1 + dice2 === 6) {
      console.log(dice1, dice2);
    }
  }
}

// ver3
for (var dice1 = 1; dice1 <= 6; dice1++) {
  for (var dice2 = 1; dice2 <= 6; dice2++) {
    if (dice1 + dice2 === 6) console.log(dice1, dice2);
  }
}


// 11. 삼각형 출력하기 - pattern1

// ver1
var line = 5;
var star = '';

for (var creatLine = 1; creatLine <= line; creatLine = creatLine + 1) {
  for (var creatStar = 1; creatStar <= creatLine; creatStar = creatStar + 1) {
    star = star + '*';
  }
  star = star + '\n';
}

console.log(star);

// ver2
var line = 5;
var star = '';

for (var creatLine = 1; creatLine <= line; creatLine += 1) {
  for (var creatStar = 1; creatStar <= creatLine; creatStar += 1) {
    star += '*';
  }
  star += '\n';
}

console.log(star);

// ver3
var line = 5;
var star = '';

for (var creatLine = 1; creatLine <= line; creatLine++) {
  for (var creatStar = 1; creatStar <= creatLine; creatStar++) {
    star += '*';
  }
  star += '\n';
}

console.log(star);


// 12. 삼각형 출력하기 - pattern2

// ver1
var line = 5;
var star = '';

for (var creatLine = 1; creatLine <= line; creatLine = creatLine + 1) {
  for (var creatStar = 1; creatStar <= line; creatStar = creatStar + 1) {
    if (creatLine <= creatStar) {
      star = star + '*';
    } else {
      star = star + ' ';
    }
  }
  star = star + '\n';
}

console.log(star);

// ver2
var line = 5;
var star = '';

for (var creatLine = 1; creatLine <= line; creatLine += 1) {
  for (var creatStar = 1; creatStar <= line; creatStar += 1) {
    if (creatLine <= creatStar) {
      star += '*';
    } else {
      star += ' ';
    }
  }
  star += '\n';
}

console.log(star);

// ver3
var line = 5;
var star = '';

for (var creatLine = 1; creatLine <= line; creatLine++) {
  for (var creatStar = 1; creatStar <= line; creatStar++) {
    if (creatLine <= creatStar) star += '*';
    else star += ' ';
  }
  star += '\n';
}

console.log(star);


// 13. 삼각형 출력하기 - pattern3

// ver1
var line = 5;
var star = '';

for (var creatLine = line; creatLine >= 1; creatLine = creatLine - 1) {
  for (var creatStar = 0; creatStar < creatLine; creatStar = creatStar + 1) {
    star = star + '*';
  }
  star = star + '\n';
}

console.log(star);

// ver2
var line = 5;
var star = '';

for (var creatLine = line; creatLine >= 1; creatLine -= 1) {
  for (var creatStar = 0; creatStar < creatLine; creatStar += 1) {
    star += '*';
  }
  star += '\n';
}

console.log(star);

// ver3
var line = 5;
var star = '';

for (var creatLine = line; creatLine >= 1; creatLine--) {
  for (var creatStar = 0; creatStar < creatLine; creatStar++) {
    star += '*';
  }
  star += '\n';
}

console.log(star);


// 14. 삼각형 출력하기 - pattern4

// ver1
var line = 5;
var star = '';

for (var creatLine = line; creatLine >= 1; creatLine = creatLine - 1) {
  for (var creatStar = 0; creatStar <= line; creatStar = creatStar + 1) {
    if (creatLine <= creatStar) {
      star = star + '*';
    } else {
      star = star + ' ';
    }
  }
  star = star + '\n';
}

console.log(star);

// ver2
var line = 5;
var star = '';

for (var creatLine = line; creatLine >= 1; creatLine -= 1) {
  for (var creatStar = 0; creatStar <= line; creatStar += 1) {
    if (creatLine <= creatStar) {
      star += '*';
    } else {
      star += ' ';
    }
  }
  star += '\n';
}

console.log(star);

// ver3
var line = 5;
var star = '';

for (var creatLine = line; creatLine >= 1; creatLine--) {
  for (var creatStar = 0; creatStar <= line; creatStar++) {
    if (creatLine <= creatStar) star += '*';
    else star += ' ';
  }
  star += '\n';
}

console.log(star);


// 15. 정삼각형 출력하기

// ver1
var line = 5;
var star = '';

for (var creatLine = 1; creatLine <= line; creatLine = creatLine + 1) {
  for (var creatStar = 1; creatStar <= (line * 2) - 1; creatStar = creatStar + 1) {
    if ((line - creatLine) >= creatStar) {
      star = star + ' ';
    } else if ((line + creatLine) <= creatStar) {
      star = star + ' ';
    } else {
      star = star + '*';
    }
  }
  star = star + '\n';
}

console.log(star);

// ver2
var line = 5;
var star = '';

for (var creatLine = 1; creatLine <= line; creatLine += 1) {
  for (var creatStar = 1; creatStar <= (line * 2) - 1; creatStar += 1) {
    if ((line - creatLine) >= creatStar) {
      star += ' ';
    } else if ((line + creatLine) <= creatStar) {
      star += ' ';
    } else {
      star += '*';
    }
  }
  star += '\n';
}

console.log(star);

// ver3
var line = 5;
var star = '';

for (var creatLine = 1; creatLine <= line; creatLine++) {
  for (var creatStar = 1; creatStar <= (line * 2) - 1; creatStar++) {
    if ((line - creatLine) >= creatStar) star += ' ';
    else if ((line + creatLine) <= creatStar) star += ' ';
    else star += '*';
  }
  star += '\n';
}

console.log(star);

// ver4
var line = 5;
var star = '';

for (var creatLine = 1; creatLine <= line; creatLine++) {
  for (var creatStar = 1; creatStar <= (line * 2) - 1; creatStar++) {
    if ((line - creatLine) >= creatStar || (line + creatLine) <= creatStar) star += ' ';
    else star += '*';
  }
  star += '\n';
}

console.log(star);


// 16. 역삼각형 출력하기

// ver1
var line = 5;
var star = '';

for (var creatLine = line; creatLine >= 1; creatLine = creatLine - 1) {
  for (var creatStar = 1; creatStar <= (line * 2) - 1; creatStar = creatStar + 1) {
    if ((line - creatLine) >= creatStar) {
      star = star + ' ';
    } else if ((line + creatLine) <= creatStar) {
      star = star + ' ';
    } else {
      star = star + '*';
    }
  }
  star = star + '\n';
}

console.log(star);

// ver2
var line = 5;
var star = '';

for (var creatLine = line; creatLine >= 1; creatLine -= 1) {
  for (var creatStar = 1; creatStar <= (line * 2) - 1; creatStar += 1) {
    if ((line - creatLine) >= creatStar) {
      star += ' ';
    } else if ((line + creatLine) <= creatStar) {
      star += ' ';
    } else {
      star += '*';
    }
  }
  star += '\n';
}

console.log(star);

// ver3
var line = 5;
var star = '';

for (var creatLine = line; creatLine >= 1; creatLine--) {
  for (var creatStar = 1; creatStar <= (line * 2) - 1; creatStar++) {
    if ((line - creatLine) >= creatStar) star += ' ';
    else if ((line + creatLine) <= creatStar) star += ' ';
    else star += '*';
  }
  star += '\n';
}

console.log(star);

// ver4
var line = 5;
var star = '';

for (var creatLine = line; creatLine >= 1; creatLine--) {
  for (var creatStar = 1; creatStar <= (line * 2) - 1; creatStar++) {
    if ((line - creatLine) >= creatStar || (line + creatLine) <= creatStar) star += ' ';
    else star += '*';
  }
  star += '\n';
}

console.log(star);