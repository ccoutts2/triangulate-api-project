/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("pubs").del();
  await knex("pubs").insert([
    {
      pub: "Adam and Eve",
      address: "155 Homerton High St, London E9 6AS, UK",
      latitude: 51.54893,
      longitude: -0.04045,
      rating: 32,
    },
    {
      pub: "The Anchor",
      address: "34 Park St, London SE1 9EF, UK",
      latitude: 51.51595,
      longitude: -0.05209,
      rating: 44,
    },
    {
      pub: "Trafalgar Tavern",
      address: "Park Row, London SE10 9NW, UK",
      latitude: 51.48231,
      longitude: -0.00247,
      rating: 40,
    },
    {
      pub: "Clissold Park Tavern",
      address: "15a Church St, London N16 0NX, UK",
      latitude: 51.55781,
      longitude: -0.09082,
      rating: 49,
    },
    {
      pub: "Faltering Fullback",
      address: "19 Perth Rd, Finsbury Park, London N4 3HB, UK",
      latitude: 51.56847,
      longitude: -0.10822,
      rating: 34,
    },
    {
      pub: "Dickens Inn",
      address: "15a Church St, London N16 0NX, UK",
      latitude: 51.50644,
      longitude: -0.07024,
      rating: 29,
    },
    {
      pub: "The Hanbury Arms",
      address: "146 Canonbury Rd, London N1 2DG, UK",
      latitude: 51.53621,
      longitude: -0.0935,
      rating: 41,
    },
    {
      pub: "The Hunter S",
      address: "34 Park St, London SE1 9EF, UK",
      latitude: 51.54596,
      longitude: -0.08345,
      rating: 38,
    },
    {
      pub: "Captain Kidd",
      address: "30-34 Cumberland St, London SW1V 4LT, UK",
      latitude: 51.50332,
      longitude: -0.05786,
      rating: 30,
    },
    {
      pub: "Lincoln Arms",
      address: "52 York Wy, London N1 9AB, UK",
      latitude: 51.54208,
      longitude: -0.05829,
      rating: 49,
    },
    {
      pub: "The Penton",
      address: "54 Pentonville Rd, London N1 9HF, UK",
      latitude: 51.53205,
      longitude: -0.10904,
      rating: 33,
    },
    {
      pub: "The Kenton",
      address: "1 Kitto Rd, London SE14 5TW, UK",
      latitude: 51.46756,
      longitude: -0.04941,
      rating: 46,
    },
    {
      pub: "The George & Vulture",
      address: "84-86 Essex Rd, London N1 8LU, UK",
      latitude: 51.53843,
      longitude: -0.09895,
      rating: 38,
    },
    {
      pub: "The Hoxton",
      address: "178 Hoxton St, London N1 5LH, UK",
      latitude: 51.53308,
      longitude: -0.07985,
      rating: 31,
    },
    {
      pub: "The Cambria",
      address: "35 Denmark Hill, London SE5 8RS, UK",
      latitude: 51.47239,
      longitude: -0.09282,
      rating: 49,
    },
    {
      pub: "The Auld Shillelagh",
      address: "105 Stoke Newington Church St, London N16 0UD, UK",
      latitude: 51.56189,
      longitude: -0.07947,
      rating: 47,
    },
    {
      pub: "The Compton Arms",
      address: "4 Compton Ave, London N1 2XD, UK",
      latitude: 51.54369,
      longitude: -0.10192,
      rating: 36,
    },
    {
      pub: "The Three Crowns",
      address: "121 Stoke Newington Rd, London N16 8BT, UK",
      latitude: 51.55593,
      longitude: -0.07484,
      rating: 38,
    },
    {
      pub: "The Hunter S",
      address: "34 Park St, London SE1 9EF, UK",
      latitude: 51.50697,
      longitude: -0.09292,
      rating: 29,
    },
    {
      pub: "The Wenlock Arms",
      address: "13 Liverpool Rd, London N1 0RW, UK",
      latitude: 51.53374,
      longitude: -0.10704,
      rating: 48,
    },
    {
      pub: "The Coronet",
      address: "98-102 Holloway Rd, London N7 8JE, UK",
      latitude: 51.55008,
      longitude: -0.10844,
      rating: 28,
    },
    {
      pub: "The Beehive",
      address: "45 Harrowby St, London W1H 5HT, UK",
      latitude: 51.51754,
      longitude: -0.16411,
      rating: 30,
    },
    {
      pub: "The Spread Eagle",
      address: "94-96 Wandsworth High St, London SW18 4LB, UK",
      latitude: 51.45737,
      longitude: -0.19468,
      rating: 38,
    },
    {
      pub: "The Jolly Gardeners",
      address: "70 Landor Rd, London SW9 9PH, UK",
      latitude: 51.46566,
      longitude: -0.12605,
      rating: 49,
    },
    {
      pub: "The Alma",
      address: "83 St Paul's Rd, Greater, London N1 2LY, UK",
      latitude: 51.54656,
      longitude: -0.09857,
      rating: 32,
    },
    {
      pub: "The Sekforde Arms",
      address: "125 Saffron Hill, London EC1N 8QS, UK",
      latitude: 51.51974,
      longitude: -0.10651,
      rating: 30,
    },
    {
      pub: "The Old Blue Last",
      address: "123 Shoreditch High St, London E1 6JE, UK",
      latitude: 51.52705,
      longitude: -0.07838,
      rating: 45,
    },
    {
      pub: "The Punch Bowl",
      address: "10 Stafford St, Greater, London W1S 4RX, UK",
      latitude: 51.50868,
      longitude: -0.14128,
      rating: 47,
    },
    {
      pub: "The Regent",
      address: "77 Bedford Hill, London SW12 9HD, UK",
      latitude: 51.44271,
      longitude: -0.14924,
      rating: 28,
    },
    {
      pub: "The Ship",
      address: "68 Borough Rd, London SE1 1DX, UK",
      latitude: 51.52007,
      longitude: -0.10544,
      rating: 37,
    },
    {
      pub: "Howl at The Moon",
      address: "178 Hoxton St, London N1 5LH, UK",
      latitude: 51.53308,
      longitude: -0.07985,
      rating: 32,
    },
  ]);
};
