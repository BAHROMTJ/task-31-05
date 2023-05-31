// Task1
function noOdds(arr) {
	return arr.filter(a=>a%2==0)
}


// Task2
function multiplyByLength(arr) {
	return arr.map(a=>a*arr.length)
}


// Task3
function removeNull(arr) {
	return arr.filter(a=>a!=null)
}

// Task4
function hurdleJump(hurdles, jumpHeight) {
	return hurdles.every(a=>a<=jumpHeight)
}


// Task5
function findSmallestNum(arr) {
	return Math.min(...arr)
}


// Task6
function firstLast(arr) {
	let arrnew=[]
	 arrnew.push(arr.shift(),arr.pop())
	return arrnew
}

// Task7
function getFillings(sandwich) {
	sandwich.shift()
		sandwich.pop()
	return sandwich
}


// Task8
function diffMaxMin(arr) {
	let arr1=[Math.max(...arr),Math.min(...arr)]
	return arr1[0]-arr1[1]
}



// Task9
function countdown(start) {
	let arr1=[]
	for (let i=start;i>=0;i--){arr1.push(i)}
	return arr1
}


// Task10
// Fix this incorrect code!
function checkAllEven(arr) {
	return arr.every(x=>x % 2 === 0)
  }



  // Task11
  function convertCartesian(x, y) {
	let arr=[]
 return x.map((a,i)=>[a,y[i]])
}


// Task12

function convertCartesian(x, y) {
	let arr1=[]
  x.map((a,i)=>arr1.push([a,y[i]]))
				return arr1
}



// Task13
function additiveInverse(arr) {
	return arr.map(a=>-a)
}



// Task14
function nthSmallest(arr, n) {
	arr.sort()
	   return arr[n-1]==null?null:arr[n-1]
   }



// Task15
   function transform(arr) {
	return arr.map(a=>a%2==0?a-1:a+1)	
	}



	// Task16
	function getDiscounts(nums, d) {
		return nums.map(a=>a*d.split("%").join("")/100)
	}



// Task17
	function getDiscounts(nums, d) {
		return nums.map(a=>a*parseFloat(d)/100)
	}



	// Task18
	function filterStateNames(arr, type) {
		return arr.filter(a=>type=="abb"?a.length<3:a.length>=3)
	}



	// Task19
	function isOmnipresent(arr, val) {
		return arr.every(a=>a.includes(val))
	}


	// Task20
	function toArray(num) {
		return num.toString().split("").map(a=>parseInt(a))
	}
	
	function toNumber(arr) {
		return +arr.join("")
	}



	// Task21

	function dropRight(arr, num = 1) {
		return num==0?arr.slice(0):arr.slice(0,-num)
	}



// Task22
	function isSubset(arr1, arr2) {
		return arr1.every((a,i)=>arr2.includes(a))
	}


	// Task23
	function sliceSum(arr, n) {
		return n==0?0:arr.slice(0,n).reduce((a,b)=>a+b)
	}



	// Task24
	function countOnes(matrix) {
		return matrix.flat(Infinity).reduce((a,b)=>b==1?a+1:a,0)
	}



// Task25
	function chatroomStatus(users) {
		let s=users.length
			switch (true) {
				case s==0:
		   return "no one online";
					break;
		  case users.length==1:
		  return`${users[0]} online`;
			break;
		case users.length==2:
		  return`${users[0]} and ${users[1]} online`;
			break;
					
				case users.length>2:
		  return`${users[0]}, ${users[1]} and ${users.length-2} more online`;
			break;	
		}
		}