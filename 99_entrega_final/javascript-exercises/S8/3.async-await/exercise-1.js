//Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.


const runTimeOutAsync =async () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    });

    await promise;

    console.log('Time out!');
};

runTimeOutAsync();

