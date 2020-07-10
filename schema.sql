
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;

-- Create the table tasks.
CREATE TABLE  department(
  departmentID int NOT NULL AUTO_INCREMENT,
  departmentName VARCHAR(30),
  PRIMARY KEY (departmentID)
);
CREATE TABLE  roles(
  roleID int NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL(2),
  PRIMARY KEY (roleID)
  FOREIGN KEY (departmentID) REFERENCES department(departmentID)
);
CREATE TABLE  employee(
  employeeID int NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (employeeID),
  FOREIGN KEY (roleID) REFERENCES roles(roleID)
  
);
