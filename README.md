# CONTACTS SCHEDULE APP
App to personal contacts on web .

- App available at:  [https://contactsschedule.herokuapp.com](https://c-news.herokuapp.com)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Enviroments

In the app two environments were developed to run the application, API and MOCK. The MOCK environment performs requests and receives responses with false but functional data for the project. The API environment performs requests and receives responses through the firebase by performing HTTP requests to the server, bringing real and dynamic data simulating a real use of the project.

To set app enviroment you should change the file : (./src/services/ServiceDataSource.js)

```
  constructor(mockDatasource, apiDataSource) {
    this.BUILD_TYPE = BUILD_TYPES.API // on BUILD_TYPES you can use MOCK or API enviroment .
    this.mockDatasource = mockDatasource
    this.apiDataSource = apiDataSource
  }
```

PS: To run project on API build type you need define .env variables to firebase credentials .

## Deployment

`npm run build` creates a `build` directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.
