
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;

-- Create the table tasks.
CREATE TABLE  departments(
  departmentID int NOT NULL AUTO_INCREMENT,
  departmentName VARCHAR(30),
  PRIMARY KEY (departmentID)
);
CREATE TABLE  roles(
  roleID int NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL(10,2),
  PRIMARY KEY (roleID),
  departmentID INTEGER,
  FOREIGN KEY (departmentID) REFERENCES departments(departmentID)
);
CREATE TABLE  employees(
  employeeID int NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (employeeID),
  roleID INTEGER,
  managerID INTEGER,
  FOREIGN KEY (roleID) REFERENCES roles(roleID)
  
);
INSERT INTO roles (title, salary, departmentID)
VALUES ("lead softwareDev",70000,1);
INSERT INTO roles (title, salary, departmentID)
VALUES ("head softwareDev",90000,1);
INSERT INTO roles (title, salary, departmentID)
VALUES ("softwareDev",60000,1);

INSERT INTO roles (title, salary, departmentID)
VALUES ("lead",50000,2);
INSERT INTO roles (title, salary, departmentID)
VALUES ("head",80000,2);
INSERT INTO roles (title, salary, departmentID)
VALUES ("junior",40000,2);

INSERT INTO roles (title, salary, departmentID)
VALUES ("lead salesman",45000,3);
INSERT INTO roles (title, salary, departmentID)
VALUES ("head",50000,3);
INSERT INTO roles (title, salary, departmentID)
VALUES ("sales rep",40000,3);

INSERT INTO departments (departmentName)
VALUES ("programmers");
INSERT INTO departments (departmentName)
VALUES ("marketing");
INSERT INTO departments (departmentName)
VALUES ("sales");