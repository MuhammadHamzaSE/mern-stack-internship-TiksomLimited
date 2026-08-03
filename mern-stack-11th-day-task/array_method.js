const arr=[10,20,30,40,50,60,70]

// +++++++++++++++++ Filter Method +++++++++++++++++

const arr1=arr.filter((num)=>num>40)
console.log(arr1)

// +++++++++++++++++ Map Method ++++++++++++++++++++

const arr2=arr.map((num1)=>num1+10)
console.log(arr2)

// +++++++++++++++++ findIndex Method ++++++++++++++++++

const arr3=arr.findIndex((num2)=>num2>50)
console.log(arr3)

// +++++++++++++++++ Find Method +++++++++++++++++++++

const arr4=arr.find((num3)=>num3>67)
console.log(arr4)

// +++++++++++++++++ Some Method ++++++++++++++++++++

const arr5=arr.some((num5)=>num5>=70)
console.log(arr5)

