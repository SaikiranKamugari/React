fetch("https://randomuser.me/api")
  .then((response) => {
    if (response.ok) {
      throw new Error("text A");
    }
    return response.text();
  })
  .then((data) => {
    console.log("Response:", data);
    const jsondata = JSON.parse(data);
    console.log("DATA:", data);
    const firstName = jsondata.results[0].name.first;
    console.log("FIRSTNAME:", firstName);
    const lastName = jsondata.results[0].name.last;
    console.log("LASTNAME:", lastName);
  })
  .catch((error) => {
    console.error("text B", error);
  });
