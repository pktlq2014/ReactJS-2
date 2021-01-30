import React, { Component } from "react"

class TaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name : '',
			status : false
		}
	}
	onSubmit = (event) => {
		event.preventDefault();
		var sl = this.state.status;
		console.log(this.state.name);
		console.log(typeof sl);
		this.props.receiveDataFromTaskFormNews(this.state);
	}
	onChange = (event) => {
		var {target} = event;
		var name = target.name;
		var value = target.type === 'checked' ? target.checked : target.value
		if(name === 'status') {
			value = target.value === 'true' ? true : false
		}
		this.setState({
			[name] : value
		});
	}
	onClick = (event) => {
		this.props.receiveDataFromTaskForm(0);
	}
	render() {
		return (
			<div class="panel panel-warning">
				<div class="panel-heading">
					<h3 class="panel-title">Thêm Công Việc</h3>
					<i class="fas fa-window-close" onClick={this.onClick}></i>
				</div>



				<div class="panel-body">
					<form onSubmit={this.onSubmit}>
						<div class="form-group">
							<label>Tên :</label>
							<input type="text" class="form-control"
							name="name"
							value={this.state.name}
							onChange={this.onChange} />
						</div>
						<label>Trạng Thái :</label>
						<select class="form-control"
						onChange={this.onChange}
						name="status"
						value={this.state.status}
						required="required">
							<option value={true}>Kích Hoạt</option>
							<option value={false}>Ẩn</option>
						</select>
						<br />
						<div class="text-center">
							<button type="submit" class="btn btn-warning">Thêm</button>&nbsp;
                        	<button type="submit" class="btn btn-danger">Hủy Bỏ</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
export default TaskForm
