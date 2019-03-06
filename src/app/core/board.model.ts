export enum StateType {
    MainPanelOnly,
    MainPanelWithSideNav,
    DetailPanel,
    LoginPanel
}

export enum PanelType {
    Primary,
    Detail,
    OverlayPanel
}

export interface IState {
    panelType: PanelType;
    stateType: StateType;
    isSideNavVisible: boolean;
    panelButtonClass: string;
    isLoginVisible: boolean;
}

export class BoardState implements IState {
    panelType: PanelType;
    stateType: StateType;
    isSideNavVisible: boolean;
    panelButtonClass: string;
    isLoginVisible: boolean;
    constructor() {}
}

export const initialBoard: BoardState = {
    panelType: PanelType.Primary,
    stateType: StateType.MainPanelWithSideNav,
    isSideNavVisible: true,
    panelButtonClass: 'fa-chevron-left',
    isLoginVisible: false
};

