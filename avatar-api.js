class AvatarAPI {
    constructor() {
        this.config = window.GITHUB_CONFIG;
    }

    async initAvatar() {
        let avatarImg = document.getElementById('avatar-image');
        if(!avatarImg) return;

        // 强制清空默认文字、强制显示图片
        avatarImg.alt = "";
        avatarImg.style.display = "block";

        try {
            let url = window.getApiUrl("avatar");
            let res = await fetch(url);
            let list = await res.json();

            if(list.length > 0){
                let imgUrl = list[0].body.trim();
                avatarImg.src = imgUrl;
            }else{
                // 兜底本地图片
                avatarImg.src = "/img/avatar.jpg";
            }
        }catch(e){
            avatarImg.src = "/img/avatar.jpg";
        }
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    new AvatarAPI().initAvatar();
})