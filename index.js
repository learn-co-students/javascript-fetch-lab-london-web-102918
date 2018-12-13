function getIssues() {
  const token = '';

fetch('rosen777/javascript-fetch-lab/issues', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
}

function showIssues(json) {
}

function createIssue() {
  const token = '963151f96710310f17169d7ae7c70284a6652dcf'
  const postData = {
    body: 'test body'
  };

  fetch('rosen777/javascript-fetch-lab/issues', {
    method: /post/,
    body:
    JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
}

function showResults(json) {
}

function forkRepo() {
  const token = '963151f96710310f17169d7ae7c70284a6652dcf'
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it
  const postData = {
  body: 'Great stuff'
};

fetch('api.github.com/repos/learn-co-curriculum/javascript-fetch-lab', {
  method: /post/,
  body: JSON.stringify(postData),
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
