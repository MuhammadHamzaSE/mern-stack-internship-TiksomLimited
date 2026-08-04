const promise = new Promise((resolve, reject) => {
    const user = true;
    if (user) {
        resolve("User Is Verified");
    } else {
        reject("User Is Not Verified");
    }
});

promise
    .then((message) => console.log(message))
    .catch((error) => console.error(error));