// contains parse(x) method and createTree(x) method

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

// console.log(parse(process.argv[2])); // test on command line









// helpful: [a, b, c].map(f) = [f(a), f(b), f(c)]
// when finished, plug into test.js

// createTree(x)
// 1. take in x (which is a string)
// 2. call parse(x) on x
// 3. draw node
// 4. return no child if the array that contains the children for the parent is empty
// [below is the recursive portion of function]
// 1. call createTree(x) on every the child in the list
// 2. keep repeating until full tree is created (a.k.a. #3 is reached which is when the function returns no child)
function createTree(x) {

	var array = parse(x);

    // 3. draw node
    // [below is the recursive portion of function]
    // 1. call createTree(x) on every the child in the list
    // 2. keep repeating until full tree is created (a.k.a. #3 is reached which is when the function returns no child)

    for(var i = 0; i < array.length; i++) {
        if (array[0] == "") {
            return "node!"/*{
                            text: {
                                "hi"
                            },
                            children: [
                                {
                                    text:{
                                        "hi"
                                    },
                                    stackChildren: true,
                                },
                            ]
                    }*/
        }
    }
    return array.map(createTree);
}

console.log(createTree(process.argv[2])); // test on command line
