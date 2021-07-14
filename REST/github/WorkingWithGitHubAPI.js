function loadUser() {
    let username = document.getElementById('username').value;
    let userUrl = `https://api.github.com/users/${username}`;
    let userReposUrl = `https://api.github.com/users/${username}/repos`;
    const getUserRequest = new XMLHttpRequest();
    const getUserReposRequest = new XMLHttpRequest();

    getUserRequest.addEventListener('loadend', function () {
        let userDetailsElement = document.getElementById('user_details');
        let usernameElement = document.createElement('p');
        let fullNameElement = document.createElement('p');
        let idElement = document.createElement('p');
        let responseData = JSON.parse(this.response);
        console.log();
        console.log();
        console.log();
        usernameElement.textContent = `username: ${responseData['login']}`;
        fullNameElement.textContent = `full name: ${responseData['name']}`;
        idElement.textContent = `ID: ${responseData['id']}`;
        userDetailsElement.appendChild(usernameElement);
        userDetailsElement.appendChild(fullNameElement);
        userDetailsElement.appendChild(idElement);

        getUserReposRequest.open('GET', userReposUrl);
        getUserReposRequest.send();
    });


    getUserReposRequest.addEventListener('loadend', function () {
        let userDetailsElement = document.getElementById('user_details');
        let repos = JSON.parse(this.response);
        let reposCountElement = document.createElement('p');
        reposCountElement.textContent = `repositories: ${repos.length}`;
        let listReposElement = document.createElement('ul');
        userDetailsElement.appendChild(reposCountElement);
        userDetailsElement.appendChild(listReposElement);
        for (let i = 0; i < repos.length; i++) {
            let repoElement = document.createElement('li');
            let repoLink = document.createElement('a');
            repoLink.setAttribute('href', `${repos[i].html_url}`)
            repoLink.textContent = `${repos[i].name}`;
            repoElement.appendChild(repoLink);
            listReposElement.appendChild(repoElement);
        }
    });

    getUserRequest.open('GET', userUrl);
    getUserRequest.send();
}