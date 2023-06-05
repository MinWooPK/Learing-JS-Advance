function GET(url) {
  return new Promise(function (resolve, reject) {
    let ajaxCall = new XMLHttpRequest();

    ajaxCall.open("GET", url);
    ajaxCall.onload = function () {
      if (ajaxCall.status == 200) return resolve(ajaxCall.response);
      reject(Error(ajaxCall.status));
    };
    ajaxCall.onerror = function (err) {
      reject(err);
    };
    ajaxCall.send();
  });
}

function getUserInfo(username) {
  return GET("https://api.github.com/users/" + username);
}

function getRepos(repos_url) {
  return GET(repos_url);
}

function getGitHubUserInfo() {
  let getReposPromise = getUser("MinWooPK").then((response) => {
    getRepos(JSON.parse(response).repos_url);
  });
  return Promise.all([getUserPromise, getReposPromise]);
}

getGitHubUserInfo()
  .then(([userInfo, reposInfo]) => {
    console.log("Info del usuario:");
    console.log(userInfo);
    console.log("Info de los info:");
    console.log(reposInfo);
  })
  .catch((err) => console.log(err));

// let getUserPromise = getUser();

// let getReposPromise = getUser()
//   .then((response) => {
//     getRepos(JSON.parse(response).repos_url);
//   })
//   .catch(console.log);

// getReposPromise.then(console.log).catch(console.log);

// .then((response) => {
//   let responseJSON = JSON.parse(response);

//   console.log(responseJSON.repos_url);
//   getRepos(responseJSON.repos_url).then((repos) => {
//     console.log(repos);
//   });
// })
// .catch(console.log);

getUserPromise().then((response) => {
  console.log("respuesta del usario:");
  console.log(response);
});

Promise.all([getUserPromise, getReposPromise])
  .then(([userInfo, reposInfo]) => {
    console.log("Info del usuario:");
    console.log(userInfo);
    console.log("Info de los info:");
    console.log(reposInfo);
  })
  .catch((err) => console.log(err));
