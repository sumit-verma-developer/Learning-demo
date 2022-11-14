import React from 'react';
import {View, Text} from 'react-native';

const ExactLoaction = () => {
  

//A Pure Function is a (a block of code) always returns the same result if the same arguments are passed.
// It does not depend on any state or data change during a program’s execution. 
// it only depends on its input arguments.

  var array = [1, 2, 3, 4, 5],
    sum = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    sum = array.push[i];
    p *= array[i];
    }
console.log('Sum : '+sum+ ' Product :  ' +p); 







// This code was pasted by ProgrammerRimon, 2022-02-18
// Find dublicates numbers from array;

const a = [1,1,1,3,3,4,5,5,6,7,8,8,8,8,8,9,2];

function findDublicatesNumbersFromArray(a) {
    var d = [];
    for (let i = 0; i < a.length; i++) {
        var ct = a[i];
        var cmt = 0;
        for(var x = 0; x<a.length;++x) {
            if(ct === a[x]) {
                cmt++
                if(cmt > 1) {
                    d.push(a[i])
                }
            }
        }
    }
    return d.filter((i, ix)=> d.indexOf(i) === ix);
}

console.log(findDublicatesNumbersFromArray(a)) 



  return (
    <View>
      <Text>fhdshg</Text>
    </View>
  );
};

export default ExactLoaction;
