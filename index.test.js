const request = require("supertest");
const app = require("./app");

// GET Users in a Group

// describe("GET /users/:groupId", () => {
//   it("it should return information about users in a group", () => {
//     const groupId = 1;

//    Make a GET request to the /groups endpoint with the provided groupId
//     request(app)
//       .get(`/users/${groupId}`)
//       .expect(200)
//       .end((err, res) => {
//         expect(res.body).toEqual({
//           user_name: "Aly",
//           latitude: 1,
//           longitude: 1,
//           favourite_drink: "water",
//         });
//       });
//   });

//   it("should return status 500 if the list of users can't be fetched", () => {
//     const groupId = "1000";

//     request(app).get(`/users/${groupId}`).expect(500);
//   });
// });

// Get Groups

// describe("GET /groups", () => {
//   it("returns status code 200 for positive result", async () => {
//     request(app)
//       .get("/groups")
//       .expect(200)
//       .end((err, res) => {
//         expect(res.body).toEqual([
//           {
//             id: 1,
//             group_name: "london_pubs",
//             updated_at: "2024-02-06T21:58:40.000Z",
//           },
//           {
//             id: 2,
//             group_name: "glasgow_pubs",
//             updated_at: "2024-02-06T21:58:40.000Z",
//           },
//           {
//             id: 30,
//             group_name: "Chris and Euan's Map",
//             updated_at: "2024-02-18T12:23:22.000Z",
//           },
//         ]);
//       });
//   });

//   it("returns bad request if groups can't be fetched", () => {
//     request(app).get("/groups").expect(500);
//   });
// });

// GET friend

describe("GET /friends", () => {
  it("should return list of friends when making the GET request", async () => {
    request(app)
      .get("/friends")
      .expect(200)
      .end((err, res) => {
        expect(res.body).toEqual([
          {
            id: 1,
            user_name: "Aly",
            address:
              "122 Chapman Street, Tower Hamlets, London, E1 2PH, United Kingdom",
            favourite_drink: "Gavi",
            latitude: "51.511890",
            longitude: "-0.059470",
          },
          {
            id: 2,
            user_name: "Andy",
            address:
              "The Danny Fiszman Bridge, London, England N7 7EZ, United Kingdom",
            favourite_drink: "Neck Oil",
            latitude: "51.554200",
            longitude: "-0.106500",
          },
          {
            id: 3,
            user_name: "Euan",
            address: "1 Bank End, Southwark, London, SE1 9BU, United Kingdom",
            favourite_drink: "Amstel",
            latitude: "51.506970",
            longitude: "-0.092510",
          },
          {
            id: 4,
            user_name: "Ben",
            address: "26 Mitchison Road, Islington, London, N1 3NG, United Kingdom",
            favourite_drink: "Buckfast",
            latitude: "51.544900",
            longitude: "-0.087000",
          },
          {
            id: 5,
            user_name: "Andrew",
            address: "40 Duncan Terrace, Islington, London, N1 8AL, United Kingdom",
            favourite_drink: "Doombar",
            latitude: "51.534200",
            longitude: "-0.103400",
          },
          {
            id: 6,
            user_name: "Afyq",
            address:
              "75 Clissold Crescent, Hackney, London, N16 9AR, United Kingdom",
            favourite_drink: "Magners",
            latitude: "51.556900",
            longitude: "-0.086800",
          },
          {
            id: 7,
            user_name: "Natasha",
            address: "11 New North Road, Hackney, London, N1 6JB, United Kingdom",
            favourite_drink: "Bloody Mary",
            latitude: "51.530500",
            longitude: "-0.084700",
          },
          {
            id: 20,
            user_name: "Giuseppe",
            address: "50 Rivington StLondon EC2A 3QA",
            favourite_drink: "Cranberry Juice",
            latitude: "51.526000",
            longitude: "-0.080850",
          },
          {
            id: 24,
            user_name: "Chris",
            address: "28 Tower Hamlets Road, E17 4RH",
            favourite_drink: "Guinness",
            latitude: "51.587680",
            longitude: "-0.018350",
          },
          {
            id: 26,
            user_name: "Aarti",
            address: "55 Rivington StLondon EC2A 3QA",
            favourite_drink: "Lychee Martini",
            latitude: "51.526170",
            longitude: "-0.080980",
          },
          {
            id: 27,
            user_name: "Janos",
            address: "40 Tower Hamlets Road",
            favourite_drink: "Prosecco",
            latitude: "51.128900",
            longitude: "1.303510",
          },
          {
            id: 29,
            user_name: "Jonathan",
            address: "35 Tower Hamlets Road, E17 4RH, London",
            favourite_drink: "gin",
            latitude: "51.588010",
            longitude: "-0.018920",
          },
          {
            id: 31,
            user_name: "Kirstin",
            address: "28 Tower Hamlets Road, E17 4RH, London",
            favourite_drink: "water",
            latitude: "51.587680",
            longitude: "-0.018350",
          },
          {
            id: 46,
            user_name: "Clare",
            address: "30 Tower Hamlets Road, London, E17 4RH",
            favourite_drink: "Gin & Tonic",
            latitude: "51.587710",
            longitude: "-0.018370",
          },
          {
            id: 47,
            user_name: "Pete",
            address: "128 New Cross Road, London",
            favourite_drink: "Vodka & Coke",
            latitude: "51.475860",
            longitude: "-0.047930",
          },
          {
            id: 48,
            user_name: "Fake Name",
            address: "55-57 Rivington StLondon EC2A 3QA",
            favourite_drink: "Water",
            latitude: "51.526170",
            longitude: "-0.080980",
          },
          {
            id: 49,
            user_name: "EralcM",
            address: "Dimma Park",
            favourite_drink: "Mojito",
            latitude: "55.981410",
            longitude: "-3.381630",
          },
          {
            id: 50,
            user_name: "davey",
            address: "Eh309al",
            favourite_drink: "IPA",
            latitude: "55.981468",
            longitude: "-3.381382",
          },
          {
            id: 51,
            user_name: "fakeaccount",
            address: "55-57 Rivington StLondon EC2A 3QA",
            favourite_drink: "Water",
            latitude: "51.526170",
            longitude: "-0.080980",
          },
          {
            id: 53,
            user_name: "drinks",
            address: "55-57 Rivington StLondon EC2A 3QA",
            favourite_drink: "Water",
            latitude: "51.526170",
            longitude: "-0.080980",
          },
        ]);
      });
  });

  it("returns bad request if friends can't be fetched", () => {
    request(app).get("/friends").expect(500);
  });
});
