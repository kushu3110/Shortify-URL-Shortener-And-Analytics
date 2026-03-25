# Shortify : URL Shortener and Analytics

**Glimpse** - Shortify allows you to shotner your URLs, maintaining a dashboard of user-specific URLs and provides analytics for day-wise click events.

<img width="500" height="300" alt="url" src="https://github.com/user-attachments/assets/f63071a4-c3e4-4b02-b66a-663c23524a83" />


This project contains 2 modules : 

1. `url-shortener-sb` : Springboot Java based Backend application, User authentication via JWT, Uses MySQL database locally.
2. `url-shortener-react` : React JS based Front-end application with private routes for authenticated users and non-accessible pages for un-authenticated ones, Uses Chart.JS to show analytics.

**Steps to run the project locally :**

**PRE-REQUISITES :** 
1. MySQL server and workbench.
2. NodeJS environment.
3. Create a MySql server - `localhost:3306`, add a database named `urlshortenerdb` in the server with credentials (username - root, password - root)
4. Must have softwares - IntelliJ IDE, VS Code, Postman.
5. Open terminal > Select desired folder to keep project > Paste : `git clone https://github.com/kushu3110/Shortify-URL-Shortener-And-Analytics.git`

**(A) Run and Test backend application**
1. MySQL should be running before testing backend application. 
2. Open the cloned folder > `url-shortener-sb` in IntelliJ IDE.
3. Run the project > It will be live on `localhost:8080`.
4. For testing, Open postman.
5. Import the `url-shortener-backend-apis.json` collection in postman.
6. Example and formatting are already mentioned in postman collection, testing accordingly.
7. For all the API requiring Bearer token as header - Replace the token with the `/login` api's response token, otherwise the application will fail.

**(B) Run and Test frontend application**
1. `url-shortener-sb` should be running before testing frontend application. 
2. Open the cloned folder > `url-shortener-react` in VS Code.
3. Terminal > New terminal.
4. Install npm - Paste this : `npm install`.
5. To run the application - Paste this : `npm run dev`.
6. Application will be live on `localhost:5173`
7. Essentially, `LoginPage`, `RegisterPage` and `Dashboard` are the areas of focus, Try to generate short URL's > when generated pop-up shows up > reload the page > View analytics.

**User-specific analytics :**

  <img width="500" height="300" alt="Screenshot 2026-03-25 at 4 16 50 PM" src="https://github.com/user-attachments/assets/46eebb4e-8c74-4524-b920-f1a7bffbbc6a" />

**URL-specific analytics :**

  <img width="500" height="300" alt="Screenshot 2026-03-25 at 4 19 19 PM" src="https://github.com/user-attachments/assets/63f3e85d-8afa-4943-9e9c-81d905995159" />


Thankyou so much for visiting this page !

Kushagra Mishra (kushagram3110@gmail.com)

PS - I have kept `application.yml` hard-coded intentionally because `.env` won't get pushed in commit and the formatting of environment variables will confuse the visitor.










   
