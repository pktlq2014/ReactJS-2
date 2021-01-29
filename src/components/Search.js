import React, { Component } from "react"

class Search extends Component {
	render() {
		return (
			<div class="input-group">
				<input type="text" class="form-control" placeholder="Nhập từ khóa..." />
				<div class="input-group-btn mr-15">
					<button class="btn btn-primary" type="button">
						<i class="fa fa-search mr-5"></i>Tìm
					</button>
				</div>
			</div>
		)
	}
}

export default Search
