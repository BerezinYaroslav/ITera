package ru.itera.server.employees;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.itera.server.employees.dto.EmployeeDto;
import ru.itera.server.employees.dto.EmployeeProfileDto;
import ru.itera.server.employees.dto.EmployeeStudentDto;

import java.util.List;

/**
 * @author yaroslavberezin
 * @created 16/04/2024
 * @project server
 */
@RestController
@RequestMapping("/employees")
@RequiredArgsConstructor
@CrossOrigin(maxAge = 3600, origins = "http://localhost:5173", allowedHeaders = "*")
public class EmployeeController {
    private final EmployeeService employeeService;

    @PostMapping
    public void addEmployee(@Valid @RequestBody Employee employee) {
        employeeService.add(employee);
    }

    @GetMapping
    public List<Employee> getEmployees() {
        return employeeService.getAll();
    }

    @GetMapping("/dto")
    public List<EmployeeDto> getEmployeesDto() {
        return employeeService.getAllDto();
    }

    @GetMapping("/dto/{id}")
    public EmployeeProfileDto getEmployeeInfo(@PathVariable long id) throws Exception {
        return employeeService.getEmployeeInfo(id);
    }

    @GetMapping("/{id}")
    public Employee getEmployee(@PathVariable long id) throws Exception {
        return employeeService.getById(id);
    }

    @GetMapping("/{id}/students")
    public List<EmployeeStudentDto> getEmployeeStudents(@PathVariable long id) throws Exception {
        return employeeService.getEmployeeStudents(id);
    }

    @PatchMapping
    public Employee updateEmployee(@Valid @RequestBody Employee employee) {
        return employeeService.update(employee);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable long id) throws Exception {
        employeeService.delete(id);
    }

    @DeleteMapping
    public void deleteAllEmployees() {
        employeeService.deleteAll();
    }
}
