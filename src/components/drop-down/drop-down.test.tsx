import React from 'react';
import { render, screen } from '@testing-library/react';
import DropDown from './drop-down';
import userEvent from '@testing-library/user-event';
test('create item test', async () => {
    const firstItem = "Education";
    const secondItem = "Art";
    render(<DropDown />);
    const input = screen.getByTestId("add-todo");
    await userEvent.type(input, `${firstItem}[Enter]`);
    await userEvent.type(input, `${secondItem}[Enter]`);
    const todoList = screen.getByTestId('todo-list')
    expect(todoList).toHaveTextContent(firstItem)
    expect(todoList).toHaveTextContent(secondItem)
});

