

const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)

        createUserCard(data)
        getRepos(username)
    } catch(err) {
        if(err.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
    } catch(err) {
        createErrorCard('Problem fetching repos')
    }
}

function createUserCard(user) {
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML = `
    <div class="card">
        
            <div class="user-profile">
                <img src="${user.avatar_url}" height="150px" alt="" class="avatar">

            </div>
            <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
                <ul>
                    <li><div class="num">${user.followers}</div>Followers</li>
                    <li><div class="num">${user.following}</div>Following</li>
                    <li><div class="num">${user.public_repos}</div>Repos</li>
                </ul>
          
        
            <div class="repos">
                <a href="#" class="repo">
                    <div class="repo-name">Repo 1</div>

                    
                </a>
                <a href="#" class="repo">
                    <div class="repo-name">Repo 2</div>
                    
                </a>
                <a href="#" class="repo">
                    <div class="repo-name">Repo 3</div>
                    
                </a>
                
           </div>
            </div>
           
        </div>
    `
    main.innerHTML = cardHTML
    
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if(user) {
        getUser(user)

        search.value = ''
    }
})