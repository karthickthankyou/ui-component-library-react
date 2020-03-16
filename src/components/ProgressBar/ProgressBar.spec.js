import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ProgressBar from './ProgressBar';

configure({ adapter: new Adapter() });


describe('Progress Bar', () => {
    test('Test width function must return 250 for 50 percent', () => {
        const wrapper = shallow(<ProgressBar width={500} percent={50} />)
        const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
        expect(width).toEqual(250);
    })
})
