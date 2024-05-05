package ru.itera.server.employees;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author yaroslavberezin
 * @created 16/04/2024
 * @project server
 */
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
