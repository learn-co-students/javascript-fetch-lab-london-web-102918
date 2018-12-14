const issueTitle = document.getElementById('title')
const issueBody = document.getElementById('body')

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
  fetch('https://api.github.com/repos/artismarti/javascript-fetch-lab/issues', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    Authorization: `token ${getToken()}`
  },
  body: JSON.stringify({
    title: issueTitle.value,
    body: issueBody.value
  })
}).then(res => console.log(res)).catch(err => console.log(err));
}

function showResults(json) {
  document.getElementById('results').innerText = json
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {Authorization:`token ${getToken()}`}
  }).then(res => showResults())
}

function getToken() {
  return ''
}

// ********
