
import React from 'react';
import { Share } from 'react-native';
import renderer from 'react-test-renderer';
import Cardiology_MM from '../screens/topics-screens/Cardiology_MM';


describe('Cardiology_MM component', () => {
  it('should call Share.share when Share button is pressed', () => {
    const shareSpy = jest.spyOn(Share, 'share');
    const component = renderer.create(<Cardiology_MM />);
    const instance = component.getInstance();
    const shareButton = component.root.findByProps({ testID: 'shareButton' });
    shareButton.props.onPress();
    expect(shareSpy).toHaveBeenCalled();
  });
});