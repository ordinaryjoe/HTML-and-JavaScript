function correctMethodName() {  
    return "Output Message";
}

//var result = correctMethodName(3);
//var result = wrongMethodName(3);
//document.writeln(result);

try {
    var result = wrongMethodName(3);
    document.writeln(result);
}
catch (error) {
    //document.writeln('An error occurred');
    document.writeln('<h3>Error:&nbsp;</h3><p>' + error + "</p>");
}