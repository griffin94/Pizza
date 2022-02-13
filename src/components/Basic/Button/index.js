import Button from './src/Button';

export default Object.assign(Button, {
	Icon: (props) => <Button kind='icon' {...props} />,
});
