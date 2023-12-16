

const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
    try {
        const response = await fetch('https://api.github.com/users/'+ username )

        console.log(response)
        const data = await response.json()
        console.log(data)
        createUserCard(data)
        getRepos(username)
    } catch(err) {
            console.log('No profile with this username')
        
    }
}

async function getRepos(username) {
    try {
       
        const response = await fetch('https://api.github.com/users/'+ username + '/repos?sort=created')

        console.log(response)
        const data = await response.json()
        console.log(data)

        addReposToCard(data)
    } catch(err) {
        console.log(err)
        // createErrorCard('Problem fetching repos')
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
            <h2>${userID}</h2>
            <p>${userBio}</p>
                <ul>
                    <li><div class="num">${user.followers}</div>Followers</li>
                    <li><div class="num">${user.following}</div>Following</li>
                    <li><div class="num">${user.public_repos}</div>Repos</li>
                </ul>
          
        
            <div class="repos" id="repos">
                
                
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
    repos.slice(0,3).forEach( repo => {
const reposEl = document.getElementById('repos')
reposEl.classList.add('repos')
const repoEl = document.createElement('a')
repoEl.classList.add('repo')
const reponame = document.createElement('div')
reponame.classList.add('repo-name')
repoEl.href = repo.html_url
repoEl.target = '_blank'
reponame.innerText = repo.name


repoEl.appendChild(reponame)
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