# GitHub Pages 双语个人主页

这是一个可直接部署到 GitHub Pages 的纯静态个人主页。它参考了学术主页常见的“个人信息侧栏 + 内容长页 + 锚点导航”结构，并加入：

- 英文为默认语言，右上角按钮可一键切换中文；
- 个人简介、招生、动态、研究方向、论文、项目、教育经历与学术服务；
- 桌面、平板和手机响应式布局；
- 不使用构建工具，不需要安装 Node.js 或任何依赖；
- 内容与样式分离，日常更新主要编辑一个文件即可。

## 一、如何在本地预览

最简单的方法是直接双击 `index.html`，浏览器即可打开。

更推荐在项目目录打开终端，运行一个本地服务器：

```bash
python -m http.server 8000
```

然后在浏览器访问：

```text
http://localhost:8000
```

修改文件并保存后，刷新浏览器即可查看效果。

## 二、如何修改主页内容

日常修改主要编辑：

```text
assets/content.js
```

文件中每段双语内容使用以下格式：

```js
title: {
  en: "English title",
  zh: "中文标题",
},
```

请同时修改 `en` 和 `zh`，这样语言切换后两种语言都能正确显示。

### 1. 修改姓名、学校、邮箱和个人链接

在 `assets/content.js` 顶部找到 `profile`：

```js
profile: {
  name: { en: "Your Name", zh: "你的姓名" },
  role: { en: "Ph.D. Candidate...", zh: "博士研究生" },
  institution: { en: "Your University", zh: "你的大学" },
  location: { en: "City, Country", zh: "城市，中国" },
  email: "yourname@example.com",
}
```

将占位内容替换成你的真实信息。

个人链接也位于 `profile.links`。例如：

```js
{ label: "GitHub", url: "https://github.com/你的用户名", icon: "github" },
```

如果暂时没有 Google Scholar 或 CV，将 `url` 保持为空字符串 `""`，该链接会自动隐藏。

### 2. 更换头像

准备一张正方形照片，建议尺寸不小于 600 × 600 像素，命名为：

```text
avatar.jpg
```

把照片复制到 `assets` 文件夹，再将 `content.js` 中的：

```js
avatar: "assets/avatar.svg",
```

改为：

```js
avatar: "assets/avatar.jpg",
```

### 3. 添加个人简历 PDF

将简历文件复制到 `assets` 文件夹，例如：

```text
assets/cv.pdf
```

然后在 `profile.links` 中找到 CV，将空链接改为：

```js
{ label: "CV", url: "assets/cv.pdf", icon: "file" },
```

### 4. 修改首页大标题与介绍

找到 `hero`，修改其中的 `title` 和 `introduction`。首页的两个按钮会分别跳转到论文区域和发送邮件。

### 5. 修改或关闭招生信息

找到 `openings`：

```js
openings: {
  enabled: true,
  // 其余内容……
}
```

- 显示招生区域：`enabled: true`
- 隐藏招生区域：`enabled: false`

可以修改 `description` 和 `tags`，说明招收的方向与学生类型。

### 6. 添加最新动态

找到 `news.items`，复制一条已有记录并修改：

```js
{
  date: "2026.08",
  en: "Your English news.",
  zh: "你的中文动态。",
},
```

建议将最新内容放在数组最上方。

### 7. 修改研究方向

找到 `research.items`。每个研究方向包含编号、标题和介绍：

```js
{
  number: "01",
  title: { en: "Visual Understanding", zh: "视觉理解" },
  description: {
    en: "English description.",
    zh: "中文介绍。",
  },
},
```

可以复制或删除整个 `{ ... }` 项。三项时视觉效果最佳，页面也支持更多项目自动换行。

### 8. 添加或修改论文

找到 `publications.items`。每篇论文格式如下：

```js
{
  year: "2026",
  badge: { en: "CVPR 2026", zh: "CVPR 2026" },
  title: "Paper title",
  authors: "<strong>Your Name</strong>, Coauthor One",
  venue: "Conference or Journal Name",
  description: {
    en: "One-sentence summary.",
    zh: "一句话论文简介。",
  },
  image: {
    src: "assets/publications/paper-name.jpg",
    alt: { en: "Paper overview", zh: "论文示意图" },
  },
  links: [
    { label: "Paper", url: "https://..." },
    { label: "Code", url: "https://github.com/..." },
  ],
},
```

