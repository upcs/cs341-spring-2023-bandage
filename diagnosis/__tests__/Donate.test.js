import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import Donate from '../screens/Donate';
import { ITEM_WIDTH } from '../components/CarouselCardItem';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<Donate />', () => {
    test("it should render correctly", () => {
        const tree = renderer.create(<Donate />).toJSON();
        expect(tree).toMatchSnapshot();
    });
/*
describe('<AboutUs />', () => {
    test("it should render correctly", () => {
        const tree = renderer
            .create(<Link page="https://physicaldiagnosispdx.com/card-tutorial/">Cariology</Link>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
*/
});