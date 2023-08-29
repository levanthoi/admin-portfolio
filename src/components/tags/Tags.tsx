import { Input, Tag } from 'antd';
import React, { useState } from 'react';

const Tags: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');

  const handleInputChange = (e: any) => {
    setTagInput(e.target.value);
  };

  const handleInputPressEnter = (e: any) => {
    e.preventDefault();
    addTag();
  };

  const addTag = () => {
    const tagArray = tagInput
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag !== '');

    setTags([...tags, ...tagArray]);
    setTagInput('');
  };

  const removeTag = (removedTag: string) => {
    const newTags = tags?.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-full flex flex-wrap space-x-1">
        {tags.map((tag, index) => (
          <Tag key={index} closable onClose={() => removeTag(tag)} className="bg-blue-200 my-1">
            {tag}
          </Tag>
        ))}
        <Input.TextArea
          placeholder="Nhập thẻ tags, cách nhau bởi dấu phẩy ','"
          value={tagInput}
          onChange={handleInputChange}
          onPressEnter={handleInputPressEnter}
          className="max-w-full"
          style={{ marginLeft: '0' }}
        />
      </div>
    </div>
  );
};

export default Tags;
