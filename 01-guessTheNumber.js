var num = Math.round(Math.random() * 10);
var guess = prompt('What number am I thinking of?');

if (guess == num) {
    alert('Correct!');
} else { 
    alert('Wrong!');
}