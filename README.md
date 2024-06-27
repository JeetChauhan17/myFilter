# myFilter 

A versatile and type-aware custom implementation of the array filter function in JavaScript. It can handle different types of elements in an array and apply a filtering function accordingly.

## Features

- myFilter function similar to `Array.prototype.filter`.
- A Type-aware filtering for numbers, strings, objects, and more.
- Very dynamic so it can be extended for additional types and conditions.

## Getting Started

### Usage

1. **Clone the repository**:
    ```bash
    git clone https://github.com/JeetChauhan17/myFilter.git
    cd myFilter
    ```

2. **Include the `myFilter` function in your project**:
    ```javascript
    function myFilter(arr, filterFunction){
        // Create a new array to hold the filtered elements
        let filteredArr = [];
        
        // Iterate over each element in the original array
        for(let i=0; i<arr.length; i++){
            let a = arr[i];
            let elementType = typeof a;

            // Perform different actions based on the type of the element
            switch(elementType){
                case "number":
                    if(filterFunction(a)){
                        filteredArr.push(a);
                    }
                    break;
                
                case "string":
                    if(filterFunction(a)){
                        filteredArr.push(a);
                    }
                    break;

                case "object":
                    if(a !== null && filterFunction(a)){
                        filteredArr.push(a);
                    }
                    break;

                default: 
                    break;
            }
        }
        // Return the filtered array
        return filteredArr;
    }

    ```

3. **Example usage**:
    ```javascript

    const arr = [1, 2, "Jeet", 3, 4, "Arya", { "msg": "heheheha" }, "Anju", 5, null];


    // Filter function to check if a number is even
    const numEvenFn = (a) => typeof a === "number" && a % 2 === 0;

    // Filter function to check if a string starts with "A"
    const strStartFn = (a) => typeof a === "string" && a.startsWith("A");

    // Filter function to check if an object has a key "msg"
    const hasKeyFn = (a) => typeof a === "object" && a !== null && "msg" in a;


    // Filter even numbers
    const evenNums = myFilter(arr, numEvenFn);
    console.log(evenNums); // Output: [2, 4]

    // Filter names starting with "A"
    const namesWithA = myFilter(arr, strStartFn);
    console.log(namesWithA); // Output: ["Arya", "Anju"]

    // Filter objects with a key "msg"
    const objFilter = myFilter(arr, hasKeyFn);
    console.log(objFilter); // Output: [{"msg": "heheheha"}]
    ```

## Contributing

If you want to contribute, feel free to do so. Just Submit a Pull Request or open an Issue to suggest add more types or improve the existing code :)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
