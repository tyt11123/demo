import * as React from 'react';
import { Board, Square } from './TicTacToe';
import { shallow, mount } from 'enzyme';

describe('<Board />', () => {
  it('renders a <Board /> components with 9 squares', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find(Square).length).toEqual(9);
  });

  it('fill X in respond to a click', () => {
    const wrapper = shallow(<Board />);
    const board = wrapper.instance();
    board.handleClick(0);
    expect(board.state.squares).toEqual(['X', null, null,
                                        null, null, null,
                                        null, null, null]);
  });

  it('Square should display a value from prop', () => {
      const wrapper = shallow(<Square value='X'/>);
      expect(wrapper.text()).toEqual('X');
  });
  
  it('Board should contain a line showing Next Player', () => {
      const wrapper = shallow(<Board />);
      expect(wrapper.text()).toContain('Next player: X');
  });

  it('Board should divide the Square into 3 rows', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('.board-row').length).toEqual(3);
});
});

describe('<Square />', () => {
    it('propagates the click to parent component', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Square value={null} onClick={onClick} />);
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toEqual(1);
    });
});

describe('<Board />', () => {
    it('clicking a square should fill an X in that index', () => {
        const wrapper = mount(<Board />);
        wrapper.find(Square).first().find('button').simulate('click');
        const board = wrapper.instance();
        expect(board.state.squares).toEqual(['X', null, null,
                                            null, null, null,
                                            null, null, null]);
    });

    it('Clicking all squares should fill up the square state', () => {
        const wrapper = mount(<Board />);
        wrapper.find(Square).find('button').forEach((node) => node.simulate('click'));
        const board = wrapper.instance();
        expect(board.state.squares).toEqual(['X', 'X', 'X',
        'X', 'X', 'X',
        'X', 'X', 'X']);
    });

    it('Clicking a square multiple times should not trigger the handleClick more than once', () => {
        const wrapper = mount(<Board />);
        expect(() => {
            wrapper.Square[1].Click();
            wrapper.Square[1].Click();
        }).toThrowError();
        wrapper.unmount(<Board />);
    });
});