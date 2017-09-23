// call on each part of array
// parse string once for each node

// function calls parsing string method within it
// call recursively
// x = "(())"   ()(()()) 
// f(x)
// then call f(x) again on each array element
// base case = f("")

// helpful: [a, b, c].map(f) = [f(a), f(b), f(c)]
// when finished, plug into test.js
///////////////////////////////////////////////////////////////////////////////

// x can only be a single parent
// ex: "()" is allowed (one parent) 
// ex: ()()" is not allowed (two parents)
// ex: "(()())" is allowed (one parent)
function parse(x) {
    
    // array of children
    var array = [];

    // if no children, create array with empty string
    if(x == "()"){
        array.push("");
        return array;
    }
    
    // start from first parenthesis of all children
    var index1 = 1;
    var index2 = 2;
    // check until last parenthesis of all children
    while(index2 < x.length){
        // when the child has more of its own children
        if(x[index1] == x[index2]) {
            var right = 0;
            var left = 0;
            if (x[index1] == "(") {
                left+=1;
            }
            if (x[index1] == ")") {
                right+=1;
            }
            // create correct child
            while(right != left) {
                if(x[index2] == "(") {
                    left+=1;
                    index2+=1;
                }
                if(x[index2] == ")") {
                    right+=1;
                    index2+=1;
                }
            }
            // add to array of children
            array.push(x.substring(index1,index2));
            // start again to add next child to array
            index1 = index2;
            index2+=1;
        }
        else{
            // when the child has none of its own children
            array.push(x.substring(index1,index2+1));
            index1 = index2 + 1;
            index2 = index1 + 1;
        }
    }

    return array;

}

console.log(parse(process.argv[2])); // test on command line

/*
function createTree(x) {

	node = parse(x);


	if (node == "") {
		return	{
			            text: {
			                ""
			            },
			            children: [
			                {
			                    text:{
			                        ""
			                    },
			                    stackChildren: true,
			                },
			            ]
				}
	}

	if (node == "()") {
		return 	{
			            text: {
			                "()"
			            },
			            children: [
			                {
			                    text:{
			                        "()"
			                    },
			                    stackChildren: true,
			                },
			            ]
				}
	}

	return createTree(node);

}
*/