menuOpen = false

window.addEventListener("DOMContentLoaded",()=>{
    
    getArtistList(list)
    document.getElementById("close-menu").addEventListener("click", ()=>togglePage("menu"), false);
    document.getElementById("menu-btn").addEventListener("click", ()=>togglePage("menu"), false);

    document.getElementById("close-artists").addEventListener("click", ()=>togglePage("artists"), false);
    document.getElementById("artists-btn").addEventListener("click", ()=>togglePage("artists"), false);

    document.getElementById("about-btn").addEventListener("click",()=>window.open('https://www.instagram.com/_u/treehaus.jpg/','_blank'), false);


})

list = [
  {
    name:"visual artists",
    artists:[
      {
        name:"Tyler Chamberlain",
        description:"Photography",
        img:"",
        socials:[
          {
            icon: 'fa-instagram',
            link:"https://www.instagram.com/_u/_.tkc_/"
          }
        ]
      },
      {
        name:"Sweezy",
        description:"Photography/film",
        img:"",
        socials:[
          {
            icon: 'fa-instagram',
            link:"https://www.instagram.com/jussumflixx/"
          }
        ]
      },
      {
        name:"Sofia Merino",
        description:"Visual Artist",
        img:"",
        socials:[
          {
            icon: 'fa-instagram',
            link:"https://www.instagram.com/_u/ssofiamerinohace/"
          }
        ]
      },
      {
        name:"Isis Treble",
        description:"Visual Artist",
        img:"",
        socials:[
          {
            icon: 'fa-instagram',
            link:"https://www.instagram.com/_u/isisgalleria/"
          }
        ]
      },
      {
        name:"Christopher White",
        description:"Visual Artist",
        img:"",
        socials:[
          {
            icon: 'fa-instagram',
            link:"https://www.instagram.com/_u/solo.cwhite/"
          }
        ]
      }
    ]
  },
  {
    name:"Musical artists",
    artists:[
      {
        name:"Siah",
        description:"",
        img:"",
        socials:[
          {
            icon: 'fa-instagram',
            link:"https://www.instagram.com/_u/siahnotsiah/"
          },
          {
            icon: 'fa-spotify',
            link:"https://open.spotify.com/album/6qRt13Jv55KiT3CHrdaibE?si=Qb6f_w-sTWe9bRXNuOp5Jg&nd=1"
          },
          {
            icon: 'fa-apple',
            link:"https://music.apple.com/us/album/x6/1662971523?i=1662971524"
          },
          {
            icon: 'fa-soundcloud',
            link:"https://soundcloud.com/siahxo"
          }
        ]
      },
      {
        name:"Foreverxx",
        description:"",
        img:"",
        socials:[
          {
            icon: 'fa-instagram',
            link:"https://www.instagram.com/_u/28foreverxx/"
          },
          {
            icon: 'fa-youtube',
            link:"https://www.youtube.com/@28Foreverxx"
          },
          {
            icon: 'fa-soundcloud',
            link:"https://soundcloud.com/devin2xx"
          }
        ]
      },
      {
        name:"Prez Harris",
        description:"",
        img:"",
        socials:[
          {
            icon: 'fa-instagram',
            link:"https://www.instagram.com/_u/presidentharris/"
          },
          {
            icon: 'fa-youtube',
            link:"https://www.youtube.com/user/thepresidentharris"
          },
          {
            icon: 'fa-soundcloud',
            link:"https://soundcloud.com/presidentharris"
          },
        ]
      },
      {
        name:"D-Jilla",
        description:"",
        img:"",
        socials:[
          {
            icon: 'fa-instagram',
            link:"https://www.instagram.com/_u/d__jilla/"
          },
          {
            icon: 'fa-youtube',
            link:"https://youtube.com/channel/UCk2TsggjGwrDc9eQTqQYOlw"
          },
          {
            icon: 'fa-spotify',
            link:"https://open.spotify.com/artist/7AscKBrUce3RSMMl5HtnlO?si=lpEHYR_mRAm-xZ3Zlm48pg"
          },
          {
            icon: 'fa-apple',
            link:"https://music.apple.com/us/artist/d-jilla/1593264322"
          }
        ]
      },
    ]
  },
  {
    name:"Sounds by",
    artists:[
      {
        name:"Permanant Wave",
        description:"DJ",
        img:"",
        socials:[
          {
            icon: 'fa-instagram',
            link:"https://www.instagram.com/_u/permanentwave/"
          }
        ]
      },
    ]
  }
]

function getArtistList(list){
  const container = document.getElementById('artists')
  for(let i=0; i<list.length; i++){
    let category = document.createElement("h2")
    category.style.color="white"
    category.innerHTML = list[i].name
    container.appendChild(category)
    for(let j=0; j<list[i].artists.length;j++){
      let artist = list[i].artists[j]
      let artistEl = genArtist(artist.name,artist.img,artist.description,artist.socials)
      container.appendChild(artistEl)  
    }
    
  }
}

function genArtist(name,img, description, socials){
  const container = document.createElement("div")
  container.classList.add("artist-container")


  if(img){
    const im = document.createElement("img")
    im.classList.add("artist-img")
    im.setAttribute("src",img)
    container.appendChild(im)  
  }
  

  const textContentContainer = document.createElement("div")
  textContentContainer.classList.add("artist-info-container")

  const nameEl = document.createElement("h2")
  nameEl.innerHTML = name

  const descriptionEl = document.createElement("p")
  descriptionEl.classList.add('artist-desc')
  descriptionEl.innerHTML = description

  const artistHeader = document.createElement("div")
  artistHeader.classList.add('artist-header')
  artistHeader.appendChild(nameEl)

  const socialsContainer = document.createElement("div")
  socialsContainer.classList.add('socials-container')

  for(let i=0;i<socials.length;i++){
    let socialIcon = document.createElement("i")
    socialIcon.classList.add('fa-brands')
    socialIcon.classList.add(socials[i].icon)

    let socialLink = document.createElement("a")
    socialLink.appendChild(socialIcon)
    socialLink.classList.add('social-link')
    
    socialLink.setAttribute('href',socials[i].link)
    socialLink.setAttribute('target','_blank')
    socialsContainer.appendChild(socialLink)
  }

  artistHeader.appendChild(socialsContainer)

  textContentContainer.appendChild(artistHeader)
  textContentContainer.appendChild(descriptionEl)

  container.appendChild(textContentContainer)

  return container
}

function togglePage(page){
  if(menuOpen){
    document.getElementById(page).classList.add("hidden-rev")
    document.getElementById("home").classList.remove("hidden")
    menuOpen = false
    document.getElementById("mountains").classList.remove('hidden')
    document.getElementById("tree").classList.remove('hidden')
    document.getElementById("close-"+page).classList.add('hidden')
    
  }else{
    document.getElementById(page).classList.remove("hidden-rev")
    document.getElementById("home").classList.add("hidden")
    menuOpen = true
    document.getElementById("mountains").classList.add('hidden')
    document.getElementById("tree").classList.add('hidden')
    document.getElementById("close-"+page).classList.remove('hidden')
  }
}