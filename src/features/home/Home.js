import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {clearPaymentSession} from "../../app/paymentSlice";


export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearPaymentSession());
  }, [dispatch]);

  return (
    <div className="main-container">
      <div className="info">
        <h1>Select a demo</h1>
        <p>Click to view an interactive example of a PCI-compliant React UI integration for online payments.</p>
        <p>
          Make sure the payment method you want to use are enabled for your account. Refer{" "}
          <a href="https://docs.adyen.com/payment-methods#add-payment-methods-to-your-account">the documentation</a> to add missing
          payment methods.
        </p>
        <p>
          To learn more about client-side integration solutions, check out{" "}
          <a href="https://docs.adyen.com/checkout">Online payments.</a>
        </p>
      </div>
      <ul className="integration-list">
        <li className="integration-list-item">
          <Link to="/preview/dropin" className="integration-list-item-link">
            <div className="title-container">
              <p className="integration-list-item-title">Drop-in</p>
            </div>
          </Link>
        </li>
        <li className="integration-list-item">
          <Link to="/preview/card" className="integration-list-item-link">
            <div className="title-container">
              <p className="integration-list-item-title">Card</p>
            </div>
          </Link>
        </li>
        <li className="integration-list-item">
          <Link to="/preview/ideal" className="integration-list-item-link">
            <div className="title-container">
              <p className="integration-list-item-title">iDEAL</p>
            </div>
          </Link>
        </li>
        <li className="integration-list-item">
          <Link to="/preview/giropay" className="integration-list-item-link">
            <div className="title-container">
              <p className="integration-list-item-title">giropay</p>
            </div>
          </Link>
        </li>
        <li className="integration-list-item">
          <Link to="/preview/dotpay" className="integration-list-item-link">
            <div className="title-container">
              <p className="integration-list-item-title">Dotpay</p>
            </div>
          </Link>
        </li>
        <li className="integration-list-item">
          <Link to="/preview/eps" className="integration-list-item-link">
            <div className="title-container">
              <p className="integration-list-item-title">EPS</p>
            </div>
          </Link>
        </li>
        <li className="integration-list-item">
          <Link to="/preview/directEbanking" className="integration-list-item-link">
            <div className="title-container">
              <p className="integration-list-item-title">Sofort</p>
            </div>
          </Link>
        </li>
        <li className="integration-list-item">
          <Link to="/preview/bcmc" className="integration-list-item-link">
            <div className="title-container">
              <p className="integration-list-item-title">Bancontact card</p>
            </div>
          </Link>
        </li>
        <li className="integration-list-item">
          <Link to="/preview/paysafecard" className="integration-list-item-link">
            <div className="title-container">
              <p className="integration-list-item-title">PaySafe card</p>
            </div>
          </Link>
        </li>
        <li class="integration-list-item">
      <a href="/preview/klarna_paynow" class="integration-list-item-link">
        <div class="title-container">
          <p class="integration-list-item-title">Klarna - Pay now</p>
        </div>
      </a>
    </li>
    <li class="integration-list-item">
      <a href="/preview/klarna" class="integration-list-item-link">
        <div class="title-container">
          <p class="integration-list-item-title">Klarna - Pay later</p>
        </div>
      </a>
    </li>
    <li class="integration-list-item">
      <a href="/preview/klarna_account" class="integration-list-item-link">
        <div class="title-container">
          <p class="integration-list-item-title">Klarna - Slice it</p>
        </div>
      </a>
    </li>

      </ul>
      <div className="mt-5">
        <Link to="/cancel" className="button text-light">
          Cancel and Refund a payment
        </Link>
      </div>
    </div>
  )
}
