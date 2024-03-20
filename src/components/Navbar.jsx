import {Stack,Typography} from '@mui/material';
import {Link} from  'react-router-dom';
import {SearchBar} from './index';
import { logo } from '../utils/constants';

const Navbar = () => (
	<Stack 
	direction="row" 
	alignItems="center" 
	p={2} 
	sx={{position:'sticky',background:'#000', top:0, justifyContent:'space-between'}}>

	<Link to="/" style={{display:'flex', alignItems:'center'}}>
		<img src={logo} alt="logo" height={45}/>
	</Link>
	<Typography variant="h4" fontWeight="bold" mr={90} sx={{ color: "white" }}>
		YTUBE
	</Typography>
	
	<SearchBar/>

	</Stack>
)

export default Navbar
