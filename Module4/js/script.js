<<<<<<< HEAD
function handleClick(callback) {
    alert('This button has been clicked');
    if (callback) {
        callback();
    }
}

function doMore() {
    alert('I could process more logic here');
}

function doSomethingElse() {
    document.writeln('Test Message');
}
=======
// script for intro.html
// function startLogic() {
//     var newHtml = '<em>New Header</em>';
//     document.getElementById('headerItem').innerHTML = newHtml;
    
// }

// startLogic();

// function clickHandler() {
//     alert('You clicked me!');
// }

//script for types.html 
//var $elem = document.getElementById('output');
//$elem.innerHTML += 'Test'
//$elem.innerHTML += 4 + 6; 
//$elem.innerHTML += 'Demo ' + 4 + 6;
//$elem.innerHTML += 'Demo ' + (4 + 6);

var testVariable = null;
var isUndefined = (testVariable === undefined);
var isNull = (testVariable === null);
var isEmpty = (testVariable === '');

document.getElementById('isUndefined').innerHTML = isUndefined;
document.getElementById('isNull').innerHTML = isNull;
document.getElementById('isEmpty').innerHTML = isEmpty;
>>>>>>> 47e9f4440f11c0c2c3c44376462ad0bec2154312
