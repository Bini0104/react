import menus from '../data/menu-detail.json';

export function getMenuList(){
    return menus;
}

export function getMenuDetail(menuCode){
    return menus.filter(menu => menu.menuCode === parseItem(menuCode))[0];
}