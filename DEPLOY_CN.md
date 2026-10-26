# 将 Jiarun Fu 学术个人主页发布为独立网站

推荐访问地址：**https://jiarunfu.github.io/**

## GitHub Pages 发布步骤

1. 登录 GitHub 账户 `JiarunFu`，打开 https://github.com/new 。
2. **另建一个公开仓库**，仓库名准确填写 `jiarunfu.github.io`（推荐用全小写）。这个仓库和已有的 `JiarunFu/JiarunFu` 个人资料 README 仓库不同，不要删除原有仓库。
3. 进入新仓库，使用 **Add file → Upload files**，上传 `index.html`、`styles.css`、`script.js`、`.nojekyll`、`README.md` 和 `assets` 文件夹里的两个文件。确保 `index.html` 位于仓库根目录，图片路径保持 `assets/portrait.jpg`。
4. 点击 **Commit changes**。之后进入仓库 **Settings → Pages**。
5. 在 **Build and deployment → Source** 选择 **Deploy from a branch**。分支选 `main`，文件夹选 `/(root)`，点击 **Save**。
6. 当 GitHub Pages 部署完成后，在 https://jiarunfu.github.io/ 查看个人网页。初次部署可能需要几分钟。

## 已有仓库也可以用吗？

可以。若把网站文件添加到原有 `JiarunFu/JiarunFu` 仓库并开启 Pages，通常是项目网页，地址为 `https://jiarunfu.github.io/JiarunFu/`；建议使用独立的 `jiarunfu.github.io` 仓库，以取得简洁的根域名首页。

## 如何修改

- **修改文字/论文**：打开 `index.html` 找到对应内容，编辑、提交即可。
- **更换照片**：上传新照片替换 `assets/portrait.jpg`，保持文件名不变。
- **修改外观**：编辑 `styles.css`。
- **不需要**购买域名、服务器，或安装 Node.js。

说明：README 学术资料基于此前确认的内容制作，正式发表论文与公开预印本分开列出。
