let mobiles = {
    iphones : {
        v13promax : {
            storage : "256gb",
            ram : "8gb",
            price : "400,000"
        },
        v13 : {
            storage : "256gb",
            ram : "8gb",
            price : "370,000" 

        },
        v12 : {
            storage : "64gb",
            ram : "8gb",
            price : "175,000" 


        }

    },
    samsung : {
        a13 : {
            storage : "128gb",
            ram : "4gb",
            price : "40,000"
        },
        a32 : {
            storage : "128gb",
            ram : "6gb",
            price : "46,000"

        },
        a73 : {

            storage : "256gb",
            ram : "8gb",
            price : "115,000"
        }

    },
    infinix : {
        smart6 : {
            storage : "64gb",
            ram : "3gb",
            price : "23,000"
        },
        note12g96 : {
            storage : "128gb",
            ram : "8gb",
            price : "41,000"

        },
        zeroxpro : {

            storage : "128gb",
            ram : "8gb",
            price : "46,000"

        }

    },
    xiomi : {
        realme : {
            storage : "64gb",
            ram : "3gb",
            price : "23,000"
        },
        readme : {
            storage : "128gb",
            ram : "8gb",
            price : "41,000"

        },
        myme : {

            storage : "128gb",
            ram : "8gb",
            price : "46,000"

        }

    }
}

let mobileCompany = document.getElementById("mobileCompany");
let mobileVersion = document.getElementById("mobileVersion");


function fillmainkeys(){
    let mainKeys = Object.keys(mobiles);
    mobileCompany.innerHTML = "";

    for(var i = 0 ; i < mainKeys.length ; i++){
        mobileCompany.innerHTML += `<option>${mainKeys[i]}</option>`
    }
    

}
fillmainkeys();

function fillNestedkeys(){
    // mobileCompany.disabled = false;
    mobileVersion.disabled = false; 
    let nestedKeys = Object.keys(mobiles[mobileCompany.value]);
    mobileVersion.innerHTML = "";
    for(var i = 0 ; i < nestedKeys.length ; i++){
        mobileVersion.innerHTML += `<option>${nestedKeys[i]}</option>`
    }
    



    console.log(nestedKeys)
    

   

}

function search(){

    let res = mobiles[mobileCompany.value][mobileVersion.value];
    let para1 = document.getElementById("para1");
    let myString = JSON.stringify(res); 
    document.getElementById("para1").innerHTML = myString;
//     para1.innerHTML += `${ mobiles[mobileCompany.value][mobileVersion.value]}`
//     console.log(res);
 }