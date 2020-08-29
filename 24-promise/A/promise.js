/**
 * Data
 */
var personDetail = {
    name: 'Sam',
    programmingLevel: 'Master'
  }
  
var classes = [
{
    name: 'FTSE',
    instructor: 'Sam'
},
{
    name: 'FTDS',
    instructor: 'Jyoti'
}
]
  
var venues = [
{
    name: 'RM1',
    className: 'FTSE'
},
{
    name: 'RM2',
    className: 'FTDS'
}
]

/**
 * Function definitions
 */
function getPersonName() {
    console.log('Getting person detail...')
    // a fake time-consuming function
    setTimeout(() => {
      let response = personDetail
      console.log('Person detail received!')
      console.log(response)
      return response.name
    }, 2000)
  }
  
function getClassName(personName) {
console.log('Getting class name...')
// another fake time-consuming function
setTimeout(() => {
    let response;
    for (key in classes) {
    if (classes[key].instructor === personName) {
        response = classes[key].name
    }
    }
    console.log('Class name found!')
    console.log(response)
    return response
}, 2000)
}

function getVenue(className) {
console.log('Getting venue name...')
// last fake time-consuming function, I promise
setTimeout(() => {
    let response;
    for (key in venues) {
    if (venues[key].className === className) {
        response = venues[key].name
    }
    }
    console.log('Venue found!')
    console.log(response)
    return response
}, 2000)
}

// promises

const promise = new Promise((resolve, reject) => {
    resolve();
});

promise
.then(() => getPersonName())
.then((personName) => getClassName(personName))
.then((className) => getVenue(className))
.then(() => console.log('Program ends here'));