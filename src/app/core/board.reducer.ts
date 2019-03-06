import {BoardState, initialBoard} from './board.model';
import * as BoardAction from './board.actions';

export function boardStateReducer(state: BoardState = initialBoard, action: BoardAction.Union) {
    switch (action.type) {
        case BoardAction.ActionTypes.ToggleSideNav:
            return {
                ...state,
                panelButtonClass: action.payload.panelButtonClass
            };
        case BoardAction.ActionTypes.ToggleDetail:
            return {
                ...state,
                panelType: action.payload.panelType
            };
        case BoardAction.ActionTypes.Login:
            return {
                ...state,
                isLoginVisible: action.payload.isLoginVisible
            };

        default:
            return state;
    }
}
