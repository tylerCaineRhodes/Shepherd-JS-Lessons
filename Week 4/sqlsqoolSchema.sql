DROP DATABASE IF EXISTS sqool;

CREATE DATABASE sqool;
USE sqool;

CREATE TABLE teachers (
  teacher_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name varchar(255) NOT NULL,
  department VARCHAR(255) NOT NULL
);


CREATE TABLE students (
  student_id INT AUTO_INCREMENT NOT NULL,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  PRIMARY KEY (student_id)
);


CREATE TABLE classes (
  class_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name varchar(255) NOT NULL,
  room int NOT NULL,
  teacher_id INT,
  FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id)
);


CREATE TABLE classes_students (
  class_id int,
  student_id int,
  FOREIGN KEY (class_id) REFERENCES classes(class_id),
  FOREIGN KEY (student_id) REFERENCES students(student_id)
);

insert into teachers (name, department) values ('Morgan', 'PSY');
insert into teachers (name, department) values ('Sebastian', 'CS');
insert into teachers (name, department) values ('Kelly', 'CS');

insert into classes (name, room, teacher_ID) values ('CS101', 114, 2);
insert into classes (name, room, teacher_ID) values ('CS102', 114, 2);
insert into classes (name, room, teacher_ID) values ('CS151', 222, 3);
insert into classes (name, room, teacher_ID) values ('CS245', 118, 3);
insert into classes (name, room, teacher_ID) values ('CS330', 220, 3);
insert into classes (name, room, teacher_ID) values ('PSY101', 318, 1);
insert into classes (name, room, teacher_ID) values ('PSY201', 318, 1);

insert into students (name, email) values ('Tae','tae@email.com');
insert into students (name, email) values ('Jayo','jayo@email.com');
insert into students (name, email) values ('Rebekah','Rebekah@email.com');
insert into students (name, email) values ('Brandon','Brandon@email.com');
insert into students (name, email) values ('Albrey','Albrey@email.com');
insert into students (name, email) values ('Katherine','Katherine@email.com');
insert into students (name, email) values ('Kiran','Kiran@email.com');

insert into classes_students (class_id, student_id) values (1, 1);
insert into classes_students (class_id, student_id) values (1, 2);
insert into classes_students (class_id, student_id) values (2, 4);
insert into classes_students (class_id, student_id) values (3, 3);
insert into classes_students (class_id, student_id) values (4, 3);
insert into classes_students (class_id, student_id) values (4, 5);
