package ru.itera.server.students;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.itera.server.students.dto.StudentCourseDto;
import ru.itera.server.students.dto.StudentDto;

import java.util.List;

/**
 * @author yaroslavberezin
 * @created 03/05/2024
 * @project server
 */
@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
@CrossOrigin(maxAge = 3600, origins = "http://localhost:5173", allowedHeaders = "*")
public class StudentController {
    private final StudentService studentService;

    @PostMapping
    public void addStudent(@Valid @RequestBody Student student) {
        studentService.add(student);
    }

    @GetMapping
    public List<Student> getStudents() {
        return studentService.getAll();
    }

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable long id) throws Exception {
        return studentService.getById(id);
    }

    @GetMapping("/{id}/courses")
    public List<StudentCourseDto> getStudentCoursesDto(@PathVariable long id) throws Exception {
        return studentService.getStudentsCoursesDto(id);
    }

    @GetMapping("/dto")
    public List<StudentDto> getStudentsDto() throws Exception {
        return studentService.getStudentsDto();
    }

    @PatchMapping
    public Student updateStudent(@Valid @RequestBody Student student) {
        return studentService.update(student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable long id) throws Exception {
        studentService.delete(id);
    }

    @DeleteMapping
    public void deleteAllStudents() {
        studentService.deleteAll();
    }
}
