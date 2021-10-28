var typeOfTriangle = function (sideA, sideB, sideC) {
    let isValid;
    if (sideA + sideB > sideC) {
        isValid = true
    }
    if (!isValid) {
        console.log("Not a valid triangle")
    }
    if (isValid) {
         if (sideA === sideB && sideB === sideC && sideA === sideC) {
             console.log("Equilateral")
         }
         if ((sideA === sideB && (typeof sideC === "number")) || (sideA === sideC && (typeof sideB === "number")) ||
             (sideB === sideC && (typeof sideA === "number"))) {
             console.log("Isosceles")
         }
         if ((sideA !== sideB) && (sideB !== sideC) && (sideA !== sideC)) {
             console.log("Scalene")
         }
    }  
    
}
typeOfTriangle(2,2, 8)