import React, { useEffect, useState } from 'react';
import { SelectControl } from 'netlify-cms-widget-select';

const TagsSelect = ({ onChange, value }) => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  useEffect(() => {
    // Fetch the tags from your JSON file
    fetch('../public/tags.json')
      .then(response => response.json())
      .then(data => setTags(data))
      .catch(error => console.error('Error loading tags:', error));
  }, []);

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      onChange([...value, newTag]); // Add the new tag to the selected values
      setNewTag('');
      // Optionally: Add the new tag to the JSON file via an API
    }
  };

  return (
    <div>
      <SelectControl
        multiple
        value={value}
        onChange={onChange}
        options={tags}
        allowAdd={true}
        placeholder="Select or add tags"
      />
      <input
        type="text"
        value={newTag}
        onChange={(e) => setNewTag(e.target.value)}
        placeholder="Add a new tag"
      />
      <button onClick={handleAddTag}>Add Tag</button>
    </div>
  );
};

export default TagsSelect;
