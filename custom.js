// custom.js
//--------------------------------------------------------------------------------
// Display line numbers in code cell by default
//--------------------------------------------------------------------------------

var cell = Jupyter.notebook.get_selected_cell();
var config = cell.config;
var patch = {
  CodeCell:{
    cm_config:{lineNumbers:true}
  }
}
config.update(patch)
