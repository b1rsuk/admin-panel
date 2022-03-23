import push from '../push/push';
import { visibleFastPagination } from '../../../app/redux/popupSlice';

const click = (number, index, limit, numbers, namePage, router, dispath) => {
    if (index == 2 && numbers.length == 4  && limit >= 4)  return dispath(visibleFastPagination());
    push(router, namePage, number);        
}

export default click;