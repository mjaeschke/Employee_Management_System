1. Create a `config.js` file that connects to the MySQL  instance running on my machine [Docs](https://www.npmjs.com/package/mysql#introduction) and export the `connection`
​
2. Create a `schema.js` that creates the `Employee`, `Department`, and `Role` tables (using the exported `connection` variable) by executing the commands in `schema.sql`
​
   - Create a `schema.sql` that contains the SQL commands to create the above tables
   - Check the MySQL workbench for the created tables
​
3. Create a `services.js` that contains simple to use functions for database interactions; 
​
   - ```js
     const connection = require("./config")
     
     function addDepartment(name) {
     	connection.query(`INSERT INTO department VALUES(${name})`)
     }
     ```
​
   - Test all functions
​
4. Seed database
​
   - Option 1: Create a JSON file `seed.json` that you parse in `seed.js`, which calls functions from `services.js`
   - Option 2: Create a `seed.sql` that you execute in `seed.js` that takes care of dropping and populating your tables
​
5. Create `main.js` that imports `services.js` and allows the user to request retrieval/modification/creation of data via [`inquirer`](https://www.npmjs.com/package/inquirer/v/0.2.3)
​
   - Print out data using [console.table](https://www.npmjs.com/package/console.table)
​
​
​
### SQL JOINS
​
https://www.mysqltutorial.org/mysql-join/
​
- Inner Joins | `INNER JOIN` 
  - Includes only rows that matches a condition for both compared tables
  - Use Case: Return all employee that have a `Manager` role
- Left Joins | `LEFT JOIN`
  - Includes all rows from the *left* table, but merges the rows that match from the *right* table
- Right Joins | `RIGHT JOIN`
  - Includes all rows from the *right* table, but merges the rows that match from the *left* table
- Cross Joins | `CROSS JOIN`
  - For every row in *table1*, merge with every row in *table2*