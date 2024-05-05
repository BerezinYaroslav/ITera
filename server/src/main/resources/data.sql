insert into role (name)
values ('Преподаватель'),
       ('Куратор'),
       ('Менеджер');

insert into employee (name, role_id, creation_date, is_deleted)
values ('Богдан Исаченко', 1, current_timestamp(), false),
       ('Виктория Головина', 2, current_timestamp(), false),
       ('Мария Левина', 3, current_timestamp(), false);

insert into course (name)
values ('Python для учеников средней школы');

insert into student (name, birthday, creation_date, is_deleted)
values ('Кирилл Ватуев', '2003-01-01', current_timestamp(), false),
       ('Светлана Кадышева', '2012-04-11', current_timestamp(), false);

insert into student_course (group_name, student_id, course_id, teacher_id, mpp_id, curator_id, visited_classes_count,
                            classes_count, payed_classes_count, creation_date, is_deleted)
values ('Питон 12-14 пробная', 1, 1, 1, 2, 2, 2, 12, 10, current_timestamp(), false);

insert into payment (sum, creation_date, is_deleted, student_id, creator_id)
values (2000.50, current_timestamp(), false, 1, 2),
       (3200.00, current_timestamp(), true, 2, 2);