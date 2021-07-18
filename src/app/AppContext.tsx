import React, {useContext, Dispatch} from "react";

const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "FILTRAR_PARTIDO":
      return {
        ...state,
        partidoFiltered: action.payload,
        localidadFiltered: 0,
        barrioFiltered: 0,
      };
    case "FILTRAR_LOCALIDAD":
      return {
        ...state,
        localidadFiltered: action.payload,
        barrioFiltered: 0,
      };
    case "FILTRAR_BARRIO":
      return {
        ...state,
        barrioFiltered: action.payload,
      };
    case "FILTRAR_CERCANIA":
      return {
        ...state,
        ubicacionCercana: action.payload,
      };
    default:
      return state;
  }
};

interface InitialStateType {
  ubicacionCercana: boolean;
  partidoFiltered: null | number;
  localidadFiltered: null | number;
  barrioFiltered: null | number;
}

const initialState = {
  ubicacionCercana: false,
  partidoFiltered: 0,
  localidadFiltered: 0,
  barrioFiltered: 0,
};

export const AppContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({state: initialState, dispatch: () => null});

export const AppProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state: {
          ubicacionCercana: state.ubicacionCercana,
          partidoFiltered: state.partidoFiltered,
          localidadFiltered: state.localidadFiltered,
          barrioFiltered: state.barrioFiltered,
        },
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
