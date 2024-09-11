This project was made with StackBlitz.com. I started with a template that uses Vite, Vue.js and the vue composition API.

The columns of the grid are dynamically generated. This can be demonstrated by manupulating the dealData object on line 3 of App.vue file. 
There are three data sets available, deals_1.json, deals_2.json and deals_3.json. Those are JSON files that are stored in the data folder. You can change 
which file is loaded into the grid and the grid will use the data to build the table.

I ran into trouble with the testing. I was able to get both the vitest or jest frameworks configured correctly, however you need the 
vue.js 'test-utils' library to easily test vue components. I was unable to get this utility to work correctly. I did leave in a rudimentary 
test in the __tests__ folder as an example.

Known bug: There is an issue with the search input control. Intermittently, the filtering will stop working. To get it working again
the user will have to hit return with the cursor in the field.


To run the project
1) download the repo from github
2) run 'npm install' in a terminal
3) next run 'npm run dev'

Thank you,
Java Imhoff
   
