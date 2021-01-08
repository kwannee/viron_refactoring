import {
    SET_CURRENT_MENU,
    SET_MENU_IMAGES
} from './types'
export function setCurrentMenu(currentMenu){
    return{
        type:SET_CURRENT_MENU,
        payload:currentMenu
    }
}
export function setCurrentImages(images){
    return{
        type:SET_MENU_IMAGES,
        payload:images
    }
}