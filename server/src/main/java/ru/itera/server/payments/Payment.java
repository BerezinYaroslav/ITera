package ru.itera.server.payments;

import jakarta.persistence.*;
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
@Table(name = "payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "sum")
    private Double sum;

    @Column(name = "studentId")
    private Long studentId;

    @Column(name = "creationDate")
    private LocalDate creationDate;

    @Column(name = "lastUpdateDate")
    private LocalDate lastUpdateDate;

    @Column(name = "creatorId")
    private Long creatorId;

    @Column(name = "isDeleted")
    private Boolean isDeleted;
}
