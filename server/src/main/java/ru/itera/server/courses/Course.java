package ru.itera.server.courses;

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
@Table(name = "course")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", unique = true)
    @NotEmpty
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "presentation_url")
    private String presentationUrl;

    @Column(name = "methodology_url")
    private String methodologyUrl;

    @Column(name = "exercises_url")
    private String exercisesUrl;

    @Column(name = "direction")
    private String direction;

    @Column(name = "subdirection")
    private String subdirection;

    @Column(name = "classes_count")
    private Integer classesCount;

    @Column(name = "creation_date")
    private LocalDate creationDate;

    @Column(name = "last_update_date")
    private LocalDate lastUpdateDate;

    @Column(name = "creator_id")
    private Long creatorId;

    @Column(name = "is_deleted")
    private Boolean isDeleted;
}
