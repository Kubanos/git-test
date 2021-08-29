//WYPISYWANIE
alert('komunikat');
document.write('text');
console.log('informacja w konsoli');
// ZMIENNE
var v1 = 1;
let v2 = 1.0;
let v3 = '1';
let v4 = null;
let v5 = false;
document.write('<p>wartość: ', v1, ' typ: ', typeof(v1), '</p>');
document.write('<p>wartość: ', v2, ' typ: ', typeof(v2), '</p>');
document.write('<p>wartość: ', v3, ' typ: ', typeof(v3), '</p>');
document.write('<p>wartość: ', v4, ' typ: ', typeof(v4), '</p>');
document.write('<p>wartość: ', v5, ' typ: ', typeof(v5), '</p>');
// OKNA DIALOGOWE
alert('Uwaga! Uwaga!');
let choice = confirm('Zaakceptuj regulamin naszej strony strony?');
if(choice){
    document.write("<p>Super, więc pracujemy dalej!</p>");
}
else{
        window.location.replace("http://google.com");
}
let name = prompt('Podaj imię:');
let bYear = parseInt(prompt('Twój rok urodzenia:'));
let cDate = new Date();
let age = cDate.getFullYear() - bYear;
document.write('<p class="display-6">Witaj <u>', name, '</u>! Twój wiek: ', age,'</p>');
if(age >= 18){
    document.write('<p>Jesteś pełnoletni/a</p>');
}
else{
    document.write('<p>Nie jesteś pełnoletni/a</p>');
}