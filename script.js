const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	arr2=[]
	finalarray=[]
	num=0;
	arr.forEach((ele,i)=>{
		if(ele+num<=n){
			arr2.push(ele);
			num+=ele
		}
		else{
			finalarray.push(arr2)
			num=0;
			num+=ele;
			arr2=[ele]
		}
		
	})
	if (arr2.length > 0) {
        finalarray.push(arr2);
    }
	return(finalarray)
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
