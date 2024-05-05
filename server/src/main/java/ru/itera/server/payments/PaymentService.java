package ru.itera.server.payments;

import ru.itera.server.payments.dto.PaymentDto;

import java.util.List;

/**
 * @author yaroslavberezin
 * @created 03/05/2024
 * @project server
 */
public interface PaymentService {
    void add(Payment payment);

    List<Payment> getAll();

    Payment getById(Long id) throws Exception;

    List<PaymentDto> getPaymentsDto() throws Exception;

    Payment update(Payment payment);

    void delete(Long id) throws Exception;

    void deleteAll();
}
