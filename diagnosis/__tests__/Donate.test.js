import React from 'react';
import renderer from 'react-test-renderer';
import Donate from '../screens/Donate';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<Donate />', () => {
    test("it should render correctly", () => {
        const tree = renderer.create(<Donate />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});