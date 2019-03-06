import { Action } from '@ngrx/store';
import { BoardState, StateType, PanelType } from './board.model';

export enum ActionTypes {
    Login = '[Login Page] Login',
    ToggleSideNav = '[Main Page] ToggleSideNav',
    ToggleDetail = '[Main Page] ToggleDetail'
}

export class Login implements Action {
    readonly type = ActionTypes.Login;

    constructor(public payload: BoardState) {}
}

export class ToggleSideNav implements Action {
    readonly type = ActionTypes.ToggleSideNav;

    constructor(public payload: BoardState) {}
}

export class ToggleDetail implements Action {
    readonly type = ActionTypes.ToggleDetail;

    constructor(public payload: BoardState) {}
}


export type Union = Login | ToggleSideNav | ToggleDetail;
