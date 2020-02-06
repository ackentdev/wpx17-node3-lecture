DROP TABLE IF EXISTS campus_data;
DROP TABLE IF EXISTS students;

CREATE TABLE campus_data(
    campus_id SERIAL PRIMARY KEY,
    campus TEXT NOT NULL,
    program VARCHAR(12),
    campus_phone TEXT
);

INSERT INTO campus_data(campus, program, campus_phone)
VALUES
('Phoenix', 'web', '867-5309'),
('Lehi', 'web', '555-6666'),
('Dallas', 'iOS', '333-9876');

CREATE TABLE students(
    student_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    cohort INT NOT NULL,
    campus_id INT NOT NULL REFERENCES campus_data(campus_id)
);

INSERT INTO students (name, cohort, campus_id)
VALUES
('Marco', 17, 1),
('Evan', 12, 1),
('Peblo', 2, 3),
('Sally', 14, 2),
('Yolanda', 14, 2);

SELECT * FROM students
JOIN campus_data ON students.campus_id=campus_data.campus_id;