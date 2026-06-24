# CS 465 Full Stack Development Portfolio Reflection

**Name:** Kashish Prajapati  
**Course:** CS 465 Full Stack Development I  
**Project:** Travlr Getaways Full Stack Web Application

## Architecture

Throughout this project, I worked with multiple frontend development approaches. The customer-facing portion of the application used Express with HTML, JavaScript, and Handlebars templates to generate pages on the server. This approach allowed content to be rendered before being sent to the browser and provided a traditional web application experience.

Later in the course, I developed a Single-Page Application (SPA) using Angular. Unlike the Express-rendered pages, the SPA loads once and dynamically updates content without requiring full page refreshes. This created a faster and more interactive user experience for administrative functions. Angular also allowed me to organize the application into reusable components and services, making the code easier to maintain and expand.

The backend used a NoSQL MongoDB database because it stores data in flexible JSON-like documents. This structure worked well for the travel application because trip information could be stored without requiring a rigid relational schema. MongoDB also integrates naturally with JavaScript, Node.js, and Express, making data exchange efficient throughout the application.

## Functionality

JSON differs from JavaScript because JSON is a lightweight format used to store and transfer data, while JavaScript is a programming language used to create application logic and functionality.

JSON connected the frontend and backend throughout this project. When the Angular application requested trip data, the Express API retrieved information from MongoDB and returned it in JSON format. The frontend then processed and displayed that data to users. This made communication between all parts of the application consistent and efficient.

Throughout development, I refactored code to improve organization and functionality. For example, I created a TripDataService to manage API calls rather than placing HTTP requests directly inside components. I also organized the application into reusable Angular components such as Trip List, Trip Card, Login, and Trip Edit. Reusable components reduce duplicate code, improve maintainability, and make future updates easier.

## Testing

Testing was an important part of the full stack development process. I tested API endpoints using GET, POST, PUT, and DELETE requests to verify that trip information could be retrieved, added, updated, and deleted correctly. Endpoints are specific URLs that allow communication between the frontend and backend, while methods define the actions performed on data.

As authentication and security were added, testing became more complex. Login functionality required validating credentials before allowing access to administrative features. This added another layer of testing because protected routes needed to verify authorized access. Understanding methods, endpoints, and security measures helped me better understand how full stack applications protect data while maintaining functionality.

## Reflection

This course significantly expanded my understanding of full stack web development and helped me move closer to my professional goals in software development. Before this course, I had limited experience connecting frontend interfaces, backend services, databases, and security features into a complete application. By the end of the course, I successfully developed a working full stack application that included a database, RESTful API, Angular frontend, and secure login functionality.

Throughout the course, I strengthened my skills in JavaScript, Node.js, Express, Angular, MongoDB, REST APIs, routing, component-based development, and application security. I also gained valuable experience debugging applications, troubleshooting errors, organizing code, and developing reusable components. These skills have increased my confidence as a developer and made me a stronger candidate for future software development opportunities.
