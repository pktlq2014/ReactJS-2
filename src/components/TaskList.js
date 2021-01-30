import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    render() {
        var {tasks} = this.props;
        console.log(this.props.tasks);
        var showTaskItem = tasks.map((values, index) => {
            //index += 1;
            return <TaskItem
                key={values.id}
                receiveDataFromTaskItem={this.props.receiveDataFromTaskItem}
                index={index}
                receiveDataFromTaskItemUpdate={this.props.receiveDataFromTaskItemUpdate}
                receiveDataFromTaskItemDelete={this.props.receiveDataFromTaskItemDelete}
                id={values.id}
                name={values.name}
                status={values.status}
            />
        });
        return (
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th class="text-center">STT</th>
                            <th class="text-center">Tên</th>
                            <th class="text-center">Trạng Thái</th>
                            <th class="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input type="text" class="form-control" />
                            </td>
                            <td>
                                <select class="form-control">
                                    <option value="-1">Tất Cả</option>
                                    <option value="0">Ẩn</option>
                                    <option value="1">Kích Hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>



                        {showTaskItem}
                        </tbody>
                </table>
            </div>
        );
    }
}


export default TaskList;
