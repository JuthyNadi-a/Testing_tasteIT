import React from "react";
import renderer from "react-test-renderer";

import HomeCard from '../components/HomeCard';

it('renders when there is card details', () => {
    const tree = renderer.create(<HomeCard details={'testing'}/>).toJSON();
    expect(tree).toMatchSnapshot();
})