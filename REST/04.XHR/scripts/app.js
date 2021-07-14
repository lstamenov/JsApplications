function loadRepos() {
    const httpRequest = new XMLHttpRequest();
    let url = 'https://api.github.com/users/testnakov/repos';

    httpRequest.addEventListener('loadend', function () {
        document.getElementById('res').textContent =
            this.responseText;
    });

    httpRequest.open('GET', url);
    httpRequest.send();
}