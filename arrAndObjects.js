export const obj = () => {
    let simpleOBj = {
        name: "Biplab",
        "age": "27",
        profession: "dishwasher",
        "hobby": "sleeping"
    }

    let complexObj = {
        name1: "Sathi",
        name2: "Mouli",
        ages: {
            sathiAge: 12,
            mouliAge: 13
        },
        degress: [
            {
                school: "ABC",
                index: "Sathi",
                education: ["10th", "12th", "B.Tech"],
                jobs: [
                    {
                        company: "A",
                        designation: "Junior Software Engineer",
                        activeStatus: false
                    },
                    {
                        company: "B",
                        designation: "Associate Software Engineer",
                        activeStatus: true
                    }
                ]
            },
            {
                school: "DEF",
                index: "Mouli",
                education: ["10th", "12th", "B.Tech"],
                jobs: [
                    {
                        company: "B",
                        designation: "Junior Software Engineer",
                        activeStatus: true
                    },
                    {
                        company: "B",
                        designation: "Associate Software Engineer",
                        activeStatus: false
                    }
                ]
            }
        ]
    }
    return complexObj;
}

export const filterObject = () => {
    const complexObj = obj();
    //Sathi-----
    let sathiName = complexObj.name1;
    let sathiAge = complexObj.ages.sathiAge;
    //1st Way
    // let satheDegress = ((degress = []) =>{
    //     let degress_res = [];
    //     for(let i = 0; i < degress.length; i++){
    //         const obj = degress[i];
    //         if(obj.index === "Sathi"){
    //             degress_res.push(obj);
    //             break;
    //         }
    //     }
    //     return degress_res;
    // })(complexObj.degress);

    // //2nd Way
    // let satheDegress = complexObj.degress.filter(x => x.index === "Sathi")[0];
    // console.log(`Name: ${sathiName} \nAge:${sathiAge}`);
    // console.log(satheDegress);

    //3rd Way
    let {school, index, education, jobs} = complexObj.degress.find(x => x.index === "Sathi");
    let activeJob = jobs.find(x => x.activeStatus === true);
    const keys = Object.keys(activeJob); //Object.keys() helps us to get the keys or the propert names as in string array
    console.log(`Name: ${sathiName} \nAge:${sathiAge}\n`);
    console.log(`School: ${school} \nEducations: ${education.join(', ')}\n`);
    for(let j in keys){
        console.log(`${keys[j]}: ${activeJob[keys[j]]}`);
    }
}
