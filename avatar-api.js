// 万能版头像加载，100%显示
class AvatarAPI {
    constructor() {
        this.config = window.GITHUB_CONFIG;
    }

    async initAvatar() {
        const img = document.getElementById('avatar-image');
        if (!img) return;

        try {
            // 1. 去 GitHub 拿 avatar 标签的 Issue
            const apiUrl = window.getApiUrl('avatar');
            const res = await fetch(apiUrl);
            const issues = await res.json();

            if (issues.length === 0) {
                this.setDefault(img);
                return;
            }

            // 2. 从 Issue 里提取任意 URL
            const body = issues[0].body;
            const url = body.trim();

            // 3. 直接设置头像
            img.src = url;
            img.style.display = 'block';
            console.log('✅ 头像已加载:', url);
        } catch (e) {
            console.error(e);
            this.setDefault(img);
        }
    }

    setDefault(img) {
        img.src = 'https://avatars.githubusercontent.com/u/123456';
        img.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AvatarAPI().initAvatar();
});