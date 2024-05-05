package ru.itera.server.payments;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.itera.server.payments.dto.PaymentDto;

import java.util.List;

/**
 * @author yaroslavberezin
 * @created 03/05/2024
 * @project server
 */
@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor
@CrossOrigin(maxAge = 3600, origins = "http://localhost:5173", allowedHeaders = "*")
public class PaymentController {
    private final PaymentService paymentService;

    @PostMapping
    public void addPayment(@Valid @RequestBody Payment payment) {
        paymentService.add(payment);
    }

    @GetMapping
    public List<Payment> getPayments() {
        return paymentService.getAll();
    }

    @GetMapping("/{id}")
    public Payment getPayment(@PathVariable long id) throws Exception {
        return paymentService.getById(id);
    }

    @GetMapping("/dto")
    public List<PaymentDto> getPaymentsDto() throws Exception {
        return paymentService.getPaymentsDto();
    }

    @PatchMapping
    public Payment updatePayment(@Valid @RequestBody Payment payment) {
        return paymentService.update(payment);
    }

    @DeleteMapping("/{id}")
    public void deletePayment(@PathVariable long id) throws Exception {
        paymentService.delete(id);
    }

    @DeleteMapping
    public void deleteAllPayments() {
        paymentService.deleteAll();
    }
}
