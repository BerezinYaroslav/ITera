package ru.itera.server.employees;

import ru.itera.server.employees.dto.EmployeeDto;
import ru.itera.server.employees.dto.EmployeeProfileDto;
import ru.itera.server.employees.dto.EmployeeStudentDto;

import java.util.List;

/**
 * @author yaroslavberezin
 * @created 22/04/2024
 * @project server
 */
public interface EmployeeService {
    void add(Employee employee);

    List<Employee> getAll();

    List<EmployeeDto> getAllDto();

    Employee getById(Long id) throws Exception;

    List<EmployeeStudentDto> getEmployeeStudents(Long id) throws Exception;

    Employee update(Employee employee);

    void delete(Long id) throws Exception;

    void deleteAll();

    EmployeeProfileDto getEmployeeProfile(Long id) throws Exception;
}
