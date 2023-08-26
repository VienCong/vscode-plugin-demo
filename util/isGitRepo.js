const fs = require("fs");

// 检查目录是否是Git仓库根目录的函数
function isGitRepo(directory) {
  const gitDirPath = `${directory}/.git`;
  try {
    // 使用fs.accessSync来检查.git目录是否存在
    fs.accessSync(gitDirPath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = { isGitRepo };
