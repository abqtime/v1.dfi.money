import initialState from './initialState';
import { reducer as fetchBalancesReducer } from './fetchBalances';
import { reducer as fetchPoolBalancesReducer } from './fetchPoolBalances';
import { reducer as fetchDepositReducer } from './fetchDeposit';
import { reducer as fetchApprovalReducer } from './fetchApproval';

const reducers = [
  fetchBalancesReducer,
  fetchPoolBalancesReducer,
  fetchDepositReducer,
  fetchApprovalReducer
];


export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}