with Docker {
    Run cmd docker-compose build
    Run docker-compose up
    Run docker-compose exec app npm test
}
without Docker

firstly 
      run npm i to install all the dependencies needed in the project
Secondly
      make an .env file and PORT variable with in it the port value where you want to host the project
      make MONGO_URI variable with your mongoDB database uri to connect it with it.
Thirdly
    run node Seeders/pizzaseeder.js for adding fake data in your DATABASE.
Fourthy
    I have made the test case for the API you can run it by npm test cmd
Fifthy
    I have implemented swagger so you can check the API there.



