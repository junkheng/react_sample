import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
	root: {
		width: 385,
	},
});

export default function LabelBottomNavigation() {
	const classes = useStyles();
	const [value, setValue] = React.useState('recents');

	function handleChange(event, newValue) {
		setValue(newValue);
	}

	return (
		<BottomNavigation value={value} onChange={handleChange} className={classes.root}>
			<BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
			<BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
			<BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
			<BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
			<BottomNavigationAction label="Settings" value="settings" icon={<SettingsIcon />} />
		</BottomNavigation>
	);
}