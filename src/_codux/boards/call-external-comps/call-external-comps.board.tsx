import { createBoard } from '@wixc3/react-board';
import { CallExternalComps } from '../../../components/call-external-comps/call-external-comps';

export default createBoard({
    name: 'CallExternalComps',
    Board: () => <CallExternalComps />,
    isSnippet: true,
});
