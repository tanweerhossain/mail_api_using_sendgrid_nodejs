import fetch from 'isomorphic-fetch';


export function getAction(){
  return (
    fetch('http://localhost:8080/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        from: "from.k@example.in",
        to: ['to.k@example.in'],
        subject: 'Sendgrid API',
        textContent: 'Text Content',
        htmlContent: '<html><body>Hello Sir,</body></html>'
      }),
    }).then(((response)=>{
      return response.json();
    })
    ).then(
      responseData =>
        new Promise((resolve, reject) => {
          // Check if there is error in the responseData
          console.log(responseData);
          const { status, ...data } = responseData;
          window.alert('Mail send successfully. data = ' +  data.message);
          if (status) {
            // Else resolve with responseData
            resolve(responseData);
          } else {
            const { errors } = responseData;
            // In case of error, reject with returning error and errorCode
            reject({ errors });
          }
        }),
    )
);
}
  // return function(){
  //     axios.get("/api/send")
  //         .then((response) => {
  //           window.alert('Mail send successfully. See console');
  //           console.log('Response ====>',response);
  //         })
  //         .catch((error) => {
  //             window.alert('Error occured see console.');
  //             console.log('Errors ====>',error);
  //         })
  // }
  //}