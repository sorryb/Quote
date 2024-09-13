const { app } = require('@azure/functions');

const https = require('https');

const unplashApi = 'https://picsum.photos/1600/900'; //'https://api.unsplash.com/1600x900?dream';
const quotes = [
  'Wherever you go, no matter what the weather, always bring your own sunshine.',
  'You\’re awesome.',
  'Happiness is the only thing that multiplies when you share it.',
  'It always seems impossible until it is done.',
  'Let your unique positive energy inspire confidence in others.',
  'The best is yet to come.',
  'You\'re capable of more than you can even dream.',
  'You deserve the best.',
  'Keep going, you\'re doing well.',
  'Stay positive; stay hopeful',
  'Appear weak when you are strong, and strong when you are weak.',
  'The supreme art of war is to subdue the enemy without fighting.',
  'Supreme excellence consists of breaking the enemy s resistance without fighting.',
];

async function getImage() {
  return new Promise((resolve, reject) => {
    https.get(unplashApi, (response) => {
      // API returns a HTTP 302 code, we only want the final image URL
      resolve(response.headers.location);
    }).on('error', (error) => {
      reject(error.message);
    });
  });
}

app.http('httpTriggerQuotesFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const image = await getImage();
        const quoteText = quotes[Math.floor(Math.random() * quotes.length)];

        return {
            body: JSON.stringify( {   image: image,   text: quoteText } ),  
            headers: { 'Content-Type': 'application/json' }
        };
    }
});
