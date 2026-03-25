# Shortify : URL Shortener and Analytics

**Glimpse** - Shortify allows you to shotner your URLs, maintaining a dashboard of user-specific URLs and provides analytics for day-wise click events.

This project contains 2 modules : 

1. `url-shortener-sb` : Springboot Java based Backend application, User authentication via JWT, Uses MySQL database locally.
2. `url-shortener-react` : React JS based Front-end application with private routes for authenticated users and non-accessible pages for un-authenticated ones, Uses Chart.JS to show analytics.

**Steps to run the project locally :**

**PRE-REQUISITES:** 
1. MySQL server and workbench.
2. NodeJS environment.
3. Create a MySql server - `localhost:3306`, add a database named `urlshortenerdb` in the server with credentials (username - root, password - root)
4. Must have softwares - IntelliJ IDE, VS Code, Postman.
