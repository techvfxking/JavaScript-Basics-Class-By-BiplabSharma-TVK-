export const callMovieApi = async () => {
    const apiKey = `11531d44`;
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=Manju&page=1`;
    // const response = await fetch(url);
    // if(response.status === 200 && response.statusText.toLowerCase() === "ok"){
    //     const data = await response.json();
    //     console.log(data);
    // }
    //Event Loop architecture
    console.log("Hello...request is going on...");
    fetch(url).then((value) => {
        if(value.status === 200 && value.statusText.toLowerCase() === "ok"){
            console.log("Final Request is done 1st part, now reading the data");

            value.json().then((data) => {
                console.log("Final Json");
                console.log(data);
            });

            console.log("Request still going on");
        }
    });
    console.log("Request still going on");
}