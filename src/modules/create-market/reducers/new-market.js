import { ADD_VALIDATION_TO_NEW_MARKET, REMOVE_VALIDATION_FROM_NEW_MARKET, UPDATE_NEW_MARKET, CLEAR_NEW_MARKET } from 'modules/create-market/actions/update-new-market';

const DEFAULT_STATE = {
  validations: [],
  currentStep: 0,
  type: null,
  description: '',
  expirySourceType: '',
  expirySource: '',
  endDate: {}
};

export default function (newMarket = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_VALIDATION_TO_NEW_MARKET: {
      if (newMarket.validations.indexOf(action.data) === -1) {
        return {
          ...newMarket,
          validations: [
            action.data,
            ...newMarket.validations
          ]
        };
      }
      return newMarket;
    }
    case REMOVE_VALIDATION_FROM_NEW_MARKET: {
      if (newMarket.validations.indexOf(action.data) !== -1) {
        return {
          ...newMarket,
          validations: [
            ...newMarket.validations.slice(0, newMarket.validations.indexOf(action.data)),
            ...newMarket.validations.slice(newMarket.validations.indexOf(action.data) + 1)
          ]
        };
      }
      return newMarket;
    }
    case UPDATE_NEW_MARKET:
      return {
        ...newMarket,
        ...action.data
      };
    case CLEAR_NEW_MARKET:
      return {};
    default:
      return newMarket;
  }
}
