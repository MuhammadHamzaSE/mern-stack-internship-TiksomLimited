function searchByID(users,id){
    const user3=users.find(user=>user.id==id);
        if(!user3){
            console.log("User Not Found")
        }
        console.log(`
            ID=${user3.id},
            name=${user3.name},
            username=${user3.username},
            phone=${user3.phone},
            cit=${user3.address.city},
            website=${user3.website},
            company=${user3.company.name}
            `)
    }

    module.exports={
        searchByID
    }