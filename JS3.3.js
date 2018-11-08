var a = +prompt( 'Введите число a' );
    b = +prompt( 'Введите число b' );
if ( isNaN(a) || isNaN(b) ) {
    alert( 'Необходимо ввести числа!' );
}
else if ( a >= 0 && b >= 0 ) {
    alert( a - b );
}
else if ( a < 0 && b < 0) {
    alert( a * b );
}
else {
    alert( a + b );
}