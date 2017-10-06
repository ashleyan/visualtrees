// Tree structure as a function of textual input (parentheses)

// x can only be a single parent
// ex: "()" is allowed (one parent) 
// ex: ()()" is not allowed (two parents)
// ex: "(()())" is allowed (one parent)
function parse(x) {
    
    // array of children
    var array = [];

    // if no children, create array with empty string
    var j = 0;
    for(var i = 0; i < x.length; i++) {
        if(x[i].indexOf("(") == -1) {
            j++;
        }
        if(x[i] == "("){
            break;
        }
    }
    
    if(x.indexOf("(") > -1) {
        array.push(x.substring(0,j).trim());
    }
    else {
        array.push(x);
        return array;
    }
    
    // start from first parenthesis of all children
    var index1 = j;
    var index2 = j + 1;
    // check until last parenthesis of all children
    while(index2 < x.length){
        var right = 0;
        var left = 0;
        if (x[index1] == "(") {
            left+=1;
        }
        if (x[index1] == ")") {
            right+=1;
        }
        // create correct child
        while(right != left && index2 < x.length) {
            if(x[index2] == "(") {
                left+=1;
            }
            if(x[index2] == ")") {
                right+=1;
            }
            index2+=1;
        }
        // add to array of children
        array.push(x.substring(index1,index2));
        // start again to add next child to array
        index1 = index2;
        index2+=1;
    }

    return array.filter((s) => s != " ");

}

// console.log(parse(process.argv[2])); // for testing

// createTree(x)
// 1. take in x (which is a string)
// 2. call parse(x) on x
// 3. draw node
// 4. return no child if the array that contains the children for the parent is empty
// [below is the recursive portion of function]
// 1. call createTree(x) on every the child in the list
// 2. keep repeating until full tree is created (a.k.a. #3 is reached which is when the function returns no child)
function createTree(x) {

    var array = []
    array = parse(x);
    var parentx = array[0];

    // 3. draw node
    // [below is the recursive portion of function]
    // 1. call createTree(x) on every the child in the list
    // 2. keep repeating until full tree is created (a.k.a. #3 is reached which is when the function returns no child)

    array = array.slice(1, array.length);
    array = array.map((s) => s.slice(1, s.length - 1));
    console.log(array);

    if (array == []) {
        return  {
                        text: {
                            name: parentx
                        },
                        children: []
                }
    }
    else {
        var y = array.map(createTree);
        return {
            text: {
                name: parentx
            },
            children: y
        }
    }

}

// console.log(createTree(process.argv[2])); // for testing

function mFunction(x) {
    var structure = x;
    var chart_config = {
        chart: {
            container: "#basic-example",
            
            connectors: {
                type: 'step'
            },
            node: {
                HTMLclass: 'nodeExample1'
            }
        },
        nodeStructure:
            createTree(structure),
    };

    return chart_config;
}


