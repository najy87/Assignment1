var createCounter = function(init) {
    let c =init;
    return{
        increment : ()=> ++c ,
        decrement : ()=> c,
        reset : ()=> (c=init)
    }
};

