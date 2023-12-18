const swaggerOptions = {
    definition: {
      openapi: '3.0.0', // specify the version of OpenAPI Specification
      info: {
        title: 'Your API Title',
        version: '1.0.0',
        description: 'Your API Description',
      },
    },
    apis: ['./Routes/*.js'], // specify the path to your route files
  };
  
  module.exports = swaggerOptions;
  