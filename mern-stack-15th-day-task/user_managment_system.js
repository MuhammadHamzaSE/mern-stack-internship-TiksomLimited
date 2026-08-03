const {getUser}=require("./api_user")
const{displayUser,searchByCompany,searchByName,sortByName}=require("./userOperations")
const {searchByID}=require("./searchByID")

async function getUserData(){
    try{
        const users=await getUser()
         displayUser(users)

        console.log("++++++++++++++++++ Search By User Name ++++++++++++++")

        const userName=searchByName(users,'Chelsey Dietrich')
        displayUser(userName)

        console.log("++++++++++++++++++ Search By Company Name +++++++++++")

        const companyName=searchByCompany(users,"Yost and Sons")
        displayUser(companyName)

        console.log("++++++++++++++++++ Sorted Accordig to Name +++++++++++")

        const sortingName=sortByName(users)
        displayUser(sortingName)

        console.log("++++++++++ Details Of A User Of Specific ID +++++++++++")
        const viewUser=searchByID(users,3)
        displayUser(viewUser)
    }catch(error){
        ("Something went wrong :",error.essage)
    }
}
getUserData();