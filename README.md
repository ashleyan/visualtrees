# Visual Trees

Research Project at Columbia University under the Computational Biology Department. Focus is on creating trees that visually represent code.

## Project Folder Descriptions
* user-update-tree: user inputs data, and that data gets added to tree once button is pushed
  * user inputs text, and a specific node's text will be replaced with that text

* user-create-tree: user inputs data, and that data determines how the new tree will look
  * textual-input: user inputs structure represented by parentheses, and that inputs determines the new tree structure
  * code-input: user inputs function call, and the new tree structure created displays the function call, including nested calls (each child is a nested call)

* server-client-tree: user inputs text to a CLI, and the result is displayed as a tree
  * user writes code in textbox
  * client send this user's code to server
  * server uses command line to create nicer format for code that can be used to create trees: ./prob-seq -i _ --stb-output _
  * server sends the result of the command line to client
  * client uses that result to create tree

## Other Important Information
* prob-seq: allows for use of ../prob-seq -i _ --stb-output _
