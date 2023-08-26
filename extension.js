const { activeGetFileGitBranchCommand } = require("./command/getFileGitBranch");
const { activeOpenInVSCodeCommand } = require("./command/openInVScode");

function activate(context) {
  activeGetFileGitBranchCommand(context);
  activeOpenInVSCodeCommand(context);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
