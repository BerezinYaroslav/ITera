package ru.itera.server.payments;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.itera.server.courses.CourseService;
import ru.itera.server.employees.EmployeeService;
import ru.itera.server.payments.dto.PaymentDto;
import ru.itera.server.students.Student;
import ru.itera.server.students.StudentService;

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
public class PaymentServiceImpl implements PaymentService {
    private final PaymentRepository paymentRepository;
    private final StudentService studentService;
    private final CourseService courseService;
    private final EmployeeService employeeService;

    @Override
    public void add(Payment payment) {
        payment.setCreatorId(1L);
        payment.setCreationDate(LocalDate.now());
        payment.setLastUpdateDate(LocalDate.now());
        payment.setIsDeleted(false);
        paymentRepository.save(payment);
    }

    @Override
    public List<Payment> getAll() {
        return paymentRepository.findAll();
    }

    @Override
    public Payment getById(Long id) throws Exception {
        Optional<Payment> optionalPayment = paymentRepository.findById(id);

        if (optionalPayment.isPresent()) {
            return optionalPayment.get();
        } else {
            throw new Exception("There is no a payment with id " + id);
        }
    }

    @Override
    public List<PaymentDto> getPaymentsDto() throws Exception {
        List<Payment> payments = getAll();
        List<PaymentDto> paymentsDto = new ArrayList<>();

        for (Payment payment : payments) {
            Student student = studentService.getById(payment.getStudentId());

            paymentsDto.add(PaymentDto.builder()
                    .id(payment.getId())
                    .classesToPay((int)(payment.getSum() / 1000))
                    .creationDate(payment.getCreationDate())
                    .sum(payment.getSum())
                    .status(payment.getIsDeleted() ? "Оплачен" : "Новый")
                    .studentName(student.getName())
                    .courseName(courseService.getById(1L).getName())
                    .creatorName(employeeService.getById(payment.getCreatorId()).getName()).build());
        }

        return paymentsDto;
    }

    @Override
    public Payment update(Payment payment) {
        payment.setLastUpdateDate(LocalDate.now());
        return paymentRepository.save(payment);
    }

    @Override
    public void delete(Long id) throws Exception {
        Optional<Payment> optionalPayment = paymentRepository.findById(id);

        if (optionalPayment.isPresent()) {
            paymentRepository.deleteById(id);
        } else {
            throw new Exception("There is no a payment with id " + id);
        }
    }

    @Override
    public void deleteAll() {
        paymentRepository.deleteAll();
    }
}
