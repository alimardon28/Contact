// for(let rep = 1; rep <= 6; rep++){
//     console.log("ko'tarsin ${rep}");
// }


// const person = ["Shoxjahon" , 2003, "dasturchi" ["Alishe" , "Sardor"]]

// const typesOfPerson = []

// for(let i = 0; i < person.length; i++){
//     console.log(person[i]);
// }

// const years = [2000, 2003, 2002 , 1999]
// const ages = []


// for(let i = 0; i < years.length; i++){
//   ages.push(2022 - years[i])
// }

// for(let i = person.length - 1; i >= 0; i--){
//     console.log(person[i]);
// }


// for(let exercise = 1; exercise <=3; exercise++){
//     console.log(`Mashq ${exercise}`);

//     for(let i = 1; i <= 5; i++){
//      console.log(`Urinish ${i}`);
//     }
// }


// let rep = 1;

// while(rep <=5){
//     rep++

//     console.log(`Urinish ${rep}`);
// }

// let dice = Math.floor(Math.random() * 6) + 1

// while(dice !== 6){
//     console.log(`Sizda ${dice} raqami`);

//     dice = Math.floor(Math.random() * 6) + 1

//     if(dice === 6){
//         console.log('6 chiqdi!');
//     }
// }


let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elInputFinishid = document.querySelector(".inputFinishid");
let elInputCountry = document.querySelector(".inputCountry");
let elName = document.querySelector(".user_name");
let elList = document.querySelector(".list");
let elNameResult = document.querySelector(".userNameResult");

let contacts = []

elForm.addEventListener('submit' , function(evt){
    evt.preventDefault();



    let inputValue = elInput.value.trim()
    let inputFinishid = elInputFinishid.value.trim()
    let inputCountry = elInputCountry.value.trim()


    let contact = {
        name:inputValue,
        relationship:inputFinishid,
        phone:inputCountry
    }

     contacts.push(contact);
     elInput.value = null;
     elList.innerHTML = null


     for(let item of contacts){
         let newItem = document.createElement('li');
         let newHeading = document.createElement('h5');
         let newParagraph = document.createElement('p');
         let newLink = document.createElement('a');

         newItem.textContent = item.name
         newHeading.textContent = item.relationship
         newParagraph.textContent = item.phone
         newItem.setAttribute('class' , 'user__item fw-bold text-light fs-4 border bg-primary')
         newHeading.setAttribute('class' , 'cardHeading  fw-bold text-light fs-4 border bg-primary')
         newParagraph.setAttribute('class' , 'cardParagrap fw-bold text-light fs-4 border bg-primary')
         newLink.setAttribute('class' , 'cardLink border bg-primary')
         elList.appendChild(newItem)
         elList.appendChild(newHeading)
         elList.appendChild(newParagraph)
     }



    //User name
    let userNameValue = elName.value;
    elNameResult.textContent = userNameValue;

})
