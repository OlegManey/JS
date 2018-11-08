var a,
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function input_a () {
    a = prompt('Введите число от 1 до 15');
    if (a !== null && (a < 1 || a > 15 || isNaN(a))) {
        input_a();
    }
}
input_a();
switch(a) {
    case 1:
        alert(arr);
        break;
    case 15:
        alert(a);
        break;
    nul:
        break;
    default:
        alert(arr.slice(a-1));
}