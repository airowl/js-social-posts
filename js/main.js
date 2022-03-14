const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 30,
        "created": "2021-06-30"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 56,
        "created": "2021-06-30"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 63,
        "created": "2021-06-30"
    },{
        "id": 9,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 30,
        "created": "2021-06-30"
    },
    {
        "id": 10,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 30,
        "created": "2021-06-30"
    },
    {
        "id": 11,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 30,
        "created": "2021-06-30"
    },
    {
        "id": 12,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 30,
        "created": "2021-06-30"
    },
    {
        "id": 13,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 30,
        "created": "2021-06-30"
    },{
        "id": 14,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 30,
        "created": "2021-06-30"
    },
    {
        "id": 15,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 30,
        "created": "2021-06-30"
    },
    {
        "id": 16,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 30,
        "created": "2021-06-30"
    },
    {
        "id": 17,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 30,
        "created": "2021-06-30"
    },
    {
        "id": 18,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 30,
        "created": "2021-06-30"
    },{
        "id": 19,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 30,
        "created": "2021-06-30"
    },
    {
        "id": 20,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 30,
        "created": "2021-06-30"
    },
];

const postsContainer = document.querySelector('.posts-list');

//! stampiamo i post con i dati dell'array di oggetti

//* creiamo un ciclo for each per stampare tutti i posts con il codice HTML insieme ai suoi dati
posts.forEach((element) => {
    
    postsContainer.innerHTML += `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element['author']['image']}" alt="${element['author']['name']}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element['author']['name']}</div>
                        <div class="post-meta__time">${element['created']}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element['content']}</div>
            <div class="post__image">
                <img src="${element['media']}" alt="${element['author']['name']}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${element['id']}" class="js-likes-counter">${element['likes']}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;
});

//! aggiungiamo una funziona al click della sezione Mi piace
const likeButton = document.querySelectorAll('a.like-button');

console.log(likeButton);

for (let i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener('click', function() {
        this.classList.toggle('js-like-button');
        
        document.getElementById('like-counter-' + posts[i].id).innerHTML = ++posts[i].likes;
    });
};




