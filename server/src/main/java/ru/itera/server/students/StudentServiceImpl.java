package ru.itera.server.students;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import ru.itera.server.courses.CourseService;
import ru.itera.server.employees.EmployeeService;
import ru.itera.server.studentCourses.StudentCourse;
import ru.itera.server.studentCourses.StudentCourseRepository;
import ru.itera.server.students.dto.StudentCourseDto;
import ru.itera.server.students.dto.StudentDto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author yaroslavberezin
 * @created 03/05/2024
 * @project server
 */
@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {
    private final StudentRepository studentRepository;
    private final StudentCourseRepository studentCourseRepository;
    private final CourseService courseService;
    private EmployeeService employeeService;

    @Autowired
    public void setEmployeeService(@Lazy EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @Override
    public void add(Student student) {
        student.setCreatorId(1L);
        student.setCreationDate(LocalDate.now());
        student.setLastUpdateDate(LocalDate.now());
        student.setIsDeleted(false);
        studentRepository.save(student);
    }

    @Override
    public List<Student> getAll() {
        return studentRepository.findAll();
    }

    @Override
    public Student getById(Long id) throws Exception {
        Optional<Student> optionalStudent = studentRepository.findById(id);

        if (optionalStudent.isPresent()) {
            return optionalStudent.get();
        } else {
            throw new Exception("There is no a student with id " + id);
        }
    }

    @Override
    public List<StudentCourseDto> getStudentsCoursesDto(Long studentId) throws Exception {
        List<StudentCourse> studentCourses = studentCourseRepository.getStudentsCoursesDto(studentId);
        List<StudentCourseDto> studentCoursesDto = new ArrayList<>();

        for (StudentCourse studentCourse : studentCourses) {
            studentCoursesDto.add(StudentCourseDto.builder()
                    .id(studentCourse.getId())
                    .courseName(courseService.getById(studentCourse.getCourseId()).getName())
                    .teacherName(employeeService.getById(studentCourse.getTeacherId()).getName())
                    .visitedClassesCount(studentCourse.getVisitedClassesCount())
                    .visitedClassesCount(studentCourse.getVisitedClassesCount())
                    .classesCount(studentCourse.getClassesCount())
                    .payedClassesCount(studentCourse.getPayedClassesCount())
                    .creation_date(studentCourse.getCreationDate())
                    .status(studentCourse.getIsDeleted() ? "Закрыта" : "Активна").build());
        }

        return studentCoursesDto;
    }

    @Override
    public List<StudentDto> getStudentsDto() throws Exception {
        List<Student> students = getAll();
        List<StudentDto> studentsDto = new ArrayList<>();

        for (Student student : students) {
            Integer courseCount = studentCourseRepository.getStudentsCoursesDto(student.getId()).size();

            studentsDto.add(StudentDto.builder()
                    .id(student.getId())
                    .name(student.getName())
                    .birthday(student.getBirthday())
                    .coursesCount(courseCount)
                    .activeCoursesCount(courseCount)
                    .creationDate(student.getCreationDate())
                    .hasDebt(false).build());
        }

        return studentsDto;
    }

    @Override
    public Student update(Student student) {
        student.setLastUpdateDate(LocalDate.now());
        return studentRepository.save(student);
    }

    @Override
    public void delete(Long id) throws Exception {
        Optional<Student> optionalStudent = studentRepository.findById(id);

        if (optionalStudent.isPresent()) {
            studentRepository.deleteById(id);
        } else {
            throw new Exception("There is no a student with id " + id);
        }
    }

    @Override
    public void deleteAll() {
        studentRepository.deleteAll();
    }
}
