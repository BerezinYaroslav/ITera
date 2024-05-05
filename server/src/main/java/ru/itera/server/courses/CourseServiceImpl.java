package ru.itera.server.courses;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.itera.server.courses.dto.CourseDto;

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
public class CourseServiceImpl implements CourseService {
    private final CourseRepository courseRepository;

    @Override
    public void add(Course course) {
        course.setCreatorId(1L);
        course.setCreationDate(LocalDate.now());
        course.setLastUpdateDate(LocalDate.now());
        course.setIsDeleted(false);
        courseRepository.save(course);
    }

    @Override
    public List<Course> getAll() {
        return courseRepository.findAll();
    }

    @Override
    public Course getById(Long id) throws Exception {
        Optional<Course> optionalCourse = courseRepository.findById(id);

        if (optionalCourse.isPresent()) {
            return optionalCourse.get();
        } else {
            throw new Exception("There is no a course with id " + id);
        }
    }

    @Override
    public List<CourseDto> getCoursesDto() {
        List<Course> courses = getAll();
        List<CourseDto> coursesDto = new ArrayList<>();

        for (Course course : courses) {
            coursesDto.add(CourseDto.builder()
                    .id(course.getId())
                    .name(course.getName())
                    .classesCount(12)
                    .presentationUrl(course.getPresentationUrl())
                    .methodologyUrl(course.getMethodologyUrl())
                    .exercisesUrl(course.getExercisesUrl()).build());
        }

        return coursesDto;
    }

    @Override
    public Course update(Course course) {
        course.setLastUpdateDate(LocalDate.now());
        return courseRepository.save(course);
    }

    @Override
    public void delete(Long id) throws Exception {
        Optional<Course> optionalCourse = courseRepository.findById(id);

        if (optionalCourse.isPresent()) {
            courseRepository.deleteById(id);
        } else {
            throw new Exception("There is no a course with id " + id);
        }
    }

    @Override
    public void deleteAll() {
        courseRepository.deleteAll();
    }
}
