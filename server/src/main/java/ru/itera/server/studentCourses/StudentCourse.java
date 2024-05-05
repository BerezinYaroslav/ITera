package ru.itera.server.studentCourses;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

/**
 * @author yaroslavberezin
 * @created 03/05/2024
 * @project server
 */
@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "student_course")
public class StudentCourse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "group_name")
    @NotEmpty
    private String groupName;

    @Column(name = "student_id")
    private Long studentId;

    @Column(name = "course_id")
    private Long courseId;

    @Column(name = "visited_classes_count")
    private Integer visitedClassesCount;

    @Column(name = "payed_classes_count")
    private Integer payedClassesCount;

    @Column(name = "classes_count")
    private Integer classesCount;

    @Column(name = "teacher_id")
    private Long teacherId;

    @Column(name = "mpp_id")
    private Long mppId;

    @Column(name = "curator_id")
    private Long curatorId;

    @Column(name = "creation_date")
    private LocalDate creationDate;

    @Column(name = "last_update_date")
    private LocalDate lastUpdateDate;

    @Column(name = "creator_id")
    private Long creatorId;

    @Column(name = "is_deleted")
    private Boolean isDeleted;
}
