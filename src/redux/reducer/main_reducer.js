import{
    SET_CURRENT_MENU,
    SET_MENU_IMAGES
} from '../actions/types'
const initialState = {
    currentMenu:"",
    currentMenuImages:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_CURRENT_MENU:
            return {
                ...state,
                currentMenu: action.payload
            }
        case SET_MENU_IMAGES:
            return{
                ...state,
                currentMenu:state.currentMenu,
                currentMenuImages:action.payload !=="reset" ? [...state.currentMenuImages, action.payload] : []
            }
        default:
            return state;
    }
}