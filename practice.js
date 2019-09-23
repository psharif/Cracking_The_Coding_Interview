var f = function(a){
  console.log(a);
}

f(2);

f('foo');
setTimeout(function(){f('bar'), 0});
f("baz");
