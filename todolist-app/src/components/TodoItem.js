import {
	ListItem,
	Checkbox,
	IconButton,
	ListItemText,
	ListItemSecondaryAction,
} from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

const TodoItem = props => {
	const { title, isCompleted, onDelete, onCheck } = props;
	return (
		<ListItem divider={props.divider}>
			<Checkbox
				onClick={onCheck}
				checked={isCompleted}
			/>
			<h3>{title}</h3>
			<ListItemText primary={props.text} />
			<ListItemSecondaryAction>
				<IconButton aria-label="Delete Todo"
					onClick={onDelete}
				>
					<DeleteOutlined />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>);
}

export default TodoItem;