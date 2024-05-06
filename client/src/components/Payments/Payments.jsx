import React, { useEffect, useState } from 'react';
import api from '../../utils/Api.jsx';
import PaymentCard from '../PaymentCard/PaymentCard.jsx';

function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    api.getAllPayments()
      .then((res) => setPayments(res));
  }, []);

  return (
    <section className="payments">
      <h3 className="payments__title">
        Счета
      </h3>
      <div className="payments__contents">
        <div className="payments__id">
          ID
        </div>
        <div className="payments__date">
          Дата создания
          счета
        </div>
        <div className="payments__sum">
          Выставленная
          сумма
        </div>
        <div className="payments__lessons">
          Уроков
          к оплате
        </div>
        <div className="payments__status">
          Статус
          счета
        </div>
        <div className="payments__name">
          Имя
          ученика
        </div>
        <div className="payments__course">
          Курс
        </div>
        <div className="payments__resp">
          Счет создан
        </div>
      </div>
      <div className="payments__items">
        {
          payments.map((payment) => <PaymentCard key={payment.id} data={payment} />)
        }
      </div>
    </section>
  );
}

export default Payments;
