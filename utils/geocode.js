const axios = require("axios");
const addresses = [
  "155 Homerton High St, London E9 6AS, UK",
  "Park Row, London SE10 9NW, UK",
  "177 Green Lanes, London N16 9DB, UK",
  "19 Perth Rd, Finsbury Park, London N4 3HB, UK",
  "Marble Quay, St Katharine's Way, London E1W 1UH, UK",
  "Hanbury Arms, 33 Linton St, London N1 7DU, UK",
  "194 Southgate Rd, London N1 3HT, UK",
  "64-73 Minories, London EC3N 1LA, UK",
  "108 Wapping High St, London E1W 2NE, UK",
  "19 Martello St, London E8 3PE, UK",
  "54 Pentonville Rd, London N1 9HF, UK",
  "1 Kitto Rd, London SE14 5TW, UK",
  "84-86 Essex Rd, London N1 8LU, UK",
  "178 Hoxton St, London N1 5LH, UK",
  "35 Denmark Hill, London SE5 8RS, UK",
  "105 Stoke Newington Church St, London N16 0UD, UK",
  "Compton Arms, 4 Compton Ave, London N1 2XD, UK",
  "121 Stoke Newington Rd, London N16 8BT, UK",
  "34 Park St, London SE1 9EF, UK",
  "13 Liverpool Rd, London N1 0RW, UK",
  "98-102 Holloway Rd, London N7 8JE, UK",
  "45 Harrowby St, London W1H 5HT, UK",
  "94-96 Wandsworth High St, London SW18 4LB, UK",
  "70 Landor Rd, London SW9 9PH, UK",
  "83 St Paul's Rd, Greater, London N1 2LY, UK",
  "125 Saffron Hill, London EC1N 8QS, UK",
  "123 Shoreditch High St, London E1 6JE, UK",
  "10 Stafford St, Greater, London W1S 4RX, UK",
  "77 Bedford Hill, London SW12 9HD, UK",
  "418 St John St, London EC1V 4NJ, UK",
  "1 Blackfriars Bridge, London SE1 9UD, UK",
  "57 St John St, London EC1M 4AN, UK",
  "1 Islington Grn, London N1 2XA, UK",
  "42 Newington Causeway, London SE1 6DR, UK",
  "School Of Oriental & African Studies, 10 Thornhaugh St, London WC1H 0XG, UK",
  "156 High St, London SE20 7EU, UK",
  "107A Culford Rd, London N1 4HT, UK",
  "102 New Cavendish St, London W1W 6XW, UK",
  "45 Upper St, London N1 0PN, UK",
  "226 Shoreditch High St, London E1 6PJ, UK",
  "23-25 New End, London NW3 1JD, UK",
  "52 Canonbury Rd, London N1 2HP, UK",
  "460 New Cross Rd, London SE14 6TJ, UK",
  "245-247 Baker St, Greater, London NW1 6XE, UK",
  "The Talbot, 1 Mill Hill Rd, London W3 8JB, UK",
  "76 Broadway Market, London E8 4RA, UK",
  "40 Liverpool St, London EC2M 7QN, UK",
  "336 Old St, London EC1V 9DR, UK",
  "75 Grosvenor Ave, London N5 2NN, UK",
  "55 Parkway, London NW1 7AH",
  "87 Noel Rd, Greater, London N1 8HD, UK",
  "119 Kensington Church St, London W8 7LN, UK",
  "84 Commercial St, London E1 6QQ, UK",
  "25 Danbury St, London N1 8LE, UK",
  "19 Upper Mall, London W6 9TA, UK",
  "52 York Wy, London N1 9AB, UK",
  "the Bull Pub, 496 Streatham High Rd, London SW16 3QB, UK",
  "174-180 Old St, London EC1V 9RQ, UK",
  "333 Old St, London EC1V 9LE, UK",
  "River Lee, Sweetwater Mooring, White Post Ln, London E9 5EN, UK",
  "15 Denman St, London W1D 7HN, UK",
  "Unit 7 Queen's Yard, London E9 5EN, UK",
  "94 Goldsmiths Row, London E2 8QY, UK",
  "40 Parkholme Rd, London E8 3AG, UK",
  "2A Corsica St, London N5 1JJ, UK",
  "142 Commercial St, London E1 6NU, UK",
  "Liverpool St, London EC2M 7PY, UK",
  "402 Old Ford Rd., Bow, London E3 5NR, UK",
  "Unit 15, Blackhorse Ln, London E17 5QJ, UK",
  "190 Euston Rd., London NW1 2EF, UK",
  "1, Sky Garden, Sky Garden Walk, London EC3M 8AF, UK",
];

const geocodeAccessToken = "X";

const geoForwardUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

const geocodeAddress = async () => {
  for (const address of addresses) {
    try {
      const response = await axios.get(
        `${geoForwardUrl}/${encodeURIComponent(
          address
        )}.json?access_token=${geocodeAccessToken}`
      );

      const coordinates = response.data.features[0].geometry.coordinates;
      console.log(`${address}: ${coordinates[1]}, ${coordinates[0]}`);
    } catch (error) {
      console.error(`Error geocoding ${address}: ${error.message}`);
    }
  }
};

geocodeAddress();

module.exports = geocodeAddress;
