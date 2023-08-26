const { activeGetFileGitBranchCommand } = require("./command/getFileGitBranch");
const { activeOpenInVSCode } = require("./command/openInVScode");

function activate(context) {
  activeGetFileGitBranchCommand(context);
  activeOpenInVSCode(context);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
