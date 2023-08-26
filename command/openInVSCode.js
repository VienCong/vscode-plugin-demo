const vscode = require("vscode");
const { execSync } = require("child_process");

const activeOpenInVSCodeCommand = (context) => {
  let disposable = vscode.commands.registerCommand(
    "openInVSCode",
    async (resourceUri) => {
      const folderPath = resourceUri.fsPath;
      execSync(`code ${folderPath}`);
    }
  );
  context.subscriptions.push(disposable);
};

module.exports = { activeOpenInVSCodeCommand };
