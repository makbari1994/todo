
import React, { useRef, useState } from 'react';
import { createUseStyles } from 'react-jss'
import { useAddItem } from '../../hooks/useAddItem';
import { IList } from '../../types/list';

const useStyles = createUseStyles({
    center: {
        width: '500px',
        height: '200px',
        margin: '50px auto',
        position: 'relative'
    },
    inputParent: {
        width: '250px',
        height: '40px',
        position: 'relative',
        '& input': {
            display: 'block',
            width: '100%',
            height: '40px',
            padding: '0.375rem 0.75rem',
            fontSize: '1rem',
            lineHeight: '1.5',
            color: '#495057',
            backgroundColor: '#fff',
            backgroundClip: 'padding - box',
            border: '1px solid #ced4da',
            borderRadius: '10px',
            transition: 'border - color .15s ease -in -out, box - shadow .15s ease -in -out',
            '&:focus': {
                color: '#495057',
                backgroundColor: '#fff',
                borderColor: '#80bdff',
                outline: '0',
                boxShadow: '0 0 0 .2rem rgba(0,123,255,.25)'
            }
        }
    },
    icon: {
        width: '40px',
        height: '40px',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '0',
        right: '0',
        cursor: 'pointer'
    },
    items: {
        width: '250px',
        height: '200px',
        overflow: 'auto',
        boxShadow: '0 0 3px rgba(0,0,0,0.2)',
        borderRadius: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
        position: 'absolute',
        top: '50px',

    },
    hide: {
        display: 'none'
    },
    show: {
        display: 'block'
    },
    item: {
        width: '100%',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '15px',
        marginTop: '10px',
        cursor: 'pointer',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: '#9ebfe3'
        },
        '& i': {
            color: '#8292D9',
            marginLeft: 'auto',
            marginRight: '15px'
        }
    },
    active: {
        backgroundColor: '#9ebfe3'
    }

})

const DropDown = () => {
    const styles = useStyles();
    const inputRef = useRef<HTMLInputElement>(null);
    const [list, addToList, select] = useAddItem(inputRef);
    const [showItems, setShowItems] = useState(true)

    const _handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addToList();
        }
    }

    const _showItems = () => {
        setShowItems(!showItems);
    }

    const onSelectItem = (item: IList, index: number) => {
        select(item, index);
    }

    return (
        <>
            <div className={styles.center} >

                <div className={styles.inputParent}>
                    <div className={styles.icon} onClick={_showItems}>
                        <i className={`fa fa-angle-${showItems ? 'up' : 'down'}`}></i>
                    </div>
                    <input
                        onKeyDown={_handleKeyDown}
                        ref={inputRef}
                        name='add-todo'
                        type='text'
                        placeholder="Enter to create new item"
                        data-testid="add-todo"
                    />
                </div>

                <div
                    className={`${styles.items} ${showItems ? styles.show : styles.hide}`}
                    data-testid="todo-list"
                >
                    {list.map((item, index) => {
                        return (
                            <div key={item.id} onClick={() => onSelectItem(item, index)} className={`${styles.item} ${item.active ? styles.active : ''}`}>
                                {item.name}
                                {item.active ? (
                                    <i className='fa fa-check'></i>
                                ) : null}
                            </div>
                        )
                    })}

                </div>

            </div>
        </>
    )

}

export default DropDown;