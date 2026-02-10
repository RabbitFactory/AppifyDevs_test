Live link - https://appify-devs-test.vercel.app/

Setup Instructions - 
To set up this project, first clone the project to your local machine, then install the dependencies (npm install), then run the command (npm run dev) then visit (http://localhost:3000/) to see the result.

Tech stack used - 
Next.js
Typescript
Tailwind CSS
Recharts
Zustand

Architecture decisions - 
I kept the charts components in separate files to make them individually reuseable. Which also means each chart components can be debugged separately. Navbar and Sidebar and the Main dashboard is separated in the layout to avoid unnecessary re-renders. Mock data is kept separate from UI logic so it can be modified without messing with the UI. Global state is used for filters and dashboard data.

Assumptions made - 
All data was mock so didn't need any backend. Only one type of user was assumed. No authentication is implemented assuming it wasn't mandatory.