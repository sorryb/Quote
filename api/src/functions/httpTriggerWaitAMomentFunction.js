const { app } = require('@azure/functions');

app.http('httpTriggerWaitAMomentFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'user';

        //return { body: `Hello, ${name}!` };
        // Return a properly serialized JSON object
        return {
            body: JSON.stringify({ message: `Wait a moment, ${name}!` }),  // Use JSON.stringify to ensure correct serialization
            headers: { 'Content-Type': 'application/json' }
        };
    }
});
