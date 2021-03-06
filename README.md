# Visual Trees

Research Project at Columbia University under the Computational Biology Department. Focus is on creating trees that visually represent user-inputed code. The code is inputed as text, then is displayed as a visual tree. Different paths can be highlighted based on weights assigned according to probability, and samplings can be done on the current input. The webpage overall describes the different functions that users can utilize. This user-inputed code is currently specific to my research mentor's code, which is written in Haskall.

## Project Folder Descriptions
* gradient-tree: highlighting paths based on assigned weights
  * now each box has directions above it specifiying what to enter

* highlight-tree: specific paths in tree can be highlighted
  * user can enter a list of paths, and then choose to highlight one of those paths
  * increment/decrement buttons allow user to switch between different paths to highlight
  
* server-client-tree: user inputs text to a CLI, and the result is displayed as a tree
  * user writes code in textbox
  * client send this user's code to server
  * server uses command line to create nicer format for code that can be used to create trees: ../prob-seq -i _ --stb-output _
  * server sends the result of the command line to client
  * client uses that result to create tree

* user-create-tree: user inputs data, and that data determines how the new tree will look
  * textual-input: user inputs structure represented by parentheses, and that inputs determines the new tree structure
  * code-input: user inputs function call, and the new tree structure created displays the function call, including nested calls (each child is a nested call)
  
* user-update-tree: user inputs data, and that data gets added to tree once button is pushed
  * user inputs text, and a specific node's text will be replaced with that text
