import { UserRequest } from "./user.models";
import * as fromActions from './user.actions';


export interface UserState {
  entity: UserRequest | null;
  id: string | null;
  email : string | null;
  loading: boolean | null;
  error: string | null;
}


const inititalState : UserState = {
  entity: null,
  id: null,
  loading: null,
  error: null,
  email: null
}


export function reducer(state = inititalState, action: fromActions.All | any): UserState {
  switch(action.type){
    // init
    case fromActions.Types.INIT: {
      return {...state, loading: true};
    }

    case fromActions.Types.INIT_AUTHORIZED: {
      return {...state, loading: false, entity: action.user, id: action.id, error: null, email: action.user.email};
    }

    case fromActions.Types.INIT_UNAUTHORIZED: {
      return {...state, loading: false, entity: null, id: null, error: null, email: null};
    }

    case fromActions.Types.INIT_ERROR: {
      return {...state, loading: false, entity: null, id: null, error: action.error, email: null};
    }

    // login

    case fromActions.Types.SIGIN_IN_EMAIL: {
      return {...state, loading: true, entity: null, id: null, error: null, email: null,}
    }

    case fromActions.Types.SIGIN_IN_EMAIL_SUCCESS: {
      return {...state, loading: false, entity: action.user, id: action.id, error: null, email: action.user.email}
    }

    case fromActions.Types.SIGIN_IN_EMAIL_ERROR: {
      return {...state, loading: false, entity: null, id: null, error: action.error, email: null}
    }

    // registro
    case fromActions.Types.SIGN_UP_EMAIL: {
      return {...state, loading: true, entity: null, id: null, error: null, email: null}
    }

    case fromActions.Types.SIGN_UP_EMAIL_SUCCESS: {
      return {...state, loading: false, entity: action.user, id: action.id, error: null, email: action.user.email}
    }

    case fromActions.Types.SIGN_UP_EMAIL_ERROR: {
      return {...state, loading: false, entity: null, id: null, error: action.error, email: null}
    }

    // Logout

    case fromActions.Types.SIGIN_OUT_EMAIL: {
      return {...inititalState}
    }

    case fromActions.Types.SIGIN_OUT_EMAIL_SUCCESS: {
      return {...inititalState}
    }

    case fromActions.Types.SIGIN_OUT_EMAIL_ERROR: {
      return {...state, loading: false, entity: null, id: null, error: action.error, email: null}
    }

    default: {
      return state;
    }

  }
}
