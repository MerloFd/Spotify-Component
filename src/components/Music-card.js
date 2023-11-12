    class Musiccard extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    
    build (){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","music-card");

            const listLeft = document.createElement("div");
            listLeft.setAttribute("class","list-left");

                const mIcon = document.createElement("img");
                mIcon.setAttribute("class","m-icon");
                mIcon.src="./assets/images/1.png";
                mIcon.alt= "music icon";
                const musicPhoto = document.createElement("img");
                musicPhoto.setAttribute("class","music-photo");
                musicPhoto.src= this.getAttribute("photo") || "./assets/images/defaultphoto.png";
                musicPhoto.alt= "music photo";

                const autorMusic = document.createElement("div");
                autorMusic.setAttribute("class","autor-music columns");

                    const musicName = document.createElement("span");
                    musicName.setAttribute("class","name-music");
                    musicName.textContent = this.getAttribute("nome") || "Music";
                    const autorName = document.createElement("span");
                    autorName.textContent = this.getAttribute("autor") || "Autor";

                listLeft.appendChild(mIcon);
                listLeft.appendChild(musicPhoto);
                listLeft.appendChild(autorMusic);
                    autorMusic.appendChild(musicName);
                    autorMusic.appendChild(autorName);

            const listCenter = document.createElement("div");
            listCenter.setAttribute("class","list-center");
            
                const album = document.createElement("span");
                album.setAttribute("class","album mhover-album");
                album.textContent = this.getAttribute("album") || "Album";
            
                listCenter.appendChild(album);

            const listRight = document.createElement("div");
            listRight.setAttribute("class", "list-right");

                const heartIcon = document.createElement("img");
                heartIcon.setAttribute("class","heart");
                heartIcon.src = "./assets/images/4.png";
                heartIcon.alt = "heart icon";
                const timeMusic = document.createElement("span");
                timeMusic.setAttribute("class","timer mhover-timer");
                timeMusic.textContent = "00:00";
                const moreOp = document.createElement("img");
                moreOp.setAttribute("class","more");
                moreOp.src="./assets/images/3.png";
                moreOp.alt="more options icon";

                listRight.appendChild(heartIcon);
                listRight.appendChild(timeMusic);
                listRight.appendChild(moreOp);

        componentRoot.appendChild(listLeft);
        componentRoot.appendChild(listCenter);
        componentRoot.appendChild(listRight);

        return componentRoot;
    }

    styles (){
        const style = document.createElement("style");
        style.textContent =`
        *{
            font-family: "Helvetica", "Arial", sans-serif;
            color: white;
        }
        .music-card{
            background-color: rgb(0, 0, 0);

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            
            margin-top: 12px;
            padding: 6px;
            border-radius: 4px;
        }
        .music-card:hover{
            background-color: #5a5a5a;
        }
        .music-photo{
            max-width: 42px;
            max-height: 42px;
            width: auto;
            height: auto;

            margin-right: 24px;
        }
        .list-left,
        .list-center,
        .list-right{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .m-icon{
            max-width: auto;
            max-height: auto;
            width: 34px;
            height: 34px;

            margin-right: 8px;
        }
        .columns{
            display: flex;
            flex-direction: column;
        }
        .more{
            max-width: auto;
            max-height: auto;
            width: 34px;
            height: 34px;

            display: none;
            cursor: pointer;
        }
        .heart{
            max-width: auto;
            max-height: auto;
            width: 34px;
            height: 34px;

            margin-right: 36px;
            margin-bottom: 4px;
        
            display: none;
            cursor: pointer;
        }
        .name-music{
            color: white;
            font-weight: 600;
            font-size: 18px;
        }
        .block{
            display: block;
        }
        span{
            color: rgb(151, 151, 151);
            font-size: 14px;
        }
        .timer{
            font-size: 16px;
            font-weight: 500;

            margin-right: 12px;
        }
        .mhover-timer{
            margin-right: 46px;
        }
        .mhover-album{
            margin-right: 70px;
        }
        `;
        return style;
    }
}
customElements.define("m-card", Musiccard);