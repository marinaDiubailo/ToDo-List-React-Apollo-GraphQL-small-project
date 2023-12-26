import './FlexContainer.css';

const FlexContainer = ({ className, children }) => {
	const classes = 'flex-container ' + className;
	return <div className={classes}>{children}</div>;
};
export default FlexContainer;
