import fetch from 'isomorphic-fetch';


export function getAction(){
  return (
    fetch('http://localhost:8080/email/jsonparserservlet', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer --SENDGRID API KEY--"
      },
      body:  JSON.stringify({
        "personalizations": [
          {
            "to": [
               "abc@mail.xy"
            ],
            "cc": [
              "abc@mail.xy",
              "abc@mail.xy",
              "abc@mail.xy",
              "abc@mail.xy"
            ],
            "bcc": [
               "abc@gmail.xyz",
               "abc@gmail.xyz"
            ],
            "subject": "Mail Send through AWS, tomcat8 and sendgrid"
          }
        ],
        "from": "abc@mail.xy",
        "reply_to": "abc@mail.xy",
        "subject": "Mail Send through tomcat8 and sendgrid",
        "content": [
          {
            "type": "text/html",
            "value": "<html>Hello</html>"
          }
        ]
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