console.log('hey guys');

if (console.everything === undefined)
{
    const names = [];

    console.defaultError = console.error.bind(console);
    console.error = function(){
        names.push({"type":"error", "datetime":Date().toLocaleString(), "value":Array.from(arguments)});
        console.defaultError.apply(console, arguments);
    }

    names.push('1');

    console
}