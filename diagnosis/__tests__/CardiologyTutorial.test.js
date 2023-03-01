import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../Link';
import {fireEvent, render} from '@testing-library/react-native';
import Cardiology_Tutorial from '../screens/topics-screens';
import { ITEM_WIDTH } from '../components/CarouselCardItem';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

it('renders correctly', () => {
    const tree = renderer
      .create(<Link page="https://physicaldiagnosispdx.com/card-tutorial/">Cariology</Link>)
      .toJSON();
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