package ru.itera.server.courses;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.itera.server.courses.dto.CourseDto;

import java.util.List;

/**
 * @author yaroslavberezin
 * @created 03/05/2024
 * @project server
 */
@RestController
@RequestMapping("/courses")
@RequiredArgsConstructor
@CrossOrigin(maxAge = 3600, origins = "http://localhost:5173", allowedHeaders = "*")
public class CourseController {
    private final CourseService courseService;

    @PostMapping
    public void addCourse(@Valid @RequestBody Course course) {
        courseService.add(course);
    }

    @GetMapping
    public List<Course> getCourses() {
        return courseService.getAll();
    }

    @GetMapping("/{id}")
    public Course getCourse(@PathVariable long id) throws Exception {
        return courseService.getById(id);
    }

    @GetMapping("/dto")
    public List<CourseDto> getCoursesDto() {
        return courseService.getCoursesDto();
    }

    @PatchMapping
    public Course updateCourse(@Valid @RequestBody Course course) {
        return courseService.update(course);
    }

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable long id) throws Exception {
        courseService.delete(id);
    }

    @DeleteMapping
    public void deleteAllCourse() {
        courseService.deleteAll();
    }
}
