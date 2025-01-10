import CMS from 'netlify-cms-app';
import TagsSelect from './TagsSelect';

// Register custom widget
CMS.registerWidget('tagsSelect', TagsSelect);

// Load the CMS
CMS.init();
