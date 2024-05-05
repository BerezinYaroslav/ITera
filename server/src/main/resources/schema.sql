drop table if exists role,
    employee,
    course,
    student,
    student_course,
    payment;


create table role
(
    id   bigint generated always as identity primary key,
    name nvarchar(50)
);

create table employee
(
    id                   bigint generated always as identity primary key,
    name                 nvarchar(50) not null,
    role_id              bigint references role (id),
    full_name            nvarchar(50),
    birthday             date,
    office               nvarchar(50),
    education            nvarchar(50),
    university_name      nvarchar(100),
    speciality           nvarchar(100),
    phone_number         nvarchar(20),
    extra_phone_number   nvarchar(20),
    email                nvarchar(50) unique,
    living_state         nvarchar(100),
    living_city          nvarchar(50),
    living_address       nvarchar(100),
    registration_state   nvarchar(100),
    registration_city    nvarchar(50),
    registration_address nvarchar(100),
    creation_date        date,
    last_update_date     date,
    creator_id           bigint references employee (id),
    is_deleted           boolean
);

create table course
(
    id               bigint generated always as identity primary key,
    name             nvarchar(50) unique not null,
    description      nvarchar(500),
    presentation_url nvarchar(100),
    methodology_url  nvarchar(100),
    exercises_url    nvarchar(100),
    direction        nvarchar(50),
    subdirection     nvarchar(50),
    classes_count    int,
    creation_date    date,
    last_update_date date,
    creator_id       bigint references employee (id),
    is_deleted       boolean
);

create table student
(
    id               bigint generated always as identity primary key,
    name             nvarchar(50) not null,
    creation_date    date,
    birthday         date,
    last_update_date date,
    creator_id       bigint references employee (id),
    is_deleted       boolean
);

create table student_course
(
    id                    bigint generated always as identity primary key,
    group_name            nvarchar(50) not null,
    student_id            bigint references student (id),
    course_id             bigint references course (id),
    visited_classes_count int,
    payed_classes_count   int,
    classes_count         int,
    teacher_id            bigint references employee (id),
    mpp_id                bigint references employee (id),
    curator_id            bigint references employee (id),
    creation_date         date,
    last_update_date      date,
    creator_id            bigint references employee (id),
    is_deleted            boolean
);

create table payment
(
    id               bigint generated always as identity primary key,
    sum              double,
    student_id       bigint references student (id),
    creation_date    date,
    last_update_date date,
    creator_id       bigint references employee (id),
    is_deleted       boolean
);