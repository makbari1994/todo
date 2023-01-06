import { useState } from 'react';
import { IList } from '../types/list';

export const useAddItem = (refItem: React.RefObject<HTMLInputElement>) => {
    const [list, setList] = useState<Array<IList>>([]);

    const addToList = () => {
        const id = list.length;
        let name = '';
        if (refItem.current) {
            name = refItem.current.value
        }
        list.push({ name, id, active: false });
        setList([...list])
        if (refItem.current) {
            refItem.current.value = "";
        }
    }

    const select = (item: IList, index: number) => {
        list.map(item => item.active = false);
        list[index].active = true;
        setList([...list]);
        if (refItem.current) {
            refItem.current.value = item.name
        }
    }

    return [list, addToList, select] as const;
};