import { createBoard } from '@wixc3/react-board';
import { Card, Day } from '../../../components/card/card';

const day = {
    "date": 0,
    "weather": "string",
    "temp2m": {
    "max": 0,
    "min": 0
    },
    "wind10m_max": 0
} 

export default createBoard({
    name: 'Card',
    Board: () => <Card day={day} img = "img" cond = "cond" />,
    isSnippet: true,
});
