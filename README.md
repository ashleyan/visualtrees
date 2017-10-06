# Visual Trees

Research Project at Columbia University under the Computational Biology Department. Focus is on creating trees that visually represent code.

## Project Folder Descriptions
* user-update-tree: user inputs data, and that data gets added to tree once button is pushed
  * user inputs text, and a specific node's text will be replaced with that text

* user-create-tree: user inputs data, and that data determines how the new tree will look
  * textual-input: user inputs structure represented by parentheses, and that inputs determines the new tree structure
  * code-input: user inputs function call, and the new tree structure created displays the function call, including nested calls (each child is a nested call)

* server-client-tree: user inputs text to a CLI, and the result is displayed as a tree
  * client can connect to server and send messages
  * goal: display an interaction with command line interface (CLI)
  * goal: input the text to a CLI, display the result as a tree
