// 稳定版头像API，自动识别 Issue 里的纯图片链接，带缓存，不报错
class AvatarAPI {
    constructor() {
        this.config = window.GITHUB_CONFIG || {
            owner: 'BangAnA',
            repo: 'BangAnA.github.io',
            apiUrl: 'https://api.github.com/repos',
            labels: { avatar: 'avatar' }
        };
        this.avatarLabel = this.config.labels.avatar || 'avatar';
        this.avatarCacheKey = 'github_avatar_url';
        this.cacheExpiryKey = 'github_avatar_cache_expiry';
        this.cacheDuration = 24 * 60 * 60 * 1000;
    }

    async initAvatar() {
        const avatarImg = document.getElementById('avatar-image');
        if (!avatarImg) return;

        const cached = this.getCachedAvatar();
        if (cached) {
            avatarImg.src = cached;
            avatarImg.style.display = 'block';
            return;
        }

        try {
            const apiUrl = window.getApiUrl ? window.getApiUrl(this.avatarLabel) : `${this.config.apiUrl}/${this.config.owner}/${this.config.repo}/issues?labels=${this.avatarLabel}`;
            const res = await fetch(apiUrl, {
                headers: { 'Accept': 'application/vnd.github.v3+json', 'User-Agent': 'Personal-Homepage' }
            });

            if (!res.ok) throw new Error('API 请求失败');
            const issues = await res.json();

            if (issues.length === 0) {
                this.setDefaultAvatar(avatarImg);
                return;
            }

            const body = issues[0].body.trim();
            let url = '';

            // 自动识别：纯链接 或 <img>
            if (body.startsWith('http')) {
                url = body;
            } else {
                const match = body.match(/src=["']([^"']+)["']/i);
                url = match ? match[1] : '';
            }

            if (!url) {
                this.setDefaultAvatar(avatarImg);
                return;
            }

            avatarImg.src = url;
            avatarImg.style.display = 'block';
            this.cacheAvatar(url);

        } catch (err) {
            console.error(err);
            this.setDefaultAvatar(avatarImg);
        }
    }

    getCachedAvatar() {
        const u = localStorage.getItem(this.avatarCacheKey);
        const e = localStorage.getItem(this.cacheExpiryKey);
        if (u && e && Date.now() < parseInt(e)) return u;
        localStorage.removeItem(this.avatarCacheKey);
        localStorage.removeItem(this.cacheExpiryKey);
        return null;
    }

    cacheAvatar(url) {
        localStorage.setItem(this.avatarCacheKey, url);
        localStorage.setItem(this.cacheExpiryKey, (Date.now() + this.cacheDuration).toString());
    }

    setDefaultAvatar(img) {
        img.src = 'https://avatars.githubusercontent.com/u/1000000?v=4';
        img.style.display = 'block';
    }

    clearCache() {
        localStorage.removeItem(this.avatarCacheKey);
        localStorage.removeItem(this.cacheExpiryKey);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AvatarAPI().initAvatar();
});