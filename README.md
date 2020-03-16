You can visit the app on --->  https://niladri31.github.io/grocery-web-app-using-angular/



<h2>About The project</h2>
This project is made in angular 8 using VS code . It is my Individual Project which was made as my design and analysis of algo assignment .

My front end is made in HTML , CSS and BOOTSTRAP . I have made use bootstrap classes "cards" for making cards in which all my grocery items are listed. btn-primary for button , "table class for making table and rest of the items like forms etc are all made of html and css.I have made use of bootstrap validation for forms - 10 digits for mobile no. , 6 digits for pincode and rest are compulsory fields. One can not click the next button unless you made all field valid .

In Angular I have made use of Routers (which are if you want to navigate to different pages in your application, but you also want the application to be a SPA (Single Page Application), with no page reloading, you can use the Routing module.) to navigate to different components

I have used services - Angular services are singleton objects which get instantiated only once during the lifetime of an application. They contain methods that maintain data throughout the life of an application, i.e. data does not get refreshed and is available all the time. The main objective of a service is to organize and share business logic, models, or data and functions with different components of an Angular application. i.e. it behaves as a global method declaration I have defined all my grocery items in mainservice.ts and methods find grocery , get selected items index in it which i need to access in different components in my project .

I have made use of different component -Components are like the basic building block in an Angular application to make every category components and imported services to so that every component can access the methods of services .

For adding to cart i have made use of parameterized router to pass the item id and quantity user enters to cart coponent . In cart component using the typescript file (Used in angular which is superscript of javascript ) to get the parameters and store it in Local storage of browsers(LocalStorage is a type of web storage that allows Javascript websites and apps to store and access data right in the browser with no expiration date. This means the data stored in the browser will persist even after the browser window has been closed) to store the cart components . Local storage mainly uses getItems and setItems method to get and store data . We can use Ajax to send local storage data to servers.






# Prac

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
