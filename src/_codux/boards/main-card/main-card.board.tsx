import { createBoard } from '@wixc3/react-board';
import { MainCard } from '../../../components/main-card/main-card';

export default createBoard({
    name: 'MainCard',
    Board: () => <MainCard temp={0} img="" />,
    isSnippet: true,
});
