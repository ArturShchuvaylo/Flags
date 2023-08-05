import { useDispatch, useSelector } from 'react-redux';
import { setSelect } from './controlsSlice';
import { selectSelect } from './controlsSlice';

export const useControls =()=>{
    const dispatch = useDispatch();
    const handlSelect = (reg) => {
      dispatch(setSelect(reg?.value || ''))
    }
    const region = useSelector(selectSelect);
    return [handlSelect,region]
}