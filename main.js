console.log("I hate planning")

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
  }
]

//function that displays the repositoryArray in the repositories div using Bootstrap cards
const renderCards = (array, div) => {
  let domstring = ""
  
  array.forEach((repository) => {
    domstring += `
    <div class="card repository-card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title repository-name">${repository.name}</h5>
        <p class="card-text repository-description">${repository.description}</p>
      </div>
    </div>
    `
  })
  
  div.innerHTML = domstring
}

//calling the renderCards function to display the repositoryArray in the repositories div
renderCards(repositoryArray, repositories)

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
createNewRepositoryForm.addEventListener("submit", newRepository)
