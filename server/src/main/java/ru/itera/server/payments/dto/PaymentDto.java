package ru.itera.server.payments.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

/**
 * @author yaroslavberezin
 * @created 05/05/2024
 * @project server
 */
@Data
@Builder
public class PaymentDto {
    private Long id;
    private LocalDate creationDate;
    private Double sum;
    private String status;
    private String studentName;
    private String courseName;
    private String creatorName;
}
