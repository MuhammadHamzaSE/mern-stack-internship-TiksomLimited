
let isLoading = true;
let data = null;
let error = null;
async function getData() {
    try {
        isLoading = true; 
        let response = await fetch("https://dummyjson.com/users/1");
        
        if (!response) {
            console.log("Invalid Data"); 
        }
        data = await response.json(); 
        console.log( data.firstName);

    } catch (err) {
        error = err.message;
        console.log

    } finally {
        isLoading = false; 
        console.log
    }
}
getData();