function displayUser(users){
  users.forEach((user) => {
        console.log(`
        name :${user.name},
        email :${user.email},
        phone :${user.phone},
        company :${user.company.name},
        `)
  });
}

function searchByName(users,otherName){
    return users.filter((user)=>{
        return user.name.toLowerCase().includes(otherName.toLowerCase())
       
    })
}

function searchByCompany(users,companyName1){
    return users.filter((user)=>{
        return user.company.name.toLowerCase() === companyName1.toLowerCase()
    })
}

function sortByName(users){
        return [...users].sort((a, b) =>
        a.name.localeCompare(b.name)
    );
}
module.exports={
    displayUser,
    searchByCompany,
    searchByName,
    sortByName
}