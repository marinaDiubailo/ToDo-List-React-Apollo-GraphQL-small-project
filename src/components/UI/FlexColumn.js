import './FlexColumn.css';

const FlexColumn = ({ className, children }) => {
	const classes = 'flex-column ' + className;
	return <div className={classes}>{children}</div>;
};
export default FlexColumn;
