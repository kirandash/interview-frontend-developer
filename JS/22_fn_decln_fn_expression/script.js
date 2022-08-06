(function () {
  function x() {
    /*
        Funcion declaration
        Gets hoisted
        thus can be called before in code
        Since no let or const var defined, it is present in the global scope now
        */
  }
  let y = function () {
    /*
        Function Expression
        Only the variable name x gets hoisted
        so be careful and invoke the function after in code
        Block level scope
        */
  };
})();