用 `<strong>Your Name</strong>` 可以突出显示你的名字。没有的链接可以删除，或者将 `url` 留空。

注意：示例链接中的 `"#"` 只是占位符，正式发布前请换成真实网址或删除该链接。

论文图片必须保存在项目内，推荐统一放在：

```text
assets/publications/
```

然后将 `image.src` 填写为相对路径，例如 `assets/publications/my-paper.png`。支持 JPG、PNG、WebP 和 SVG。桌面端图片显示在该篇论文文字的右侧，手机端自动移到文字下方。

如果某篇论文暂时没有图片，将 `src` 留空：

```js
image: { src: "", alt: { en: "", zh: "" } },
```

此时页面不会显示图片区域，也不会出现缺图图标。

### 9. 修改项目、教育经历和学术服务

分别编辑：

- `projects.items`：项目或开源工具；
- `experience.items`：教育与工作经历；
- `service.items`：审稿、任教和会议组织等服务。

添加项目时复制一个完整的 `{ ... }` 对象，并注意对象之间需要有英文逗号 `,`。

## 三、如何修改颜色和页面样式

编辑：

```text
assets/style.css
```

文件最上方的 `:root` 包含主要颜色：

```css
:root {
  --navy: #17324d;   /* 主深蓝色 */
  --blue: #246b99;   /* 链接与辅助蓝色 */
  --rust: #c65f3e;   /* 强调橙红色 */
  --paper: #f7f5f0;  /* 页面背景色 */
}
```

通常只修改这几个变量，就能整体更换配色。

## 四、如何上传到 GitHub 并发布

### 方式 A：使用 `你的用户名.github.io` 仓库（推荐）

1. 登录 GitHub，新建公开仓库。
2. 仓库名称必须是：

   ```text
   你的GitHub用户名.github.io
   ```

   例如用户名为 `zhangsan`，仓库就叫 `zhangsan.github.io`。

3. 将本文件夹内的全部文件上传到仓库根目录。确保仓库打开后能直接看到 `index.html`，不要在外面再多套一层文件夹。
4. 打开仓库的 `Settings` → `Pages`。
5. 在 `Build and deployment` 中选择：
   - Source：`Deploy from a branch`
   - Branch：`main`
   - Folder：`/ (root)`
6. 点击 `Save`，等待约 1–5 分钟。
7. 访问：

   ```text
   https://你的GitHub用户名.github.io/
   ```

### 方式 B：使用 Git 命令上传

先在 GitHub 创建好同名空仓库，然后在本地项目文件夹运行：

```bash
git init
git add .
git commit -m "Create personal homepage"
git branch -M main
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
git push -u origin main
```

以后修改内容后，运行：

```bash
git add .
git commit -m "Update homepage"
git push
```

推送完成后，GitHub Pages 通常会在 1–5 分钟内自动更新。浏览器如果仍显示旧页面，可以按 `Ctrl + F5` 强制刷新。

## 五、文件结构

```text
你的用户名.github.io/
├─ index.html              # 页面骨架，通常不用修改
├─ README.md               # 本说明
└─ assets/
   ├─ content.js           # 所有中英文主页内容，主要修改此文件
   ├─ app.js               # 页面渲染与语言切换逻辑
   ├─ style.css            # 页面样式与响应式布局
   └─ avatar.svg           # 当前占位头像
```

## 六、常见问题

### 修改后网页没有更新

先确认修改已经 `git push` 到 `main` 分支，然后查看仓库的 `Actions` 页面是否部署成功。部署成功后按 `Ctrl + F5` 强制刷新。

### 页面突然空白

通常是 `assets/content.js` 中少了逗号、引号或括号。打开浏览器开发者工具（F12），查看 `Console` 中的红色错误。建议每次只修改一小部分，保存后立即刷新检查。

### 中文或英文没有同步变化

确认对应内容同时填写了 `en` 和 `zh`。语言按钮只切换显示内容，不会自动翻译新增文字。

### 想绑定自己的域名

在仓库 `Settings` → `Pages` → `Custom domain` 中填写域名，并按照 GitHub 提示配置 DNS。也可以在仓库根目录添加名为 `CNAME` 的文件，文件内容只写你的域名。
