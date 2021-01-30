import React, { Component } from "react";
class TaskItem extends Component {
  onClick = () => {
    this.props.receiveDataFromTaskItem(this.props.id);
  }
  onDelete = () => {
    this.props.receiveDataFromTaskItemDelete(this.props.index);
  }
  onUpdate = () => {
    this.props.receiveDataFromTaskItemUpdate(this.props.id);
  }
  render() {
    return (
      <tr>
        <td>{this.props.index+1}</td>
        <td>{this.props.name}</td>
        <td class="text-center">
          <span onClick={this.onClick} class={this.props.status === true ? 'label label-success' : 'label label-danger'}>
            {this.props.status === true ? 'Kích Hoạt' : 'Ẩn'}
          </span>
        </td>
        <td class="text-center">
          <button type="button" class="btn btn-warning" onClick={this.onUpdate}>
            Sửa
          </button>
          &nbsp;
          <button onClick={this.onDelete} type="button" class="btn btn-danger">
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}


export default TaskItem;