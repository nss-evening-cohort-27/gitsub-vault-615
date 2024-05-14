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


// --- projects.html --- //

  const createNewProjectForm = document.querySelector("#create-a-project-form")

  const newProject = (e) => {
    e.preventDefault()
  
    const newProjectObj = {
      id: projects.length + 1,
      name: document.querySelector("#project-name").value,
      description: document.querySelector("#project-description").value
    }
  
    projects.push(newProjectObj)
    createNewProjectForm.reset()
    cardsOnDom(projects)
  }
  if (createNewProjectForm) {
    createNewProjectForm.addEventListener("submit", newProject)
      }

const projects = [
  {
    id: 1,
    name: "Pet Adoption Page",
    description: "simple page to sort through adoptable pets.",

  },
  {
    id: 2,
    name: "Wizarding Sorting Hat",
    description: "a simple sorting hat app to determine the house youd be placed in at Hogwarts",

  },
  {
    id: 3,
    name: "Being Skeo",
    description: "just a simple project about being the best person around. That person is Skeo."
  }

]
const targetingApp = document.querySelector("#projects")

const cardsOnDom = (array) => {
  
  let domstring = "";
  for (const project of array) {
    domstring +=
    `<div class="card project-card">
      <div class="card-body dom-card">
        <h2 class="card-title dom-card-title "><a href="#">${project.name}</a></h2>
        <p class"color-text dom-card-text">${project.description}</p>
      </div>
    </div>`
  }
  targetingApp.innerHTML = domstring 
}

if (targetingApp) {
  cardsOnDom(projects)
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
if (pinARepositoryForm) {
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
}


// array packages
// 
const packagesyArray = [
  {
    id: 1,
    name: "Dock",
    description: "A software platform used for building applications based on containers — small and lightweight execution environments."
  },
  {
    id: 2,
    name: "Apache",
    description: "A default package manager used for the Java programming language and the Java runtime environment."
  },
  {
    id: 3,
    name: "Nuget",
    description: "A free and open source package manager used for the Microsoft development platforms including .NET."
  },
  {
    id: 4,
    name: "RubyGeme",
    description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language."
  },
  {
    id: 5,
    name: "npm",
    description: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code."
  },
  {
    id: 6,
    name: "Container",
    description: "A single place for your team to manage Docker images and decide who can see and access your images."
  }
]


// a function that renders packages to dom

const packages= document.querySelector("#packages")

const renderPackagesCard = (array) => {
  let domString = ""
  for (const package of array) {
      domString += `<div class="card packages-card">
      <div class="card-body dom-card">
        <h5 class="card-title dom-card-title packages-name">${package.name}</h5>
        <p class="card-text dom-card-text packages-description">${package.description}</p>
      </div>
    </div>`
  }
  packages.innerHTML = domString
}

if(packages) {
  renderPackagesCard(packagesyArray)
}

// create new package 
const createNewPackages = document.querySelector("#createNewPackages")

const newPackage = (e) => {
  e.preventDefault()

  const newPackageObj = {
    id: packagesyArray.length + 1,
    name: document.querySelector("#packages-name").value,
    description: document.querySelector("#packages-description").value
  }

  packagesyArray.push(newPackageObj)
  createNewPackages.reset()
  renderPackagesCard(packagesyArray)
}
if(createNewPackages) {
  createNewPackages.addEventListener("submit", newPackage)
}
