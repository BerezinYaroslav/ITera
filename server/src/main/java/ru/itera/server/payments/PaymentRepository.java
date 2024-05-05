package ru.itera.server.payments;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author yaroslavberezin
 * @created 03/05/2024
 * @project server
 */
public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
