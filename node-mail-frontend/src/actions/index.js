import fetch from 'isomorphic-fetch';


export function getAction(){
  return (
    fetch('http://localhost:8080/email/jsonparserservlet', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body:  JSON.stringify({
        "personalizations": [
          {
            "to": [
               "tanweer@myanatomy.in"
            ],
            "cc": [
               "tanweerhossainatspacebbsr@hotmail.com"
            ],
            "bcc": [
               "tanweerhossainatspacebbsr@gmail.com",
               "tanweerhossain.1996@gmail.com"
            ],
            "subject": "Mail Send through tomcat8 and sendgrid"
          }
        ],
        "from": "tanweer@myanatomy.in",
        "reply_to": "ajeet@myanatomy.in",
        "subject": "Mail Send through tomcat8 and sendgrid",
        "content": [
          {
            "type": "text/html",
            "value": "<html><p>Hi Sir,<br /><br />Its Done</p></html>"
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