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
            createTree(structure, "0"),
    };

    return chart_config;
}

// Highlight path in tree
// Input should be chart config
function highlightPath(x, path, w) {

    var newTree = JSON.parse(JSON.stringify(x));
    newTree.nodeStructure = setGradients( newTree.nodeStructure, path, w );
    changeGradients(newTree.nodeStructure);

    return newTree;
}

// x = string to create tree
// name = id_name for node
function createTree(x, name) {

    var id_name = name;
    var new_id_name;
    var array = [];
    array = parse(x);
    var parent_name = array[0];

    array = array.slice(1, array.length);
    array = array.map((s) => s.slice(1, s.length - 1));

    if (array.length == 0) {
        return  {
                        HTMLclass: id_name,
                        text: {
                            name: parent_name
                        },
                        children: [],
                        weight: 0
                }
    }
    else {
        var children_array = [];
        for(var i = 0; i < array.length; i++) {
            new_id_name = id_name + String(i);
            children_array.push( createTree(array[i], new_id_name) );
        }

        return {
            HTMLclass: id_name,
            text: {
                name: parent_name
            },
            children: children_array,
            weight: 0
        }
    }

}

// Separate function that set total value of weight
// arr = path
// w = color gradient
// new value each node in tree has: totalWeight = total value of weight
// directly modifies weight value of tree
function setGradients(tree, arr, w) {
    if(arr.length == 0) {
        console.log(" == 0 ");
        tree.weight += w;
    }
    else {
        console.log(" != 0 ");
        console.log(arr);
        console.log(tree.children.length)
        tree.weight += w;
        if( Array.isArray(arr[0]) ) {
            for(var i = 0; i < arr[0].length; i++) {
                tree.weight -= w;
                setGradients(tree, arr[0][i], w);
            }
        }
        else{
            setGradients(tree.children[arr[0]], arr.slice(1), w);
        }
    }

    return tree;
}

// another function that uses getbyId to set the color for each node
// directly changes color of tree
function changeGradients(tree) {

    for(var i = 0; i < tree.children.length; i++) {
        changeGradients(tree.children[i]);
    }
    document.getElementsByClassName(tree.HTMLclass)[0].style.backgroundColor = `rgba(255, 0, 0, ${tree.weight})`;

}

// parsing a full path
function parse2(path) {
    path = path.replace(/\]+/g,'');
    var y = path.split(",[");

    if(y.length > 1) {
        y[y.length-1] = y[y.length-1].split(";");
        for(var j = 0; j < y[y.length-1].length; j++) { 
            y[y.length-1][j] = y[y.length-1][j].split(",");
        } 

        for(var j = 0; j < y[y.length-1].length; j++) { 
            parse3(y[y.length-1][j]);
        }
        var z = y[0].split(",");
        z.push(y[y.length-1]);

        for(var j = 0; j < z.length-1; j++) { 
            z[j] = parseInt(z[j]);
        }
        return z;
    }
    else {
        y = y[0].split(",");
        parse3(y);
        return y;
    }
}

// changing an array of strings representing a path to an array of integers 
function parse3(path) {
    for(var i = 0; i < path.length; i++) {
        path[i] = parseInt(path[i]); 
    }
    return path;
}