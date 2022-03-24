import Button, { KINDS } from './src/Button';

export default Object.assign(Button, {
  Icon: (props) => <Button kind={KINDS.ICON} {...props} />,
});
