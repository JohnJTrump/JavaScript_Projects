function my_dictionary() {  //Key value pairs
    var Tree = {
        type: "deciduous",
        height: "green",
        leaf_color: "yello",
        leaf_color: "green", //added a duplicate - out put was the color green - im assuming because its the latest in the document
        age: 100,
    };
delete Tree.leaf_color; //this deleted the value leaf_color
document.getElementById("dictionary").innerHTML = Tree.leaf_color; // dont forget to add your key here... Tree is the key for this dictionary
} 