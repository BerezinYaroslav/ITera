package ru.itera.server.employees;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import ru.itera.server.employees.dto.EmployeeDto;
import ru.itera.server.employees.dto.EmployeeProfileDto;
import ru.itera.server.employees.dto.EmployeeStudentDto;
import ru.itera.server.studentCourses.StudentCourse;
import ru.itera.server.studentCourses.StudentCourseRepository;
import ru.itera.server.students.Student;
import ru.itera.server.students.StudentService;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author yaroslavberezin
 * @created 22/04/2024
 * @project server
 */
@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final StudentCourseRepository studentCourseRepository;
    private final StudentService studentService;

    @Override
    public void add(@Valid @RequestBody Employee employee) {
        employee.setCreatorId(1L);
        employee.setCreationDate(LocalDate.now());
        employee.setLastUpdateDate(LocalDate.now());
        employee.setIsDeleted(false);
        employeeRepository.save(employee);
    }

    @Override
    public List<EmployeeDto> getAllDto() {
        List<Employee> employees = employeeRepository.findAll();
        List<EmployeeDto> employeesDto = new ArrayList<>();

        for (Employee employee : employees) {
            System.out.println(employee);
            employeesDto.add(EmployeeDto.builder()
                    .id(employee.getId())
                    .name(employee.getName())
                    .role(employee.getRoleId().equals(1L) ? "Преподаватель" : "Куратор")
                    .creationDate(employee.getCreationDate())
                    .subordinatesCount(5).build());
        }

        return employeesDto;
    }

    @Override
    public List<Employee> getAll() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getById(Long id) throws Exception {
        Optional<Employee> optionalEmployee = employeeRepository.findById(id);

        if (optionalEmployee.isPresent()) {
            return optionalEmployee.get();
        } else {
            throw new Exception("There is no an employee with id " + id);
        }
    }

    @Override
    public List<EmployeeStudentDto> getEmployeeStudents(Long id) throws Exception {
        List<StudentCourse> studentCourses = studentCourseRepository.getEmployeeStudents(id);
        List<EmployeeStudentDto> employeeStudents = new ArrayList<>();

        for (StudentCourse studentCourse : studentCourses) {
            Student student = studentService.getById(studentCourse.getStudentId());

            employeeStudents.add(EmployeeStudentDto.builder()
                    .id(student.getId())
                    .name(student.getName())
                    .groupName(studentCourse.getGroupName())
                    .classesCount(studentCourse.getClassesCount())
                    .visitedClassesCount(studentCourse.getVisitedClassesCount())
                    .payedClassesCount(studentCourse.getPayedClassesCount()).build());
        }

        return employeeStudents;
    }

    @Override
    public Employee update(Employee employee) {
        employee.setLastUpdateDate(LocalDate.now());
        return employeeRepository.save(employee);
    }

    @Override
    public void delete(Long id) throws Exception {
        Optional<Employee> optionalEmployee = employeeRepository.findById(id);

        if (optionalEmployee.isPresent()) {
            employeeRepository.deleteById(id);
        } else {
            throw new Exception("There is no an employee with id " + id);
        }
    }

    @Override
    public void deleteAll() {
        employeeRepository.deleteAll();
    }

    public EmployeeProfileDto getEmployeeProfile(Long id) throws Exception {
        Employee employee = getById(id);

        return EmployeeProfileDto.builder()
                .id(employee.getId())
                .name(employee.getName())
                .role(employee.getRoleId().equals(1L) ? "Преподаватель" : "Куратор")
                .creationDate(employee.getCreationDate())
                .subordinatesCount(5)
                .birthday(employee.getBirthday())
                .fullName(employee.getFullName())
                .office(employee.getOffice())
                .education(employee.getEducation())
                .universityName(employee.getUniversityName())
                .speciality(employee.getSpeciality())
                .livingState(employee.getLivingState())
                .livingCity(employee.getLivingCity())
                .livingAddress(employee.getLivingAddress())
                .registrationState(employee.getRegistrationState())
                .registrationCity(employee.getRegistrationCity())
                .registrationAddress(employee.getRegistrationAddress())
                .phoneNumber(employee.getPhoneNumber())
                .extraPhoneNumber(employee.getExtraPhoneNumber())
                .email(employee.getEmail()).build();
    }
}
