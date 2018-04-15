"use strict";

/**
 * Jaziel Lopez <juan.jaziel@gmail.com>
 * https://jlopez.mx
 * Destructuring function parameters

 * @type {number}
 */

let el = 1, foo =2, woo = ['name', 'age', 'country'];


let protor = function({el = 'defaultEl', foo =  'defaultFoo', woo= []} = {}) {

    const [name, age, other] = woo;

    const greet = function (){ console.log('hello world'); };

    return {


        doGreet: function(){

            // let iterateFn = new Function('greet');
            // iterateFn();

            let n = Function;

            n.bind(this, 'greet');

            n();

            // console.log(Function.apply(this, 'greet')());
            //
            // (function(fn){
            //
            //     console.log(Function.apply(fn));
            //
            // })('greet()');
        }
    };

};

let test = new protor();

test.doGreet();

