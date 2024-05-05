package ru.itera.server.students;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author yaroslavberezin
 * @created 03/05/2024
 * @project server
 */
public interface StudentRepository extends JpaRepository<Student, Long> {
}