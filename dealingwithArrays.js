var myArray = ["cat","dog","dragon"]

  var arr = [[1,2,3,4,5,6,7],['The','quick','brown','fox','jumped','over','the lazy dog' ] ,[true,false,true]

  function emptyArray(){
  	return arri =[]
  }

  function numbersArray(){
  	return numbersArray = [1,2,3,4,5]
  }

  function booleansArray(){
  	return booleansArray=[true,true,true]
  }

  function stringsArray(){
  	return stringsArray=["nidhal","BHS"]
  }

  function arrayLength(array){
  	return array.length
  }

  function firstElement(array){
  	return array[0]
  }

  function lastElement(array){
  	return array[array.length-1];
  }

  function getNthElement(array, number){
  	return array[number];
  }

  function push(array, element){
  	return  array.push(element)
  }

  function pop(array){
  	return array.pop();
  }

  function unshift(array, element){
  	return array.unshift(element);
  }

  function shift(array){
  	return array.shift();
  }

  function reassignLast(array, element){
  	return array[array.length-1]=element;
  }

  function reassignNthElement(array, index, element){
  	return array[index]=element;
  }

  function indexOf(array, element){
  	return array.indexOf(element);
  }

  function addElement(array, index, element){
  	return array.splice(index,0,element);
  }

  function removeElement(array, index, element){
  	return array.splice(index,1,element);
  }

  function concatArrays(array, array){
  	return array.concat(array);
  }

  function concatThreeArrays(array,array,array){
  	return array.concat(array,array);
  }

   var arry = [1,2,3,4,5,6,7,8,9];

   function arrayFor(array){
   	for(var i = 0; i<array.length;i++){
   		console.log(array[i]);
   	}
   }

   function arrayWhile(array){
   	var i =0;
   	while(i<array.length){
   		console.log(array[i]);
   		i++
   	}
   }

   function sum(array){
   	var result =0;
   	for( var i = 0; i< array.length;i++){
   		 result=result+array[i];
   	}
   	return result;
   }
    function sumEveryOther(array){
    	var result =0;
    	for(var i =0; i<array.length;i=i+2){
    		result=result+array[i];
    	}
    	return result;
    }

    function sumStartAt(array,index){
    	var result =0;
    	for(var i = index; i<array.length;i++){
    		result=result+array[i]
    	}
    	return result;

    }

    function sumUntil(array,index){
    	var result = 0;
    	for(var i = 0; i<=index;i++){
    		result=result+array[i]
    	}
    	return result;
    }
    function subtractReverse(array){
    	var result =0;
    	for(var i =array[array.length-1];i<array.length;i++){

    	}
    }

     function subtractReverse(array){
    	var result =array[array.length-1];
    	for(var i = array.length-2 ; i>=0 ;i--){
    		result=result-array[i]
    	}
    	return result;
    }

    function product(array){
    	var result = 1;
    	for(var i = 0;i<array.length;i++){
    		result = result * array[i]
    	}
    	return result;
    }

    function average(array){
    	var result =0;
    	for(var i = 0;i<array.length;i++){
    		result =(result+array[i])/array.length
    	}
    	return result;
    }

    function square(array){
    	var arr=[];

    	for(var i = 0;i<array.length;i++){
    		arr.push(array[i]**2)
    	}
    	return arr;
    }
    function isArray(array){
    	return Array.isArray(array);
    }
   
    function shortestString(array){
    	var short = array[0].length;
    	for(var i = 0;i<array.length;i++){
    		if(short>array[i].length){
    			short=array[i].length;
    		}
    	}
    	return short;
    }

    function longestString(array){
    	var long=array[0].length;
    	for(var i = 0; i<array.length; i++){
    		if(long<array[i].length){
    			long=array[i].length;
    		}

    	}
    	return long;
    }

    function min(array){
    	var minn =array[0];
    	for(var i=0;i<array.length;i++){
    		if(minn>array[i]){
    	    minn=array[i];
    		}
    	}
    	return minn;
    }
    function max(array){
    	var maxx = array[0];
    	for(var i=0;i<array.length;i++){
    		if(maxx<array[i]){
    			maxx=array[i];

    		}
    	}
    	return maxx;
    }

    function shortestLongest(array){
    	var arro = [];
    	var shlo = array[0];
    	for(var i =0;i<array.length;i++){
    		if(shlo>array[i]&&shlo<array[i]){
    			shlo=array[i];
    			arro.push(shlo);
    		}

    	}
    	return arro;
    }