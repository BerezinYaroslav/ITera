package ru.itera.server.studentCourses;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author yaroslavberezin
 * @created 03/05/2024
 * @project server
 */
@RestController
@RequestMapping("/student_courses")
@RequiredArgsConstructor
@CrossOrigin(maxAge = 3600, origins = "http://localhost:5173", allowedHeaders = "*")
public class StudentCoursesController {
    private final StudentCourseService studentCoursesService;

    @PostMapping
    public void addStudentCourse(@Valid @RequestBody StudentCourse studentCourses) {
        studentCoursesService.add(studentCourses);
    }

    @GetMapping
    public List<StudentCourse> getStudentCourses() {
        return studentCoursesService.getAll();
    }

    @GetMapping("/{id}")
    public StudentCourse getStudentCourse(@PathVariable long id) throws Exception {
        return studentCoursesService.getById(id);
    }

    @PatchMapping
    public StudentCourse updateStudentCourse(@Valid @RequestBody StudentCourse studentCourses) {
        return studentCoursesService.update(studentCourses);
    }

    @DeleteMapping("/{id}")
    public void deleteStudentCourse(@PathVariable long id) throws Exception {
        studentCoursesService.delete(id);
    }

    @DeleteMapping
    public void deleteAllStudentCourses() {
        studentCoursesService.deleteAll();
    }
}
