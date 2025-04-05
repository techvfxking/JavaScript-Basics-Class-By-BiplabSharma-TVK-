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
                    ,
                    {
                        company: "B",
                        designation: "Associate Software Engineer",
                        activeStatus: false
                    }
                ]
            }
        ]
    }
}  
