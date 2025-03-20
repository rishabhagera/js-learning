//D-srtructure of object


const course ={
    cname:"js in hindi",
    price:999,
    courseinstructor:"hitesh sir"

}

// console.log(course.courseinstructor); // this used more times than not good 

const {courseinstructor : instructor} =course   // dstructure of object 
console.log(instructor);

// //react dstructure
// const navbar = ({company}) => {

// }
// navbar(company="rishabh")


//API Concept in JS
// phele value in xml
// values are in json

// json is kind of object only  keys are in string and /// values are in string latter on they are transfered into a variable

// {
//     "name":"rishabh",
//     "cousrsename" :"js in hindi",
//     "price" :"free"
// }

// api in array to and would have objects in them
[
    {},
    {},
    {}
]

// random user api from chrome 
// {
//     "results": [
//       {
//         "gender": "male",
//         "name": {
//           "title": "Mr",
//           "first": "Peetu",
//           "last": "Walli"
//         },
//         "location": {
//           "street": {
//             "number": 9751,
//             "name": "Visiokatu"
//           },
//           "city": "Enontekiö",
//           "state": "Päijät-Häme",
//           "country": "Finland",
//           "postcode": 74174,
//           "coordinates": {
//             "latitude": "-21.5680",
//             "longitude": "-71.9954"
//           },
//           "timezone": {
//             "offset": "-3:00",
//             "description": "Brazil, Buenos Aires, Georgetown"
//           }
//         },
//         "email": "peetu.walli@example.com",
//         "login": {
//           "uuid": "cf5ff09b-a3f9-4495-8baf-93cf4f915e5e",
//           "username": "purplewolf619",
//           "password": "qazxsw",
//           "salt": "Ol7JqMwF",
//           "md5": "f17a8a5eabb2d7b4ea8bdf3d59635efd",
//           "sha1": "80c4ca2eb5c8dc0a51a8cf88bc42841666ca91b7",
//           "sha256": "f1bc976b39983ab18d55e0b863b2afc6a9b1cdd9f62237b2d28e0d09e39dcac0"
//         },
//         "dob": {
//           "date": "1956-06-10T22:49:33.182Z",
//           "age": 68
//         },
//         "registered": {
//           "date": "2017-12-10T19:57:31.246Z",
//           "age": 7
//         },
//         "phone": "04-951-393",
//         "cell": "049-091-88-78",
//         "id": {
//           "name": "HETU",
//           "value": "NaNNA921undefined"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/95.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/95.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/95.jpg"
//         },
//         "nat": "FI"
//       }
//     ],
//     "info": {
//       "seed": "ae9142492e9e6ee3",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }

//   tounderstand this use online json 