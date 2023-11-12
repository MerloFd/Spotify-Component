    class headerList extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build (){
        const componentRoot = document.createElement("header");
        componentRoot.setAttribute("class","hcontent");

            const playlistImg = document.createElement("img");
            playlistImg.setAttribute("class","img-list");
            playlistImg.src = this.getAttribute("img") || "./assets/images/spotify-logo.png";
            playlistImg.alt = "playlist img"

            const infoList = document.createElement("div");
            infoList.setAttribute("class","list-tittle");

                const publicList = document.createElement("h4");
                publicList.textContent = "Playlist pública";

                const name = document.createElement("h1");
                name.textContent = this.getAttribute("nome") || "Playlist";

                const autor = document.createElement("div");
                autor.setAttribute("class","autor");

                    const autorImg = document.createElement("img");
                    autorImg.setAttribute("class","autor-img");
                    autorImg.src = this.getAttribute("autorImg") || "./assets/images/spotify-logo.png";
                    autorImg.alt = "autor icon";

                    const autorName = document.createElement("p");
                    autorName.textContent = this.getAttribute("autorName") || "User"

        componentRoot.appendChild(playlistImg);
        componentRoot.appendChild(infoList);
            infoList.appendChild(publicList);
            infoList.appendChild(name);
            infoList.appendChild(autor);
                autor.appendChild(autorImg);
                autor.appendChild(autorName);

        return componentRoot;
    }
    styles (){
        const style = document.createElement("style");
        style.textContent=`
        .hcontent{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        h1{
            font-size: 90px;
            font-weight: 600;

            margin: 0px;
        }
        h4{
            margin: 0px;
        }
        .list-tittle{
            margin-left: 24px;
            margin-top: 100px;
            margin-bottom: 16px;
        }
        .img-list{
            border-radius: 8px;
            margin-left: 16px;  
            margin-top: 26px;
        
            max-width: 220px;
            max-height: 220px;
            width: auto;
            height: auto;
        }
        .autor{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .autor p{
            margin: 0px;
            margin-left: 8px;
            color: rgb(151, 151, 151);
        }
        .autor-img{
            border-radius: 500px;
            width: 26px;
        }
        `;
        return style;
    }
} 
customElements.define("playlist-header", headerList);