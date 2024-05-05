package ru.itera.server.courses;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author yaroslavberezin
 * @created 03/05/2024
 * @project server
 */
public interface CourseRepository extends JpaRepository<Course, Long> {
}
