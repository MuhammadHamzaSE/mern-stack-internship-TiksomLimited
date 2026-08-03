//++++++++++++++++++++ Array Method +++++++++++++++++

// +++++++++++++++++++ Push Method ++++++++++++++++++

const arr1=[1,2,3,4,5,6]
console.log(arr1)
arr1.push(7)
console.log(arr1)

// +++++++++++++++++++ Pop Method ++++++++++++++++++

const arr2=[1,2,3,4,5,6]
console.log(arr2)
arr2.pop()
console.log(arr2)

// ++++++++++++++++++ Shift Method ++++++++++++++++++

const arr3=[1,2,3,4,5,6]
console.log(arr3)
arr3.shift()
console.log(arr3)

// ++++++++++++++++++ Unshift Method +++++++++++++++++

const arr4=[1,2,3,4,5,6]
console.log(arr4)
arr4.unshift(7)
console.log(arr4)

// ++++++++++++++++++ Slice Method +++++++++++++++++++++

const arr5=[1,2,3,4,5,6]
console.log(arr5)
const arr6=arr5.slice(1,3)
console.log(arr6)

// +++++++++++++++++ Splice Method +++++++++++++++++++++

const arr7=[1,2,3,4,5,6]
console.log(arr7)
const arr8=arr7.splice(1,3)
console.log(arr8)

// +++++++++++++++++ Map Method ++++++++++++++++++++++++

const arr9=[1,2,3,4,5,6,7,8,9]
const arr10=arr9.map((num)=>num+10)
console.log(arr10)

// +++++++++++++++++ Filter Method +++++++++++++++++++++

const arr11=[1,2,3,4,5,6,7,8,9]
const arr12=arr11.filter((num)=>num>5)
console.log(arr12)

// +++++++++++++++++ Reduce Method +++++++++++++++++++++

const arr13=[1,2,3,4,5,6,7,8,9]
const arr14=arr13.reduce((acc,currval)=>{
    return acc+currval
},0)
console.log(arr14)

// ++++++++++++++++++ For Each ++++++++++++++++++++++++

const arr15=["Hamza","Ali","Usman","Asad","Ahmad"]
const arr16=arr15.forEach((num)=>{
    return console.log(num)
})

// ++++++++++++++++++ Find Method +++++++++++++++++++++

const arr17=[1,2,3,4,5,6,7,8,9]
const arr18=arr17.find((num)=>num>5)
console.log(arr18)

// ++++++++++++++++++ FindIndex +++++++++++++++++++++++

const arr19=[1,2,3,4,5,6,7,8,9]
const arr20=arr19.findIndex((num)=>num>5)
console.log(arr20)

// +++++++++++++++++++ Some Method ++++++++++++++++++++

const arr21=[1,2,3,4,5,6,7,8,9]
const arr22=arr21.some((num)=>num>5)
console.log(arr22)

// +++++++++++++++++++ Every Method ++++++++++++++++++++

const arr23=[1,2,3,4,5,6,7,8,9]
const arr24=arr23.every((num)=>num>5)
console.log(arr24)

// ++++++++++++++++++++  Sort Method +++++++++++++++++++

const arr25=["Hamza","Ali","Usman","Asad","Ahmad"]
arr25.sort()
console.log(arr25)

// ++++++++++++++++++++ Includes Method ++++++++++++++++

const arr26=["Hamza","Ali","Usman","Asad","Ahmad"]
console.log(arr26.includes("Hamza"))






