function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  const token = 'fed4dc5868f7f0399d4ec8aeb82001c57e879519';
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    // body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}


// https://github.com/paolov1928/js-task-lister-lite-london-web-102918/commit/2e946493c7a0d663ef19ca74ffe4be14804c367e
const addComment = () => {
const token = 'fed4dc5868f7f0399d4ec8aeb82001c57e879519';
const postData = {
  body: 'Commenting from within Atom'
};

fetch('https://api.github.com/repos/paolov1928/js-task-lister-lite-london-web-102918/commits/2e946493c7a0d663ef19ca74ffe4be14804c367e/comments', {
  method: 'POST',
  body: JSON.stringify(postData),
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => console.log(res));
}
