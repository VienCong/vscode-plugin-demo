const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// export function activate(context: vscode.ExtensionContext) {
//   let disposable = vscode.commands.registerCommand('extension.getFolderAbsolutePath', (resourceUri: vscode.Uri) => {
//     if (!resourceUri) {
//       vscode.window.showErrorMessage('未能获取右击的文件夹信息。');
//       return;
//     }

//     const folderPath = path.dirname(resourceUri.fsPath);
//     vscode.window.showInformationMessage(`文件夹的绝对位置：${folderPath}`);
//   });

//   context.subscriptions.push(disposable);
// }

function activate(context) {
  console.log("插件已经被激活");
  let disposable = vscode.commands.registerCommand(
    "getFileState",
    (resourceUri) => {
      // const editor = vscode.window.activeTextEditor;
      // if (!editor) {
      //   vscode.window.showErrorMessage("没有打开的文本编辑器。");
      //   return;
      // }

      // const currentFileUri = editor.document.uri;
      // if (currentFileUri.scheme !== "file") {
      //   vscode.window.showErrorMessage("只能在文件系统中使用此功能。");
      //   return;
      // }

      const folderPath = resourceUri.fsPath;
      vscode.window.showInformationMessage(`文件夹的绝对位置：${folderPath}`);
      execSync(`sh code ${folderPath}`);
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
