window.onload = function () {
    const container = document.querySelector('.post-container');
    //fetch('https://api.jsonsilo.com/public/26a60fee-ba28-425f-864e-aead2a78c23e')
    fetch('res/posts.json')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(json => {
            json.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');

                const header = document.createElement('div');
                header.className = 'post-header';

                const profileImg = this.document.createElement('img');

                profileImg.className = 'profile-vector';
                profileImg.className = 'profile';
                profileImg.src = post.profileImage;
                profileImg.alt = 'Profile picture';

                const dateSpan = document.createElement('span');
                dateSpan.className = 'post-date';
                dateSpan.textContent = post.date;


                header.appendChild(profileImg);
                header.appendChild(dateSpan);
                postDiv.appendChild(header);

                if (post.image) {
                    const postImg = document.createElement('img');
                    postImg.className = 'post-image';
                    postImg.src = post.image;
                    postImg.alt = 'Post picture';
                    postDiv.appendChild(postImg);
                }

                const body = document.createElement('p');
                body.className = 'post-text';
                body.textContent = post.text;

                postDiv.appendChild(body);

                container.appendChild(postDiv);
            });
        })
        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
        })
};
