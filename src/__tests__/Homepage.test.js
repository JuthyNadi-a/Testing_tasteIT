import { render, screen} from '@testing-library/react';
import App from '../App'

test('renders app component', () => {
    render(<App />);
    screen.getByText('tasteIT');
    screen.getByText('Add new recipes');
    screen.getByText('TasteIT is an recipe app.');
})