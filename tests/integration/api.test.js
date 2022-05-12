import { api } from "@serverless/cloud";



test("Get '/data' should return a message of success", async () => {
  const { body } = await api.get("/data").invoke();
  expect(body).toMatchObject({ "message": "Information retrieved successfully" });
});

test("Post '/data' should return a message of success", async () => {
  const { body } = await api.post("/data").invoke(POST_BODY);
  expect(body).toMatchObject({ "message": "Information saved successfully" });
});

test("Get '/tweets' should return a message of success", async () => {
  const { body } = await api.get("/tweets").invoke(POST_BODY);
  expect(body).toMatchObject({'message':"Tweets retrieved successfully"});
});










const POST_BODY = {
   "names" : "Andrés García"
  ,"role" : "NodeJS Developer"
  ,"personal_summary" : "I've always tried to be very practical; thinking about the solutions to every problem as a minimum viable product that complements to each others, and writing prioritized to-do lists in the notes of the cell phone or computer. You can imagine my surprise when the agile Scrum methodology appeared. <br> Working on John Uribe as a technical support, I understood so difficult is for developers understand the real needs of a user; and this makes me focus my work on the communication with the users."
  ,"interests" : [
        "Music"
      ,"Technology"
      ,"Healthy Food"
      ,"Science"
      ,"LifeHacks"
      ,"Anime"
      ,"Meditation"   
  ]
  ,"contact" : {
        "mobile" : "304 400 2027"
      ,"email" : "andres6arcia@gmail.com"
      ,"address" : "Cr 43a #45bsur 81 Envigado(Ant)"
  }
  ,"work" : [
        {
            "company" : "Salud Electrónica S.A.S."
          ,"position" : "Developer Analyst | 2019 - Present" 
          ,"logo" : ""
          ,"summary" : "Building a replacement software to massively send, receive and manage the information about medicines not covered by basic plan of health that EPSs, IPSs and Drugstores should send to the health ministry. Working too as a technical support with the users. BackEnd developer in NodeJS with Express, TypeScript, MongoDB and Postgres. FrontEnd maintenance in TypeScript, Angular and Bootstrap."
        },{
            "company" : "John Uribe e Hijos S.A."
          ,"position" : "Developer Analyst | 2012 - 2019" 
          ,"logo" : ""
          ,"summary" : "Working on accounting software, focus on improving the user experience and easy to use, thinking on the elderly accountants and working with them as a technical support. Maintenance of client-server applications developed in Power Builder with Postgresql." 
        }
  ]
  ,"education" : [
      {
            "title" : "Software Management Specialist"
          ,"detail": "Promotion 2017"
          ,"college": "Universidad Católica de Oriente, Rionegro(Ant)"
      },{
            "title" : "System Engineering"
          ,"detail": "Promotion 2010 Focus on Neural Networks"
          ,"college": "Universidad Católica de Oriente, Rionegro(Ant)"
      }
  ]
  ,"skills" : [
        "Strongly disciplined and organized"
      ,"The ability to follow instructions and deliver quality results"
      ,"The ability to work under pressure and multi-task"
      ,"Successful working in a team environment, as well as independently"
  ]
}