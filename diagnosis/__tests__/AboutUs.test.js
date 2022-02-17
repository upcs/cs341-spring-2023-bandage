import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import AboutUs from '../screens/AboutUs';
import { ITEM_WIDTH } from '../components/CarouselCardItem';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<AboutUs />', () => {
    test("it should render correctly", () => {
        renderer.create(<AboutUs />);
    });
    test("user can scroll through text", () => {
        const { getByTestId } = render(<AboutUs />);
        fireEvent.scroll(getByTestId('text-scroll'), { target: { scrollY: 300 }});
    });
    test("carousel should work", () => {
        const { getByTestId } = render(<AboutUs />);
        const carousel = getByTestId('carousel');
        fireEvent.scroll(carousel, { target: { contentOffset: { scrollY: ITEM_WIDTH }}})
    });
});