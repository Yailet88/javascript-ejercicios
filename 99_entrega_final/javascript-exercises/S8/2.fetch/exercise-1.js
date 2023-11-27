//Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log();


fetch("https://api.agify.io?name=michael")
  .then((response) => {
    if (!response.ok) {
      throw new Error("problema con la red");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Presento un problema con la solicitud fetch:", error);
  });