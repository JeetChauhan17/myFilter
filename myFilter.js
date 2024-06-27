function myFilter(arr, filterFunction){
    
    let filteredArr = []
    for(let i=0; i<arr.length; i++){
        let a = arr[i]
        let elementType = typeof a

        switch(elementType){
            case "number":
                if(filterFunction(a)){
                 filteredArr.push(a)
                }
                break
            
            case "string":
                if(filterFunction(a)){
                 filteredArr.push(a)
                }
                break

            case "object":
                if(a!== null && filterFunction(a)){
                 filteredArr.push(a)
                }
                break

            default: 
                break
        }
    }
    return filteredArr
}



// Example:
const arr = [1, 2, "Jeet", 3, 4, "Arya", {"msg": "heheheha"}, "Anju", 5, null]


const numEvenFn = (a) => typeof(a)==="number" && a%2==0 
const strStartFn = (a) => typeof(a)==="string" && a.startsWith("A") 
const hasKeyFn = (a) => typeof(a)==="object" && a !== null && "msg" in a


// Filter even numbers:
const evenNums = myFilter(arr, numEvenFn)
console.log(evenNums);

// Filter names starting with "A":
const namesWithA = myFilter(arr, strStartFn)
console.log(namesWithA);

// Filter even numbers:
const objFilter = myFilter(arr, hasKeyFn)
console.log(objFilter);