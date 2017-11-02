// Parsing function that takes in a string
// x can only be a single parent -> ex: "()" and "(()())" are allowed (one parent) but ()()" is not allowed (two parents)
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

// Take in string to create tree
function createTree(x) {

    var array = []
    array = parse(x);
    var parent_name = array[0];

    array = array.slice(1, array.length);
    array = array.map((s) => s.slice(1, s.length - 1));

    if (array.length == 0) {
        return  {
                        HTMLclass: 'default',
                        text: {
                            name: parent_name
                        },
                        children: []
                }
    }
    else {
        var children_array = array.map(createTree);
        return {
            HTMLclass: 'default',
            text: {
                name: parent_name
            },
            children: children_array
        }
    }

}


// Takes in array of integers specifying the path, then changes the color of those nodes
function changePathColor(x, arr) {

    if(arr.length == 0) {
        x.HTMLclass = 'new';
    }
    else{
        x.HTMLclass = 'new';
        changePathColor(x.children[arr[0]], arr.slice(1));
    }

    return x;

}

// Display tree
function displayTree(x) {

    var structure = x;
    var chart_config = {
        chart: {
            container: "#basic-example",
            
            connectors: {
                type: 'step'
            }
        },
        nodeStructure:
            createTree(structure),
    };

    return chart_config;
}

// Highlight path in tree
function highlightPath(x) {

    var structure = x;
    var chart_config = {
        chart: {
            container: "#basic-example",
            
            connectors: {
                type: 'step'
            }
        },
        nodeStructure:
            changePathColor( createTree(structure), [2,1,0] ),
    };

    return chart_config;
}