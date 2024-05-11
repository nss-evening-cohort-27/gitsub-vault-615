console.log("Skeo is cool")

// --- repositories.html --- //

//target elements on the DOM
const repositories = document.querySelector("#repositories")
const createNewRepositoryForm = document.querySelector("#create-new-repository-form")

//array of repository objects
const repositoryArray = [
  {
    id: 1,
    name: "Facebook",
    description: "A social media site to connect with your friends and classmates"
  },
  {
    id: 2,
    name: "Twitter",
    description: "Post \"tweets\" to share with the world (in 140 characters or less)"
  },
  {
    id: 3,
    name: "Myspace",
    description: "Create a profile page and display your top friends and favorite music"
  },
  {
    id: 4,
    name: "Google",
    description: "Search for anything across the entire world wide web"
  },
  {
    id: 5,
    name: "Pinterest",
    description: "Pin things that you are interested in? Idk what this actually does"
  }
]

//function that displays the repositoryArray in the repositories div using Bootstrap cards
const renderCards = (array, div) => {
  let domstring = ""
  
  array.forEach((repository) => {
    domstring += `
    <div class="card repository-card">
      <div class="card-body dom-card">
        <h5 class="card-title dom-card-title repository-name"><a href="#">${repository.name}</a></h5>
        <p class="card-text dom-card-text repository-description">${repository.description}</p>
      </div>
    </div>
    `
  })
  
  div.innerHTML = domstring
}

//calling the renderCards function to display the repositoryArray in the repositories div
if (repositories) {
renderCards(repositoryArray, repositories)
}

//function that adds a new repository to the repositoryArray
const newRepository = (e) => {
  e.preventDefault()

  const newRepositoryObj = {
    id: repositoryArray.length + 1,
    name: document.querySelector("#repository-name").value,
    description: document.querySelector("#repository-description").value
  }

  repositoryArray.push(newRepositoryObj)
  createNewRepositoryForm.reset()
  renderCards(repositoryArray, repositories)
}

//event listener for the create-new-repository-form submit button
if (createNewRepositoryForm) {
createNewRepositoryForm.addEventListener("submit", newRepository)
}



// --- overview.html --- //

//target elements on the DOM
const pinnedRepositories = document.querySelector("#pinned-repositories")
const pinARepositoryForm = document.querySelector("#pin-a-repository-form")
const pinARepositoryCheck = document.querySelector("#pin-a-repository-check")

//empty array for pinned repositories
const pinnedRepositoriesArray = [
  // {
  //   id: 1,
  //   name: "test",
  //   description: "test"
  // }
]

//calling the renderCards function to display the pinned repositories in the pinnedRepositories div
if (pinnedRepositories) {
renderCards(pinnedRepositoriesArray, pinnedRepositories)
}

//function that renders the repositoryArray objects as options in pinARepositoryCheck
const renderRepositoryFormChecks = () => {
  let domstring = ""

  repositoryArray.forEach(repository => {
    domstring += `
    <input class="form-check-input" type="checkbox" value="${repository.name}" id="checkbox--${repository.id}">
              <label class="form-check-label" for="flexCheckDefault">
                ${repository.name}
              </label>
    `
  })
  
  pinARepositoryForm.innerHTML = domstring
}

//calling the renderRepositoryFormChecks function to display all repositories as checkboxes in the form
if (pinARepositoryForm) {
  renderRepositoryFormChecks()
}

//function that adds a checked repository to the pinnedRepositories array
const pinRepository = (e) => {
  
  const [, repositoryId] = e.target.id.split("--")
  const index = repositoryArray.findIndex((repository) => repository.id === Number(repositoryId))

  const newPinnedRepository = repositoryArray[index]

  pinnedRepositoriesArray.push(newPinnedRepository)
}

//function that removes an unchecked repository from the pinnedRepositories array
const unpinRepository = (e) => {
  
  const [, repositoryId] = e.target.id.split("--")
  const index = pinnedRepositoriesArray.findIndex((repository) => repository.id === Number(repositoryId))
  console.log(index)
  // const newPinnedRepository = repositoryArray[index]

  // pinnedRepositoriesArray.push(newPinnedRepository)

  pinnedRepositoriesArray.splice(index, 1)
}

//event listener on the form that adds a checked repository to the
pinARepositoryForm.addEventListener("change", (e) => {

  if (e.target.checked) {
    pinRepository(e)
    renderCards(pinnedRepositoriesArray, pinnedRepositories)
  } else {
    unpinRepository(e)
    console.log(pinnedRepositoriesArray)
    renderCards(pinnedRepositoriesArray, pinnedRepositories)
  }
})
