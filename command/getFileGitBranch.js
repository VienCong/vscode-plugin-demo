const vscode = require("vscode");
const { execSync } = require("child_process");
const { isGitRepo } = require("../util/isGitRepo.js");

const activeGetFileGitBranchCommand = (context) => {
  let disposable = vscode.commands.registerCommand(
    "getFileGitBranch",
    async (resourceUri) => {
      const folderPath = resourceUri.fsPath;
      if (!isGitRepo(folderPath)) {
        vscode.window.showInformationMessage(`不是仓库根目录：${folderPath}`);
        return;
      }
      const branchName = execSync("git branch --show-current", {
        cwd: folderPath,
      });
      vscode.window
        .showInformationMessage(
          `当前分支：${branchName}`,
          {
            modal: true,
          },
          "Open In VSCode"
        )
        .then((answer) => {
          if (answer === "Open In VSCode") {
            execSync(`code ${folderPath}`);
          }
        });
    }
  );
  context.subscriptions.push(disposable);
};

module.exports = { activeGetFileGitBranchCommand };
