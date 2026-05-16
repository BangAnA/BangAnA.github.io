// 最终稳定版头像加载 - 直接读取 Issue 纯链接
class AvatarAPI {
    constructor() {
        this.config = window.GITHUB_CONFIG || {
            owner: 'BangAnA',
            repo: 'BangAnA.github.io',
            apiUrl: 'https://api.github.com/repos',
            labels: { avatar: 'avatar' }
        };
        this.avatarLabel = this.config.labels.avatar || 'avatar';
    }

    async initAvatar() {
        const avatarImg = document.getElementById('avatar-image');
        if (!avatarImg) return;

        try {
            // 获取头像 Issue
            const apiUrl = window.getApiUrl('avatar');
            const response = await fetch(apiUrl);
            const issues = await response.json();

            if (issues.length === 0) {
                this.setDefault(avatarImg);
                return;
            }

            // 直接取 Issue 里的纯链接
            const avatarUrl = issues[0].body.trim();

            // 设置头像
            avatarImg.src = avatarUrl;
            avatarImg.style.display = "block";
            console.log("✅ 头像加载成功:", avatarUrl);

        } catch (error) {
            console.error("❌ 头像加载失败:", error);
            this.setDefault(avatarImg);
        }
    }

    setDefault(img) {
        img.src = "https://avatars.githubusercontent.com/u/257074591";
        img.style.display = "block";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AvatarAPI().initAvatar();
});