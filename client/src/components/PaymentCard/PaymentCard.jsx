import React from 'react';

function PaymentCard({ data }) {
  return (
    <div className="payment-card">
      <div className="payment-card__id">
        {data.id}
      </div>
      <div className="payment-card__date">
        {data.creationDate}
      </div>
      <div className="payment-card__sum">
        {data.sum}
        {' '}
        ₽
      </div>
      <div className="payment-card__lessons">
        {data.classesToPay}
      </div>
      <div className="payment-card__status">
        {data.status === 'Оплачен' ? (
          <span className="payment-card__status_paid">
            {data.status}
          </span>
        ) : (
          <span className="payment-card__status_new">
            {data.status}
          </span>
        )}
      </div>
      <div className="payment-card__name">
        {data.studentName}
      </div>
      <div className="payment-card__course">
        {data.courseName}
      </div>
      <div className="payment-card__resp">
        {data.creatorName}
      </div>
    </div>
  );
}

export default PaymentCard;
