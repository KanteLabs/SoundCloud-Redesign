import React, { Component } from 'react';
import { client_id } from './config';
import 'isomorphic-fetch';
import 'whatwg-fetch';
import SC from 'soundcloud';

class Genres extends Component {

//let tags = "https://api.soundcloud.com/tracks?linked_partitioning=1&client_id="+ client_id +"&limit=50&offset=0&tags=deep%20house";

	render(){
		return(
		<div className="genreList">
			<ul>
				<li>Hi</li>
			</ul>
		</div>
		)
	}
}

export default Genres;