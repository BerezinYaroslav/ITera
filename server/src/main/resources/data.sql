insert into role (name)
values ('Преподаватель'),
       ('Куратор'),
       ('Менеджер');

insert into employee (name, role_id, creation_date, is_deleted, last_update_date, creator_id, full_name, birthday,
                      office, education, university_name, speciality, phone_number, extra_phone_number, email,
                      living_state, living_city, living_address, registration_state, registration_city, registration_address)
values  ('Головина Виктория', 2, current_timestamp(), false, current_timestamp(), 1, 'Головина Виктория Александровна',
            '2003-01-01', 'Калинка', 'Высшее', 'МГУ', 'Менеджемент', '89802223345', '89802221126', 'golovina@mail.ru',
            'Воронежская область', 'Воронеж', 'Проспект Революции, д.33', 'Воронежская область', 'Воронеж', 'Проспект Революции, д.33'),
       ('Исаченко Богдан', 1, current_timestamp(), false, current_timestamp(), 1, 'Исаченко Богдан Вячеславович', '2003-01-01', 'Калинка', 'Высшее',
              'ВГУ', 'IT', '89802223344', '89802221122', 'isachenko@mail.ru', 'Воронежская область', 'Воронеж',
              'ул.Шишкова, д.1', 'Воронежская область', 'Воронеж', 'ул.Шишкова, д.1'),
       ('Левина Мария', 3, current_timestamp(), false, current_timestamp(), 1, 'Левина Мария Альбертовна', '2003-01-01', 'Калинка', 'Высшее',
              'ВГУ', 'Экономика', '89802223347', '89802221128', 'levina@mail.ru', 'Воронежская область', 'Воронеж',
              'ул.Карла Марскса, д.14', 'Воронежская область', 'Воронеж', 'ул.Карла Марскса, д.14');

insert into course (name, description, presentation_url, methodology_url, exercises_url, direction, subdirection,
                    classes_count, last_update_date, creation_date, creator_id, is_deleted)
values ('Python Start', 'Курс рассчитан на учащихся 9-11 классов', 'http://google.com/...', 'http://google.com/...',
              'http://google.com/...', 'IT', 'Программирование', 12, current_timestamp(), current_timestamp(), 1, false),
       ('Unity', 'Курс рассчитан на студентов всех курсов', 'http://google.com/...', 'http://google.com/...',
              'http://google.com/...', 'IT', 'Создание игр', 12, current_timestamp(), current_timestamp(), 3, false);

insert into student (name, birthday, creation_date, is_deleted, last_update_date, creator_id)
values ('Ватуев Кирилл', '2003-01-01', current_timestamp(), false, current_timestamp(), 1),
       ('Кадышева Светлана', '2012-04-11', current_timestamp(), false, current_timestamp(), 3);

insert into student_course (group_name, student_id, course_id, teacher_id, mpp_id, curator_id, visited_classes_count,
                            classes_count, payed_classes_count, creation_date, is_deleted, last_update_date, creator_id)
values ('Питон пробная', 1, 1, 2, 1, 1, 2, 12, 10, current_timestamp(), false, current_timestamp(), 1),
       ('Питон пробная', 2, 1, 2, 3, 3, 3, 12, 5, current_timestamp(), false, current_timestamp(), 1);

insert into payment (sum, creation_date, is_deleted, student_id, creator_id)
values (10000.00, current_timestamp(), false, 1, 1),
       (5000.00, current_timestamp(), true, 2, 3);