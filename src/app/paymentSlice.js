import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "payment",
  initialState: {
    error: "",
    session: null,
    orderRef: null,
    paymentDataStoreRes: null,
    config: {
      storePaymentMethod: true,
      shopperInteraction: "Ecommerce",
      recurringProcessingModel: "UnscheduledCardOnFile",
      additionalData: {"authorisationType": "PreAuth"},
      shopperReference: "VladWebTest1",
      paymentMethodsConfiguration: {
        ideal: {
          showImage: true,
        },
        card: {
          hasHolderName: true,
          holderNameRequired: true,
          billingAddressRequired: true,
          billingAddressRequiredFields: ['postalCode', 'country'],
          name: "Credit or debit card",
          amount: {
            value: 1000, // $10 in minor units
            currency: "USD",
          },
        },
      },
      locale: "en_US",
      showPayButton: true,
      clientKey: process.env.REACT_APP_ADYEN_CLIENT_KEY,
      environment: "test",
    },
  },
  reducers: {
    paymentSession: (state, action) => {
      const [res, status] = action.payload;
      if (status >= 300) {
        state.error = res;
      } else {
        [state.session, state.orderRef] = res;
      }
    },
    clearPaymentSession: (state) => {
      state.error = "";
      state.session = null;
      state.orderRef = null;
    },
    paymentDataStore: (state, action) => {
      const [res, status] = action.payload;
      if (status >= 300) {
        state.error = res;
      } else {
        state.paymentDataStoreRes = res;
      }
    },
  },
});

export const { paymentSession, clearPaymentSession, paymentDataStore } = slice.actions;

export const initiateCheckout = (type) => async (dispatch) => {
  const response = await fetch(`/api/sessions?type=${type}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  dispatch(paymentSession([await response.json(), response.status]));
};

export const getPaymentDataStore = () => async (dispatch) => {
  const response = await fetch("/api/getPaymentDataStore");
  dispatch(paymentDataStore([await response.json(), response.status]));
};

export const cancelOrRefundPayment = (orderRef) => async (dispatch) => {
  await fetch(`/api/cancelOrRefundPayment?orderRef=${orderRef}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  dispatch(getPaymentDataStore());
};

export default slice.reducer;
