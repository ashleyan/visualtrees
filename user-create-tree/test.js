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

    var array = []
    array = parse(x);

    // 3. draw node
    // [below is the recursive portion of function]
    // 1. call createTree(x) on every the child in the list
    // 2. keep repeating until full tree is created (a.k.a. #3 is reached which is when the function returns no child)

    if (array[0] == "") {
        return  {
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
                }
    }
    else {
        return array.map(createTree);
    }
}








function mFunction(x) {
    var structure = "(() ())";
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
        nodeStructure: { // plug in createTree function here
            createTree(structure);
            /*text: {
                name: "Mark Hill",
                title: "Chief executive officer",
                contact: "Tel: 01 213 123 134",
            },
            children: [
                {
                    text:{
                        name: x, // this should change depending on user input
                        title: "Chief Technology Officer",
                    },
                    stackChildren: true,
                    children: [
                        {
                            text:{
                                name: "Ron Blomquist",
                                title: "Chief Information Security Officer"
                            },
                        },
                        {
                            text:{
                                name: "Michael Rubin",
                                title: "Chief Innovation Officer",
                                contact: "we@aregreat.com"
                            },
                        }
                    ]
                },
                {
                    stackChildren: true,
                    text:{
                        name: "Linda May",
                        title: "Chief Business Officer",
                    },
                    children: [
                        {
                            text:{
                                name: "Alice Lopez",
                                title: "Chief Communications Officer"
                            },
                        },
                        {
                            text:{
                                name: "Mary Johnson",
                                title: "Chief Brand Officer"
                            },
                        },
                        {
                            text:{
                                name: "Kirk Douglas",
                                title: "Chief Business Development Officer"
                            },
                        }
                    ]
                },
                {
                    text:{
                        name: "John Green",
                        title: "Chief accounting officer",
                        contact: "Tel: 01 213 123 134",
                    },
                    children: [
                        {
                            text:{
                                name: "Erica Reel",
                                title: "Chief Customer Officer"
                            },
                            link: {
                                href: "http://www.google.com"
                            },
                        }
                    ]
                }
            ]*/
        }
    };

    return chart_config;
}


