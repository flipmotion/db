import React from 'react';

const text = {
  'Approval is hard...': {
    ru: 'Согласование - это сложно',
    en: 'Approval is hard...'
  },
  'But we can do it!': {
    ru: 'но мы можем это сделать!',
    en: 'But we can do it!'
  }
};

function textIn(lang) {
  return phraseId => (text[phraseId] ? text[phraseId][lang] : phraseId);
}

const Approval = ({ lang }) => {
  const phrase = textIn(lang);
  return (
    <div>
      <p>{phrase('Approval is hard...')}</p>
      <p>{phrase('But we can do it!')}</p>
    </div>
  );
};

export default Approval;
