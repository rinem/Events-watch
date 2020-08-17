import React, { Fragment } from 'react';
import spinner from './spinner.gif';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
export default () => (
	<Fragment>
		<div className='loader'>
			<Loader
				type='TailSpin'
				color='#e07927'
				height={100}
				width={100}
				timeout={3000} //3 secs
			/>
		</div>
	</Fragment>
);
