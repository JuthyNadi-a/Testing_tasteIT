import React from "react";
import renderer from "react-test-renderer";

import Recipes from '../components/Recipes';

it('renders when there is no recipe', () => {
    const tree = renderer.create(<Recipes />).toJSON();
    expect(tree).toMatchSnapshot();
})
